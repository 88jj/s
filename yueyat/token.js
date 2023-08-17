/****
本地数据库写值
$prefs.setValueForKey(value, key)
读取本地库的值
$prefs.valueForKey(key)
**/

let key = `yueyat_tokens`;

let tokens = $prefs.valueForKey(key);

console.log(`本地已存在的token = ${tokens}`);
