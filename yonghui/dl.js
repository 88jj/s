let html = $response.body;

html = html.replace(/"couponreceivestate":"WAIT_RECEIVED"/g, `"totalStock":"CAN_RECEIVE"`);
html = html.replace(/"starttime":1698721860000/g, `"starttime":1698715299000`);

$done({ body: html});
