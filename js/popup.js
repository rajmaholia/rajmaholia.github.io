$(document).ready(function () { 

    $(".hire-me").click(function () { 
        $(".popup").addClass("active"); 
        
    });

    $(".close-button, .popup").click(function (e) {
        if (e.target === this) {
            $(".popup").removeClass("active");
        }
    });
});