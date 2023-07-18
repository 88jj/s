let html = $response.body;

html = html.replace(/stock":\d*/g, `stock":10`);

html = html.replace(/status":\d*/g, `status":1`);

if (html.includes('</head>')) {
    html = '<script src="https://unpkg.com/vconsole@3.14.6/dist/vconsole.min.js" ignore></script><script ignore>new VConsole()</script>' + html;
}
$done({ body: html});

