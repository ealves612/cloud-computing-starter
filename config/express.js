var app = require('express')();
app.set('views', './app/views');
app.set('view engine', 'ejs');
    
module.exports = function(){
    return app;
}