let html = $response.body;

html =
  html.replace(/status":\d*/g, `status":0`);    

html =
  html.replace(/code":"\d*"/g, `code":0`);    

html =
  html.replace(/message" : "该场次不可订，请选择其他场次/g, `message":"`);

if (html.includes('</head>')) {
    html = '<script src="https://unpkg.com/vconsole@3.14.6/dist/vconsole.min.js" ignore></script><script ignore>new VConsole()</script>' + html;
}


$done({ body: html});

