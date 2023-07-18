let html = $response.body;

html = html.replace(/stock":-?\d*/g, `stock":10`);
html = html.replace(/noCanBook":true/g, `noCanBook":false`);
html = html.replace(/status":\d*/g, `status":1`);
html = html.replace(/isAvailable":false/g, `isAvailable":true`);
html = html.replace(/dealStatus":\d*/g, `dealStatus":0`);
if (html.includes('</head>')) {
    html = '<script src="https://unpkg.com/vconsole@3.14.6/dist/vconsole.min.js" ignore></script><script ignore>new VConsole()</script>' + html;
}
$done({ body: html});

