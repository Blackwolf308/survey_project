$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/get-courses",
        method: "GET",
        success: function(res){
            var courses = $.parseJSON(res);
            $("#survey-parts").prepend(`
<div class='well'>
    <div class='row'>
        <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-0">
            <h3 class="text-center">What course ar you taking?</h3>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
            <select class="form-control input-lg"name="c-id">
                <option disabled>Select One</option>
            </select>
        </div>
    </div>
</div>`);
            for (var i=0; i < courses.length; i++) {
                $("part0 select").append(`<option value="${courses[i].c_ID}>
                        ${courses[i].courses_code.toUpperCase()} taught by ${courses[i].professor}
                            </option>`);
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