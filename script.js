jQuery(document).ready(function () {

   jQuery('.form-button').click( function() {
       var form = jQuery(this).closest('form');
       
       if ( form.valid() ) {
           form.css('opacity','.5');
           var actUrl = form.attr('action');

           jQuery.ajax({
               url: actUrl,
               type: 'post',
               dataType: 'html',
               data: form.serialize(),
               success: function(data) {
                   form.html(data);
                   form.css('opacity','1');
                   //form.find('.status').html('форма отправлена успешно');
                   //$('#myModal').modal('show') // для бутстрапа
               },
               error:	 function() {
                    form.find('.status').html('серверная ошибка');
               }
           });
       }
   });
});



$(".header-button").hover(function(){
    $(".header-button-arrow").hide()
    $("#header-button-arrow-white").show()
},function(){
    $(".header-button-arrow").show()
    $("#header-button-arrow-white").hide()
})


$(".form-button").hover(function(){
    $(".form-button-arrow").hide()
    $("#form-button-arrow-black").show()
},function(){
    $(".form-button-arrow").show()
    $("#form-button-arrow-black").hide()
})

