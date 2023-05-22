$(function(){

    $.ajax({
        url: './js/popup2.json',
        dataType: 'json',
        success: function(data){
            var useData = data.info;
            
            function dataPrint(){
                
                    var txt = '<ul>';
                    
                    for(var i in useData){
                        
                        var $Hname = useData[i].Hname;
                        var $Addr = useData[i].Addr;
                        var $Household = useData[i].Household;
                        var $Flatinfo = useData[i].Flatinfo;
                        var $Image = useData[i].Image;
 
                        txt+='<li>';
                        txt+='<img src="'+ $Image +'" alt="">';
                        txt+='<dl>';
                        txt+='<dt>'+$Hname+'</dt>'; 
                        txt+='<dd><strong>주소 :</strong>'+$Addr+'</dd>';
                        txt+='<dd><strong>총 세대 :</strong>'+$Household+'</dd>';
                        txt+='<dd><strong>분양평형 :</strong>'+$Flatinfo+'</dd>';
                        txt+='</dl>';
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

 $('.pop_menu li a').click(function(e){
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
  
    

