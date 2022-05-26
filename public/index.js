var chosenCvs = [];

$("input").click(function() {
    
    var button = $(this);
    var buttonClass = button.attr("class");
    console.log(buttonClass)
    if(buttonClass !== "btn-check any"){
        $(this).addClass("any");
        chosenCvs.push(1);
        console.log(chosenCvs);
        
        if(chosenCvs.length > 3){
            $(".chosen-more").addClass("show");
        }
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
    if(buttonClass == "btn-check any"){
        
        $(this).removeClass("any");
        chosenCvs.splice(0, 1);
        console.log(chosenCvs);
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
});