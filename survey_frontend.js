$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/get-courses",
        method: "GET",
        success: function(res){
            var response = $.parseJSON(res);
            console.log(response);
        }
    });
});