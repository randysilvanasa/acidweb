$(function() {
    $(".toggle").on("click",function(){
        
        if($(".tem").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }

    })
});

