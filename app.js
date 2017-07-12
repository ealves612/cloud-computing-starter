var app = require('./config/express')();
var mainRoutes = require('./app/routes/main')(app);

app.listen(3000, function(){
    console.log("servidor rodando");
});