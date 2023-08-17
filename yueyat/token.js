/****
本地数据库写值
$prefs.setValueForKey(value, key)
读取本地库的值
$prefs.valueForKey(key)
**/
let key = `yueyat_tokens`;
let tokens = $prefs.valueForKey(key);
console.log(`本地已存在的token = ${tokens}`);

// 获取抓包的token
let newToken = $request.headers['Authorization'];

// 是否清除token, 1清除旧的token，0不清除旧的token
let clearToken = 0;
if (clearToken){
  tokens = '';
  $prefs.setValueForKey(tokens, key);
  console.log(`清空本地value，key=${key}`);
}

// 如果本地已有token，不在存储
if (tokens.indexOf(newToken) !== -1){
  console.log(`本地存储已有该token，${newToken}`);
  $notify(`锡林通知`, ``, `获取到新的token已存储，不在存储：${newToken}`);
  newToken = '';
}

// 这里设置新的token
let value = '';

if (newToken){
  $notify(`锡林通知`, ``, `获取到新的token：${newToken}`);
  value = newToken;
}

if (value){
  if(tokens){
    value = tokens + ',' + value;
  }
  console.log(`修改新值key=${key} value=${value}`);
  $prefs.setValueForKey(value, key);
}

$done();
