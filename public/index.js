var chosenCvs = [];

$("button").click(function() {
    var button = $(this);
    var buttonValue = button.val();
    var buttonClass = button.attr("class");

    if(buttonClass !== "button choose-card-button checked"){
        $(this).addClass("checked");
        $(this).text("chosen");
        $(this).val(2);
        console.log(buttonValue);
        chosenCvs.push(1);
        if(chosenCvs.length > 3){
            $(".chosen-more").addClass("show");
        }
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
    else {
        $(this).removeClass("checked");
        $(this).text("choose");
        $(this).val(1);
        console.log(buttonValue);
        chosenCvs.splice(1, 1);
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
});