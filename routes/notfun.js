const router = require("koa-router")();
var Koa = require("koa");
var bodyParser = require("koa-bodyparser"); // 引入模块
var app = new Koa();
app.use(bodyParser()); // 将模块作为koa的中间件引入
var request = require("request");
const { query } = require("../mysql/query");
const { QUERY_DATAS_LIMIT, VISIT_COUNT, GET_VISITS } = require("../mysql/sql");

// 获得音频列表
router.get("/getMusicList", async (ctx, next) => {
  let { pageNo, pageSize } = ctx.request.query;
  let data = await query(QUERY_DATAS_LIMIT("music_list", pageNo, pageSize));
  ctx.body = {
    code: 200,
    success: true,
    data,
  };
});
// 访问计数
router.post("/visitCount", async (ctx, next) => {
  const { ip, time } = ctx.request.body;
  await query(VISIT_COUNT(ip, time));
  ctx.body = {
    code: 200,
    success: true,
    data: "Success",
  };
});
function dayStat(data) {
  let statData = [];
  for (let i = 0; i < 24; i++) {
    statData.push({
      count: 0,
      hour: `${i < 10 ? `0` + i : i}:00`,
    });
  }
  data.forEach((e) => {
    let date = new Date(e.time);
    let h = date.getHours();
    statData[h].count++;
  });
  return statData;
}
function weekStat() {
  let today = new Date().getDate();
  let statData = [];
  for (let i = 0; i < 7; i++) {
    statData.unshift({
      count: 0,
      day: `${new Date().getMonth() + 1}-${today - i}`,
    });
  }
  if (today < 7) {
  }
}
function statistics(type, data) {
  let data_;
  switch (type) {
    case 0:
      data_ = dayStat(data);
      return data_;
    case 1:
      data_ = dayStat(data);
      return data_;
    case 2:
      way = "week";
      break;
    case 3:
      way = "month";
      break;
    case 4:
      way = "lastMonth";
      break;
    case 5:
      way = "year";
      break;
    default:
      data_ = data;
      return data_;
  }
}

// switch (type) {
//   case 0:
//     way = "day";
//     break;
//   case 1:
//     way = "lastday";
//     break;
//   case 2:
//     way = "week";
//     break;
//   case 3:
//     way = "month";
//     break;
//   case 4:
//     way = "lastMonth";
//     break;
//   case 5:
//     way = "year";
//     break;
//   default:
//     way = "all";
//     break;
// }
router.get("/getVisits", async (ctx, next) => {
  const { type } = ctx.request.query;
  let data = await query(GET_VISITS(type ? "day" : "all"));
  // data = statistics(type, data);
  console.log(data);
  ctx.body = {
    code: 200,
    success: true,
    data: data[0]["COUNT(*)"],
  };
});

module.exports = router;
