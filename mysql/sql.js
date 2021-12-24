/************************数据库操作相关************************
 * 数据库操作相关 DDL
 *************************************************************/
//(1) 创建数据库
const CREATE_DB = (dbName) => `CREATE DATABASE IF NOT EXISTS ${dbName};`;
//(2) 查询所有数据库
const SHOW_ALL_DB = `SHOW DATABASES`;
//(3) 删除数据库
const DELETE_DB = (dbName) => `DROP DATABASE IF EXISTS ${dbName};`;
//(4) 查询正在使用的数据库
const SELECT_DATABASE = `SELECT DATABASE()`;
//(5) 使用数据库
const USE_DB = (dbName) => `USE ${dbName};`;

/************************数据表操作相关************************
 * 数据表操作相关 DDL
 *************************************************************/
//(1) 查询所有数据表
const SHOW_ALL_TABLE = `SHOW TABLES`;
//(2) 添加数据表
const CREATE_TABLE = (tableName) =>
  `CREATE TABLE IF NOT EXISTS ${tableName} (id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',created_time TIMESTAMP COMMENT 'created time',updated_time TIMESTAMP COMMENT 'updated time')`;
//(3) 删除表
const DROP_TABLE = (tableName) => `DROP TABLE IF EXISTS ${tableName};`;
//(4) 添加字段
var ADD_COLUM = (tableName, column_name, column_type) =>
  `ALTER TABLE ${tableName} ADD ${column_name} ${column_type};`;
//(5) 删除字段
var DROP_COLUM = (tableName, column_name) =>
  `ALTER TABLE ${tableName} DROP ${column_name};`;
/************************数据操作相关************************
 * 数据操作相关 DML
 *************************************************************/
//(1) 查询表中所有数据
var QUERY_DATAS = (tableName) => `SELECT * FROM ${tableName}`;
// 分页查询
var QUERY_DATAS_LIMIT = (tableName, NO = 1, size = 10) =>
  `select * from ${tableName} limit ${(NO - 1) * size}, ${size};`;
//(2) 插入数据(全部列)
var INSERT_DATAS = (tableName, values) =>
  `INSERT INTO ${tableName} VALUES (${values});`;
//(3) 插入数据(部分列)
var INSERT_DATA = (tableName, colums, values) =>
  `INSERT INTO ${tableName}(${colums}) VALUES (${values});`;
//(4) 删除数据(根据id)
var DELETE_DATA_BY_ID = (tableName, id) =>
  `DELETE FROM ${tableName} WHERE (id = ${id});`;
//(5) 删除所有数据
var DELETE_DATAS = (tableName) => `DELETE FROM ${tableName};`;
//(6) 更新数据条目
var UPDATE_DATA = (tableName, id, colum, value) =>
  `UPDATE ${tableName} SET ${colum} = ${value} WHERE id = ${id};`;
// 访问计数
// var VISIT_COUNT = (ip, time) => `UPDATE count set countnum=countnum+1 where id=0;`;
var VISIT_COUNT = (ip, time) =>
  `INSERT INTO count SET ip='${ip}',time='${time}';`;
const ways = {
  day: `SELECT COUNT(*) FROM count WHERE TO_DAYS(time) = TO_DAYS(now()) && ip != '183.230.162.215';`,
  lastday: `SELECT * FROM count WHERE TO_DAYS(NOW()) - TO_DAYS(time) <= 1`,
  week: `SELECT * FROM count WHERE DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(time)`,
  month: `SELECT * FROM count WHERE DATE_FORMAT(time, '%Y%m') = DATE_FORMAT(CURDATE(), '%Y%m')`,
  lastMonth: `SELECT * FROM count WHERE PERIOD_DIFF(date_format(now(), '%Y%m'), date_format(time, '%Y%m'))=1`,
  year: `SELECT * FROM count WHERE DATE_FORMAT(time, '%Y' ) = DATE_FORMAT( CURDATE( ) , '%Y' )`,
  all: `SELECT COUNT(*) FROM count WHERE ip != '183.230.162.215';`,
};
const GET_VISITS = (way) => {
  console.log(ways[way]);
  return ways[way];
};

/************************查询操作相关************************
 * 数据查询相关 DQL
 *************************************************************/
//(1)
/************************约束/外键/字符集相关************************
 * 约束/外键/字符集相关
 *************************************************************/
//(1)
/************************视图/索引相关************************
 *  视图/索引相关
 *************************************************************/
//(1)
/************************事务相关************************
 *  事务相关
 *************************************************************/
//(1)

module.exports = {
  //数据库操作相关 DDL
  CREATE_DB,
  SHOW_ALL_DB,
  DELETE_DB,
  SELECT_DATABASE,
  USE_DB,
  //数据表操作相关 DDL
  SHOW_ALL_TABLE,
  CREATE_TABLE,
  DROP_TABLE,
  ADD_COLUM,
  DROP_COLUM,
  //数据操作相关 DML
  QUERY_DATAS,
  QUERY_DATAS_LIMIT,
  INSERT_DATAS,
  INSERT_DATA,
  DELETE_DATA_BY_ID,
  DELETE_DATAS,
  UPDATE_DATA,
  VISIT_COUNT,
  GET_VISITS,
};
