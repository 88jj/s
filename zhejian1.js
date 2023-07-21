let html = $response.body;

html = html.replace(/21005/g, `0`);

html = html.replace(/stock":"0/g,`stock":"33`);

html = html.replace(/status":\d*/g,`status":1`);

if (html.includes('</head>')) {
    html = '<script src="https://unpkg.com/vconsole@3.14.6/dist/vconsole.min.js" ignore></script><script ignore>new VConsole()</script>' + html;
}


$done({ body: html});

