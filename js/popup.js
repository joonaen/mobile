$(function(){

    $.ajax({
        url: './js/popup.json',
        dataType: 'json',
        success: function(data){
            var useData = data.info;
            
            function dataPrint(){
                
                    var txt = '<ul>';
                    
                    for(var i in useData){
                        

                        var $Image = useData[i].Image;
 
                        txt+='<li>';
                        txt+='<img src="'+ $Image +'" alt="">';
                        txt +='</li>';
                    }
 
                    txt += '</ul>';
 
                    $('.product_list').html(txt);
               
            };
            
            //초기실행, 함수호출
            dataPrint();
        } 
    });
     
 });

 $('.busiApt ul li a').click(function(e){
    e.preventDefault();
    var ind = $(this).parent().index();
 
    $('.modal_box').fadeIn('fast');
    $('.popup').fadeIn('slow');
    $('.product_list li:eq('+ind+')').fadeIn('slow').siblings().hide();
    
    $('.close_btn',).click(function(e){
      e.preventDefault();
      $('.modal_box').hide();
      $('.popup').hide();
      $('.product_list li').hide();
    });
    $('.modal_box',).click(function(e){
        e.preventDefault();
        $('.modal_box').hide();
        $('.popup').hide();
        $('.product_list li').hide();
      });
});
  

$('.busiUrban ul li a').click(function(e){
    e.preventDefault();
    var ind2 = $(this).parent().index()+3;
 
    $('.modal_box').fadeIn('fast');
    $('.popup').fadeIn('slow');
    $('.product_list li:eq('+ind2+')').fadeIn('slow').siblings().hide();
    
    $('.close_btn',).click(function(e){
      e.preventDefault();
      $('.modal_box').hide();
      $('.popup').hide();
      $('.product_list li').hide();
    });
    $('.modal_box',).click(function(e){
        e.preventDefault();
        $('.modal_box').hide();
        $('.popup').hide();
        $('.product_list li').hide();
      });
});
  
    

