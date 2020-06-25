$(function(){
    $("h2").addClass("animated bounce");
    var count = 0;
    
    // button to decrease the value of counter
    $("#btnDec").click(function(){
        if (count >= 1) {
            count = count - 1;
            $("h2").text(count);
        }
    })

    // button to increment the counter
    $("#btnInc").click(function(){
        count = count + 1;
        $("h2").text(count);
    })

    // set the counter to null
    $("#clearCount").click(function(){
        count = 0;
        $("h2").text(count);
    });

});


