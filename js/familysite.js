$('.familySite .arrow').click(function(){
   $('.select .aList').fadeIn('slow');			  
});

$('.familySite .aList').mouseleave(function(){
   $(this).fadeOut('fast');			  
});

$('.familySite .arrow').on('focus', function () {        
   $('.select .aList').fadeIn('slow');	
});
$('.familySite .aList li:last a').on('blur', function () {        
   $('.select .aList').fadeOut('fast');
});
$('.familySite .arrow').click(function(e){
   e.preventDefault();
});

