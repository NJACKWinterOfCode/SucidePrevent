$(document).ready(function() {
    let User = []
    $("#uName").click(function(event) {
        event.preventDefault();
        $("#name-card").addClass("hidden");
        $("#sex-card").toggleClass("hidden");
    });


    $("#uSex").click(function(event) {
        event.preventDefault();
        $("#sex-card").addClass("hidden");
        $("#room-card").toggleClass("hidden");
    });


});