const router = require("koa-router")();
var path = require("path");
const fs = require("fs");
var Koa = require("koa");
var bodyParser = require("koa-bodyparser"); // 引入模块
var app = new Koa();
app.use(bodyParser()); // 将模块作为koa的中间件引入
var request = require("request");

let { md5 } = require("../public/javascripts/md5");
let { cn } = require("../public/data/test");
const { rejects } = require("assert");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/musicList", async (ctx, next) => {
  // 获得音频列表
  const src = "./public/data/list.json";
  let hasFile;
  hasFile = await isFileExisted(src);
  if (hasFile) {
    let data = await readFileToObj(src);
    ctx.body = {
      code: 200,
      success: true,
      data,
    };
  } else {
    let list = await getName();
    const listStr = JSON.stringify(list);
    fs.writeFile(src, listStr, (err) => {
      if (err) {
        console.log("创建文件失败:" + err);
      } else {
        console.log("创建文件成功");
      }
    });
    ctx.body = {
      code: 200,
      success: true,
      data: list,
    };
  }
});

router.get("/musicDetail", async (ctx, next) => {
  // 获得音乐详情
  const { id } = ctx.request.query;
  const filesSrc = "./public/data/list.json";
  const baseUrl = "./public/videos/";
  if (!id) {
    ctx.body = {
      success: false,
      code: 800101,
      message: "id错误",
    };
  }
  const list = await readFileToObj(filesSrc);
  log("id", id);
  const index = list.findIndex((e) => {
    return e.id === Number(id);
  });
  const item = list[index];
  const url = `/videos/${item.id}.${item.type}`;
  // const src = baseUrl + item.all;
  // const fileStream = await readFileFs(src);
  ctx.body = {
    code: 200,
    success: true,
    data: url,
  };
});
// 请求转发
router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  let data = await transmit(
    "https://zhxf.qhzhgd.com:62190/zhxfgdapi/guide-common/api/common/user/login",
    "post",
    { username, password }
  );
  ctx.body = data;
});
// 使用 request 插件发出真实请求
function transmit(url, type, data) {
  return new Promise((res, rej) => {
    request[type]({ url, form: data }, function (err, _res, body) {
      if (!err && _res.statusCode === 200) {
        let a = JSON.parse(body);
        res(a);
      } else {
        let a = JSON.parse(body);
        res({
          code: _res ? _res.statusCode : 404,
          data: null,
          message: "服务器错误",
          error: a,
        });
      }
    });
  });
}

function getName() {
  // 获得音频列表
  return new Promise((res, rej) => {
    const media = path.join(__dirname, "../public/videos");
    let obj = [];
    fs.readdir(media, (err, names) => {
      if (err) {
        rej(err);
      } else {
        obj = names.map((e, i) => {
          const name = e.split(".")[0];
          const type = e.split(".")[1];
          return {
            id: i,
            name,
            type,
            all: e,
          };
        });
        res(obj);
      }
    });
  });
}

function readFileToObj(src) {
  // 只用于读取json文件
  // 读取文件
  return new Promise((res, rej) => {
    let data;
    let read = fs.createReadStream(src);
    read.on("data", function (rlt) {
      data = JSON.parse(rlt.toString());
    });
    read.on("end", () => {
      res(data);
    });
  });
}

function readFileBuffer(src) {
  // 读取文件
  return new Promise((res, rej) => {
    let data;
    let read = fs.createReadStream(src);
    read.on("data", function (rlt) {
      data = rlt;
    });
    read.on("end", () => {
      res(data);
    });
  });
}

function readFileFs(src) {
  return new Promise((res, rej) => {
    fs.readFile(src, "utf-8", function (err, data) {
      if (err) {
        rej(err);
      } else {
        console.log(typeof data);
        res(data);
      }
    });
  });
}

function isFileExisted(src) {
  return new Promise((res) => {
    // 判断是否存在 文件
    fs.access(src, (err) => {
      if (err) {
        return false;
      } else {
        res(true);
      }
    });
  });
}

function log(n, e) {
  console.log(n);
  console.log(e);
  console.log("----------------------------");
}
module.exports = router;
