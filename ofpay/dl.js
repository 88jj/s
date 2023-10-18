let html = $response.body;

html = html.replace(/本次活动仅限上海地区用户参与/g, ``);

html = html.replace(/code":"1/g, `code":"0`);

html = html.replace(/errorCode":"1/g, `errorCode":"0`);

$done({ body: html});
