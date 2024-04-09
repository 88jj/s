/****
 本地数据库写值
 $prefs.setValueForKey(value, key)
 读取本地库的值
 $prefs.valueForKey(key)

 https://service.ule.com/applive/ysh/winRecord url script-request-body yshcookie.js
 hostname=service.ule.com
 **/

// 获取抓包的token
let newToken = $request.headers['Cookie'];
// let newToken = `crmMemberInfo="23sf3dwio|gg6Y2VHzS5ycoS6/hbso8wnk+K6lPQN0Rch4NCv0wxg7TObs8DNN5tkTtm0+AhH870VXRodaZKyFw+/H3Rhx/nse2qyA24/yIpP5vPdEqX867a4+f5QRCzrjAnCTUe3SoFIDQrQoVnuZSkFD12bcMR+MCQFy2JSYKOCEAzBh74c=|cQiSXFBhQhatMTEFfCKI0FBcG8uy9haazCs5lcM5iqGaBIcbjy9DMG8BspTY/8tjs7nrMifAWNX0BxuAkwqBWr9gkaS+0plu9jqMtmeDdF3PbKKHqM/TJ5Wz/e1GDPhxIiwmGRpheV8cy+Ta+SPOS3gYfdaOvADJSt18ym5/VrF4SNMhkZ2GjAS4pNwWrMcHb92aQXaUC9mZZxe7s+yiKfzDScVHS/0lpp+LpUPeZhcPRmRbb1+PgJ3sNmhy5YOtmosJIfmlyKkKsAn1b5cmxYeWOGINHDatlDU0lJSGEveBmNTqhg4pUw2AJjwKwJf3cQq5d7qo39nkUJA4sGDd0ctl+YJJCjLp"; ul_utk="MjNzZjNkd2lvfFJlZEpvVjZYT1JpTjlDQlA1dWZFc1BtaG1zNXNxTDJrUWNLc1B3VkhHNGdSajdoN28xRU15VGlxYkNSV2krVVJ1OFZQVE90Q2pzNDZlUXB6QitKVkl0UUVGNTNkTUZwSjlkNnBkTTFmM0l3dTNCV080UTN2MnVlU3R2Z3FyZkdsVTFjSi9rT3ZXQlJtaTNZZlR5WlV1TFRsUTUzWlAzdWFteHVvNUpzQXlFRT18M3NCVXVkNGxNZnBabW41T1NYQkN1RmZUTTVUKzNIa3ZzV3hEU09Dai94MXIxazR4amlsbThxc25xbUNiNVpGOFNMSWFIOFNQb2xFejFteUlsQUtDYUhCZWIzZGdTeDh6L1Axcjh0WmZNV3FrcVpxQmt2L0xRcm1EZUxsRXFRYzVqaFYvY1VHa0ZKR2F6NTlzYzBzR0FHR2x1dW5MMFVoSTBvN3NnbHUrckNaZHMxZ29mZ2U4VTMzTmFyTFJnNUx4R0hZdkRjRXhiYXdVVmV3WkExWEt6bDB1VGQzclAveDY="; yshNickName=166****6557; ul_vtk="uv=0240461813904512&&pv=ecdec0731ebfecc1b923025c3d95408d&&utn=1712648981781&&utl=1712648904512&&utc=1712648904512&&pf=352,170"; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218ec1d45ddce16-032e7e8f6a8b33c-553f7177-329160-18ec1d45ddd84d%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThlYzFkNDVkZGNlMTYtMDMyZTdlOGY2YThiMzNjLTU1M2Y3MTc3LTMyOTE2MC0xOGVjMWQ0NWRkZDg0ZCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218ec1d45ddce16-032e7e8f6a8b33c-553f7177-329160-18ec1d45ddd84d%22%7D; ul_adid=ylxdfx_merchant_yljf; ule_ck=828556369_1712648905_1712648904518_1712648981788; ule_usession=3610138367904516%7Cylxdfx_merchant_yljf; ul_acturl=https%3A%2F%2Fh5.ule.com%2Fbroadcast%2FbroadLive%2F11765%2F204834%3FsourceOfJump%3Dyshgzh%26storeid%3D1094524589%26shareId%3D563957230%26appName%3Dylxd%26adid%3Dylxdfx_merchant_yljf%26statistics%3DWX; ul_shuid=1094524589; sajssdk_2015_cross_new_user=1`;
newToken = newToken.replace(new RegExp("\"", 'g'), "")
var strings = newToken.split(";");

//console.info(strings)
let ul_utk = "";
strings.forEach(e => {
    if (e.indexOf("ul_utk=") >= 0) {
        ul_utk = e.replace(new RegExp("ul_utk=", 'g'), "")
    }
})
console.log(ul_utk)

let opts = {
    'open-url': "wechat://",
    'update-pasteboard': ul_utk
}
$notify("邮生活抓包cookie","", ul_utk, opts);

$done();
