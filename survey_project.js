var port    = 9000,
    express = require('express'),
    app     = express();

var mysql = require('mysql'),
    survey_project = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'survey_project'
    });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
/*.get will run if we get a "get" request to this URL.
you could use this whole get request as a POST request. Just a few minor word changes.
*/
app.get('/get-questions', function(req, res) {
    var myQuery = "SELECT * FROM questions";
    survey_project.query(myQuery, function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows));
        };
    });
});

app.get('/get-courses', function(req, res) {
    var myQuery = "SELECT * FROM courses";
    survey_project.query(myQuery, function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows));
        };
    });
});

app.listen(port);
console.log ("node is listening " + port);


