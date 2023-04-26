// User Interface Logic
$(document).ready(function() {

    // Form for checking voter status
    $("#formOne").submit(function(event) {
        const age = $("input#age").val();
        if (age >= 18) {
            window.location = "./update.html"
        } else {
            window.location = "./information.html"
        }

        event.preventDefault();
    });
    
    // Form for pre-registration
    $("#formTwo").submit(function(event) {

        $("#formTwo").hide();
        $(".congratulatory").show();

        event.preventDefault();
    });
});