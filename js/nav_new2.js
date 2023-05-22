// var timeonoff; // 타이머 처리
//     var imageCount = 3; // 슬라이드 이미지 총개수
//     var cnt = 1; // 이미지 순서 1 2 3 4 5 1 2 3 4 5....
//     var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때
//     var timer = 5000; // 시간 설정

//     $('.btn1').addClass('on'); // 첫번째 불렛 on
//     $('.gallery .link1').show(); // 첫번째 이미지 on
    
//     // 자동 롤링
//     function moveg(){
//         if(cnt == imageCount+1){ cnt=1; }
//         if(cnt == imageCount){ cnt=0; } // 카운트 초기화
      
//         cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
//         $('.gallery li').hide(); // 모든 이미지 off
//         $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지만 on
      
//         $('.mbutton').removeClass('on'); // 모든 버튼 off
//         $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
       
//         if(cnt == imageCount){ cnt=0; }  //카운트의 초기화 0
//     }
//     timeonoff= setInterval( moveg , timer);
   

//     // 버튼 제어
//     $('.mbutton').click(function(){  //각각의 버튼 클릭시
//         clearInterval(timeonoff); //타이머 중지     
	 
// 	    $('.gallery li').hide(); // 모든 이미지 off
        
//         for(var i=0; i<=imageCount; i++){ // 클릭한 버튼과 cnt 맞추기
//             if(this.className == 'mbutton btn'+i){ cnt = i; }
//         }
//         $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지 on

//         $('.mbutton').removeClass('on'); // 모든 버튼 off
//         $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
      
//         if(cnt == imageCount){ cnt=0; }  //카운트 초기화
      
//         timeonoff = setInterval( moveg , timer); //타이머의 부활!!!
      
//         if(onoff == false){ // 중지 상태면
//             onoff = true; // 동작해라
//             $('.ps').html('<i class="fa-solid fa-stop"></i>'); // 중지버튼으로 변경
//         }
//     });
    
  
  
  
  
  
  
  
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $("#headerArea .navBtn").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       var documentHeight =  $(document).height(); // 전체 페이지의 높이
       $("#gnb").css('height',documentHeight);
       $(".modal").css('height',documentHeight)  // 네비의 높이를 전체 페이지의 높이로 변경

      if(op==false){  // 메뉴가 닫혀있는 상태에서 클릭했는지
        $("#gnb").animate({left:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        $('#headerArea .modal').fadeIn('fast');
        
        op=true;
      }else{ // 메뉴가 열려있는 상태에서 클릭했는지
        $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        $('#headerArea .modal').fadeOut('fast');
        
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false,false,false];  // 가정법 false(서브 닫힘), true(서브 열림)
    var arrcount=onoff.length; // 배열의 개수 6
    
    // console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(e){ // 1depth 메뉴를 클릭하면 
      e.preventDefault()
        var ind=$(this).parents('.depth1').index(); // 0~5
        // var ind=$(this).index(#gnb .depth1 h3 a);
        
        // console.log(ind);
        
       if(onoff[ind]==false){  // 각각의 1depth메뉴의 서브가 닫혀있나
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow'); // 자신의 서브를 열어라
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); // 자신을 제외한 모든 서브를 닫아라
         for(var i=0; i<arrcount; i++) onoff[i]=false;   // 모든 배열값을 false로 변경
         onoff[ind]=true; // 자신의 대한 배열만 true로 변경
           
         $('.depth1 span').text('+');   
         $(this).find('span').text('-');   
            
       }else{  // 각각의 1depth메뉴의 서브가 열려있나
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
         onoff[ind]=false;   
           
         $(this).find('span').text('+');     
       }
    });    
  
  


  var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
  var on_off=false;  //false(안오버)  true(오버)
  
     $(window).on('scroll',function(){//스크롤의 거리가 발생하면
          var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
       //     

          if(scroll>smh-120){//스크롤300까지 내리면
              $('#headerArea .headerInner').css('background','#fff').css('border-bottom','1px solid #ccc');
              $('#headerArea .logo a').addClass('on')
              $('.dropdownmenu li a').css('color','#333');
              $('.topMenu li a').addClass('subOn'); 
              
        
          }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
             if(on_off==false){ //헤더에서 마우스가 벗어난 상태
                  $('#headerArea .headerInner').css('background','none').css('border-bottom','none');
                  $('.dropdownmenu li a').css('color','#fff');
                  $('.topMenu li a').removeClass('subOn'); 
                  $('#headerArea .logo a').removeClass('on');
             }
          }; 
          
       });




       $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        var winh = $(window).height()/3;
  
       
     
  
        if(scroll>winh){ //500이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');
            $('.topMove i').fadeIn('slow');  //top보여라~~~~
        }else{
            $('.topMove').fadeOut('fast');
            $('.topMove i').fadeOut('fast');//top안보여라~~~~
        }
   });
  
    $('.topMove').click(function(e){
       e.preventDefault();
        //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},500); 
    });







    $('.select .arrow').toggle(function(){
      $('.select .aList').slideDown('fast');
        $('.select .arrow').addClass('on');
    },function(){
          $('.select .aList').slideUp('fast');	
          $('.select .arrow').removeClass('on');
    });
     
     $('.select .arrow').on('focus', function () {        
        $('.select .aList').slideDown('fast');	
     });
     $('.select .aList li:last a').on('blur', function () {        
        $('.select .aList').slideUp('fast');
     });
     $('.select .arrow').click(function(e){
        e.preventDefault();
     });