/****
本地数据库写值
$prefs.setValueForKey(value, key)
读取本地库的值
$prefs.valueForKey(key)
**/
let key = `yueyat_tokens`;
let tokens = $prefs.valueForKey(key);
console.log(`本地已存在的token = ${tokens}`);
// 是否清除token
let clearToken = 1;
if (clearToken){
  $prefs.setValueForKey('', key);
}
// 这里设置新的token
let value = '';

if (value){
  if(tokens){
    value = tokens + ',' + value;
  }
  console.log(`修改新值key=${key} value=${value}`);
  $prefs.setValueForKey(value, key);
}

$done();
