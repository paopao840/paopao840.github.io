$("document").ready(function (){

    $("#tableOfContentsButton").click(function (){
        $("#tableOfContentsText").slideUp();
    })
        
    $("#tableOfContents").click(function (){
        $("#tableOfContentsText").slideDown();
    })
})