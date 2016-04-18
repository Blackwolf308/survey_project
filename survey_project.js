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

app.post('/post-responses', function(req, res) {
    var myQuery = "INSERT INTO responses(resp1, resp2, resp3, resp4, resp5, c_id) VALUES (" +  req.query.resp1 + ", " + req.query.resp2 + ", " + req.query.resp3 + ", " + req.query.resp4 + ", " + req.query.resp5 + ")";
    survey_project.query(myQuery, function(err, rows) {
        if (err) {
            console.log("something went wrong");
        }   else {
            res.end('submitted');
        }
    });
});

app.listen(port);
console.log ("node is listening " + port);


