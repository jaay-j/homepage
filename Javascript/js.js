alert("Hello")
$(document).click(function() {
    $(".container").css("grid-template-columns", "repeat(8, 1fr)")
})

var array = ["element 1", "element 1", "element 1", "element 1"]
console.timeLog(array)
var i = 1;

$(document).mousemove(function() {
    //$(".item").css("background", "pink")
    if($(".item1:hover").length == 1){ //!= means not equal
        $(".item1").css("background", "orange")
        $("#title1").css("font-size", "32px")
        $("#title1").css("letter-spacing", "20px")
        $("#title1").css("filter", "blur(0px)")
        } else {
        $(".item1").css("background", "pink")//rgb(181, 30, 70)
        $("#title1").css("font-size", "20px")
        $("#title1").css("letter-spacing", "normal")
        $("#title1").css("filter", "blur(2px)")
    }

    if($(".item2:hover").length == 1){
            $(".item2").css("background", "red")
            $("#title2").css("font-size", "32px")
            $("#title2").css("letter-spacing", "20px")
            $("#title2").css("filter", "blur(0px)")
        } else {
            $(".item2").css("background", "pink")
            $("#title2").css("font-size", "20px")
            $("#title2").css("letter-spacing", "normal")
            $("#title2").css("filter", "blur(2px)")
        }
    if($(".item3:hover").length == 1){
            $(".item3").css("background", "purple")
            $("#title3").css("font-size", "32px")
            $("#title3").css("letter-spacing", "20px")
            $("#title3").css("filter", "blur(0px)")
        } else {
            $(".item3").css("background", "pink")
            $("#title3").css("font-size", "20px")
            $("#title3").css("letter-spacing", "normal")
            $("#title3").css("filter", "blur(2px)")
        }
    if($(".item4:hover").length == 1){
            $(".item4").css("background", "green")
            $("#title4").css("font-size", "32px")
            $("#title4").css("letter-spacing", "20px")
            $("#title4").css("filter", "blur(0px)")
        } else {
            $(".item4").css("background", "pink")
            $("#title4").css("font-size", "20px")
            $("#title4").css("letter-spacing", "normal")
            $("#title4").css("filter", "blur(2px)")
        }
    if($(".item5:hover").length == 1){
            $(".item5").css("background", "blue")
            $("#title5").css("font-size", "32px")
            $("#title5").css("letter-spacing", "20px")
            $("#title5").css("filter", "blur(0px)")
        } else {
            $(".item5").css("background", "pink")
            $("#title5").css("font-size", "20px")
            $("#title5").css("letter-spacing", "normal")
            $("#title5").css("filter", "blur(2px)")
        }
    if($(".item6:hover").length == 1){
            $(".item6").css("background", "grey")
            $("#title6").css("font-size", "32px")
            $("#title6").css("letter-spacing", "20px")
            $("#title6").css("filter", "blur(0px)")
        } else {
            $(".item6").css("background", "pink")
            $("#title6").css("font-size", "20px")
            $("#title6").css("letter-spacing", "normal")
            $("#title6").css("filter", "blur(2px)")
        }
    if($(".item7:hover").length == 1){
            $(".item7").css("background", "grey")
            $("#title7").css("font-size", "32px")
            $("#title7").css("letter-spacing", "20px")
            $("#title7").css("filter", "blur(0px)")
        } else {
            $(".item7").css("background", "pink")
            $("#title7").css("font-size", "20px")
            $("#title7").css("letter-spacing", "normal")
            $("#title7").css("filter", "blur(2px)")
        }
    if($(".item8:hover").length == 1){
            $(".item8").css("background", "grey")
            $("#title8").css("font-size", "32px")
            $("#title8").css("letter-spacing", "20px")
            $("#title8").css("filter", "blur(0px)")
        } else {
            $(".item8").css("background", "pink")
            $("#title8").css("font-size", "20px")
            $("#title8").css("letter-spacing", "normal")
            $("#title8").css("filter", "blur(2px)")
        }
})

$(document).scroll(function() {
    //console.log("I am scrolling")
    $(".block").addClass("move")

    var fromTop = $(document).scrollTop()
    console.log(fromTop)

    if(fromTop > 600){
        $("#last").css("opacity", "1")
    } else {
            $("$last").css("opacity", "0.3")
    }

})