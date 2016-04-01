var port    = 9000,
    express = require('express'),
    app     = express();

var mysql = require('mysql'),
    survey_app = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'survey_app'
    });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/get-questions', function(req, res) {
    var myQuery = "SELECT * FROM questions";
    survey_app.query(myQuery, function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
            res.end(JSON.stringify(rows));
        };
    });
});

app.get('/get-courses', function(req, res) {
    var myQuery = "SELECT * FROM courses";
    survey_app.query(myQuery, function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.end(JSON.stringify(rows));
        };
    });
});

app.listen(port);
console.log ("node is listening " + port);


