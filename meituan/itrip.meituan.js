
/**


 */

let html = $response.body;

html =
    html.replace(/"startTime":\d+/g, `"startTime":1714076800000`);

html =
    html.replace(/"rushStartTime":\d+/g, `"rushStartTime":1714096800000`);

html =
    html.replace(/"subscribeType":\d+/g, `"subscribeType":0`);

html =
    html.replace(/"content":"未开抢"/g, `"content":"破"`);


html =
    html.replace(/"canClick":0/g, `"canClick":1`);


html =
    html.replace(/"dealStatus":3/g, `"dealStatus":0`);

/*
if (!/"value":\d+,"priceExtInfo"/.test(html)) {
  html =
  html.replace(/"value":0,/g, `"value":0,"priceExtInfo":{"notRoundedOriginalPrice":0,"buttonContent":"立即预订","platformPrice":0},`);
}
*/

html =
    html.replace(/"stock":\d+/g, `"stock":77`);
html =
    html.replace(/"stockType":0/g, `"stockType":1`);

html =
    html.replace(/,"isAvailable":false/g, `,"isAvailable":true`);

html =
    html.replace(/"status":0,"price/g, `"status":1,"price`);
html =
    html.replace(/"noCanBook":true/g, `"noCanBook":false`);
html =
    html.replace(/"canSelect":false/g, `"canSelect":true`);

if(/&quantity=/.test($request.url) && /"status":4/.test(html)) {
    const quantity = $request.url.match(/&quantity=(\d+)/)?.[1];
    html =  JSON.stringify({
        "status": 0,
        "data": {
            "quantity": Number(quantity),
            "price": 0,
            "priceByCent": 0,
            "orderLevels": [
                {
                    "title": "场次时间",
                    "content": "12:00-16:30，场次时间内可随时入场"
                }
            ]
        },
        "domain": "lvyou"
    })
}


if (html.includes('</head>')) {
    html = '<script src="https://unpkg.com/vconsole@3.14.6/dist/vconsole.min.js" ignore></script><script ignore>new VConsole()</script>' + html;
}


$done({ body: html});
