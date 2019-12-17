
const http = require('http');
var fs = require('fs');



fs.readFile('../index.html', function (err, html) {
    const server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    })
    server.listen(3000);
});


console.log('Listening on port 3000....');