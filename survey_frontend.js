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
                var questions =$(`
<div>
    <div class='row'>
        <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-0>
            <h3 class="text_center">${questions[i].questions}</h3>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0>
            <div cass'form-group' id='part${i+1}'>
                <select class="form-control input-lg" name="q${i + 1}">
                    <option disabled >Select One</option>
                </select>
            </div>
        </div>
    </div>
</div>`);
                $("#survey-parts").append(question);
                for (var x=1; x <= 5; x++) {
                    $(("#part" + (i+1)) + " select").append(
                        `<option value="${x}">
${questions[i]["R" + x]}</option>`);
                }
            }
        }
    });
    $(".formSubmit").click(function(e) {
        e.preventDefault();
        $.ajax({
            url:"http://localhost:9000/get-responses" + $("survey").serialize(),
            method: "POST",
            success: function (res) {
                alert("Thank you for your time");
            }
        })
    })
});























