const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const index = require("./routes/index");
const users = require("./routes/users");
const fs = require("fs");

// error handler
onerror(app);
//适配vue history的中间件
const { historyApiFallback } = require("koa2-connect-history-api-fallback");
// handle fallback for HTML5 history API
app.use(historyApiFallback({ whiteList: ["/api"] }));
// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/page"));
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  // views(__dirname + "/views", {
  //   extension: "html",
  // })
  views(__dirname + "/page", {
    extension: "html",
  })
);

/* 代理配置 start */
const proxy = require("koa2-proxy-middleware"); //引入代理模块
// const proxyOptions = {
//   target: "http://192.168.16.159:8200", //后端服务器地址
//   changeOrigin: true, //处理跨域
// };
// const exampleProxy = proxy("/zhxfgdapi/*", proxyOptions); //api前缀的请求都走代理
// app.use(exampleProxy);
const options = {
  targets: {
    // (.*) means anything
    "/zhxfgdapi/(.*)": {
      target: "http://192.168.16.159:8200",
      changeOrigin: true,
      pathRewrite: {
        "^/zhxfgdapi": "/",
      },
    },
  },
};
app.use(proxy(options));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

// app.use(initMcList());

// 初始化音频列表
function initMcList() {
  fs.exists("./public/data/list.json", (e) => {
    if (e) {
      return;
    } else {
      var pa = fs.readdirSync("./public/videos");
      pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele);
        if (info.isDirectory()) {
          console.log("dir: " + ele);
          readDirSync(path + "/" + ele);
        } else {
          console.log("file: " + ele);
        }
      });
    }
  });
}
// initMcList();

module.exports = app;
