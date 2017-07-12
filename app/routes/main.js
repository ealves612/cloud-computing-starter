module.exports = function(app){
        app.get('/main', function(req, res){
        console.log("listando . . . . .");
        res.render("main/test");
    });
}