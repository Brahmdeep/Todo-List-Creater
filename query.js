// check off specififc todos by ckicking 

$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});

//click on X to delete

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
   event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todotext = $(this).val()
        $(this).val("")       
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todotext +" </li>")
      
    }
})

$(".fa-plus").click(1000,function(){
    $("input[type='text']").fadeToggle();
});