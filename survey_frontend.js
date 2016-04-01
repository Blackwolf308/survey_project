$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/get-courses",
        method: "GET",
        success: function(res){
            var courses = $.parseJSON(res);
            for (var i=0; i<courses.length; i++) {
                $("select#course").append("<option value='" + courses[i].c_ID + "'>" + courses[i].course_code + " " + courses[i].description + " " + courses[i].professor + "</option>");
            }
        }
    });
});