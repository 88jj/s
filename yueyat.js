let html = $response.body;


html =
  html.replace(/10:00/g, `00:00`);

html =
  html.replace(/startTime":"\d{4}-\d{2}-\d{2}/g, `startTime":"2023-07-10`);  


html =
  html.replace(/voucherStartSecond":\d*/g, `voucherStartSecond":0`);    


if (html.includes('</head>')) {
  html = '<script src="https://unpkg.com/vconsole@3.14.6/dist/vconsole.min.js" ignore></script><script ignore>new VConsole()</script>' + html;
}


$done({ body: html});

