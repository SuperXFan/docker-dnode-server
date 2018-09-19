'use strict';

var express = require('express');
var app = express();



var dnode = require('dnode');
var server = dnode({
    transform : function (s, cb) {
        cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase());
    },
    haha : function(clientContent,clientObject){
        console.log('[SERVER]:'+clientContent);
        clientObject('server return:'+clientContent);
    }
});
server.listen(5005);



app.get('/a', function (req, res) {
    res.send('这是一个get请求');
})



app.listen(3005);
console.log('server has connect success!!!');
