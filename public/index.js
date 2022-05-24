var chosenCvs = [];

$("input").click(function() {
    var button = $(this);
    var buttonClass = button.attr("class");

    if(buttonClass !== "button choose-card-button checked"){
        $(this).addClass("checked");
        chosenCvs.push(1);
        console.log(chosenCvs);
        
        if(chosenCvs.length > 3){
            $(".chosen-more").addClass("show");
        }
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
    if(buttonClass == "button choose-card-button checked"){
        
        $(this).removeClass("checked");
        chosenCvs.splice(0, 1);
        console.log(chosenCvs);
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
});