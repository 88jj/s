let html = $response.body;

html = html.replace(/totalStock":0/g, `totalStock":7`);

$done({ body: html});
