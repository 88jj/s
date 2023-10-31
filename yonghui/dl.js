let html = $response.body;

html = html.replace(/"couponreceivestate":"WAIT_RECEIVED"/g, `"totalStock":"CAN_RECEIVE"`);

$done({ body: html});
