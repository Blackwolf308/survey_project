$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/get-courses",
        method: "GET",
        success: function(res){
            var courses = $.parseJSON(res);
            c=courses;
            for (var i=0; i<courses.length; i++) {
                $("select.courses").append("<option value='" + courses[i].c_ID + "'>" + courses[i].course_code + " " + courses[i].start_date + " " + courses[i].professor + "</option>");
            }
        }
    });
    $.ajax({
        url: "http://localhost:9000/get-questions",
        method: "GET",
        success: function(resp){
            var questions = $.parseJSON(resp);
            r=questions;
            for (var i=0; i<questions.length; i++) {
                $("select.questions1").append("<option value='" + questions[0].q_id + "'>" + " " + questions[0].resp1 + "</option>");
            }
        }
    });
});