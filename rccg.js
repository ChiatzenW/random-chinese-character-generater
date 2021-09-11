var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var x = "NULL";
$.ajax(
    {
        type: "GET",
        url: "arn:aws:execute-api:us-east-1:108949334896:su14n7n1r0/*/*/function2",
        
        success: function (s)
        {
       x=JSON.stringify(s)
    },
    error: function(request, ajaxOptions, thrownError)
        {
            x = "FAILED"
        }

  })

  
  var obj = {
    table: [x]
 }; 
 obj.table.push({id: 1, square:2});
 var json = JSON.stringify(obj);
 var fs = require('fs');
fs.writeFile('myjsonfile.json', json, 'utf8', callback);
fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push({id: 2, square:3}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
}});
