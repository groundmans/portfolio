
const line = document.querySelector('.border');
// console.log(line);

const links = document.querySelectorAll('.header_inner li a');
// console.log(links);

const colors =['#ff6cab','skyblue','green','#F1BCAE','red','#ee4d5f','#EAE0D0','#C9DECF','#3a3985','#7d77ff','ea4d2c']


for(let i=0;i<links.length;i++){
    links[i].style.opacity=0.3;
    links[i].addEventListener('mouseenter',mouseenterFunc)
}


function mouseenterFunc(){
    //this
    // parentNode 부모요소
    // conatins on이라는 클래스가 존재하는지 물어보는것
    // a 의 부모 li 에 on이라는 클래스가 있으면 이라는 함수내용
    if(!this.parentNode.classList.contains('on')){
        for(let i=0;i<links.length;i++){
        
        if(links[i].parentNode.classList.contains('on')){
            links[i].parentNode.classList.remove('on')
        }
        links[i].style.opacity=0.3;

        }
        this.parentNode.classList.add('on')
        this.style.opacity=1;
        this.style.fontWeight='bold';

        //links요소의 가로사이즈,높이사이즈를 알아야함
        const width = this.getBoundingClientRect().width;
        // console.log('가로'+width);
        const height = this.getBoundingClientRect().height;
        // console.log('높이'+height);
        //x,y좌표 구하는방법
        const left=this.getBoundingClientRect().left;
        // console.log('왼쪽'+left)
        const top=this.getBoundingClientRect().top;
        // console.log('위쪽'+top)
        
    
        //border 삽입
        line.style.width=width+'px'
        line.style.height=height+'px'
        line.style.left=left+'px'
        line.style.top=top+'px'

        line.style.borderColor=colors[Math.floor(Math.random()*11)];

        // const random=console.log(Math.floor(Math.random()*11))


    }
}


$(function(){
    
    $('#fullpage').fullpage({
        //options here
        sectionsColor: ['#C9DECF','#EAE0D0','#F1BCAE','#111','#111'],
        anchors: ['home', 'about','skill', 'portfolio','contact'],
        autoScrolling:true,
        scrollHorizontally: true,
        navigation:true,
        navigationPosition:'right',
        

        afterLoad: function(anchorLink, index){
            // console.log("현재섹션 =  " + index);
            if(index==1){
                $('.home_inner .txt').animate({ 'left':'10px', 'opacity':1})
            }
            
            if(index==2)
            {
                $('.about_inner h3').animate({ 'opacity':1})
                $('.about_inner h4').delay(1000).animate({ 'opacity':1})
                $('.about_inner .intro').delay(1500).animate({ 'opacity':1})
            
            

            
            
        }
        if(index==3){
            $('.skill_inner .txt').animate({'left':0 , 'opacity':1},1000);
        
            $('.skill .depth2 li:first-child').animate({ 'opacity':1},1000);
            $('.skill .depth2 li:nth-child(2)').animate({ 'opacity':1},1000);
            $('.skill .depth2 li:nth-child(3)').animate({ 'opacity':1},1000);
            $('.skill .depth2 li:nth-child(4)').animate({ 'opacity':1},1000);
            $('.skill .depth2 li:nth-child(5)').animate({ 'opacity':1},1000);
            $('.skill .depth2 li:last-child').animate({ 'opacity':1},1000);

            $('.depth2 span .bar1').delay(1500).animate({'width':'80%', 'opacity':1},2000)
            $('.depth2 span .bar2').delay(1700).animate({'width':'80%', 'opacity':1},2000)
            $('.depth2 span .bar3').delay(1900).animate({'width':'95%', 'opacity':1},2000)
            $('.depth2 span .bar4').delay(2100).animate({'width':'90%', 'opacity':1},2000)
            $('.depth2 span .bar5').delay(2300).animate({'width':'60%', 'opacity':1},2000)
            $('.depth2 span .bar6').delay(2500).animate({'width':'70%', 'opacity':1},2000)
            
        
        }

            if(index==4){
                $('.pf_inner .tab').animate({'opacity':1},1000)
                $('.pf_inner .text h3').delay(500).animate({'opacity':1},1000)
                $('.slick_slide').delay(1000).animate({'opacity':1},2000)
                
                
            
            }
            // if(index==4){alert('현재 포트폴리오의 마지막 부분입니다.')}
            if(index==5){
                $('h1').find('img').attr('src','images/f_logo.png')
                $('.line span').addClass('on')
                $('header').addClass('on')
                $('header ul li a').css('color','#fff')
                
            }
            else{$('h1').find('img').attr('src','images/logo.png')
            $('.line span').removeClass('on')
            $('header').removeClass('on')
            $('header ul li a').css('color','#000')
           
        }
            
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            $('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + " index:" + index + " slideAnchor:" + slideAnchor +" slideIndex:" + slideIndex + '</p>');
            console.log("현재슬라이드번호 =" + slideIndex);
      
        },
        
        
    });

    
        let sw=1;
        
    $('.line').click(function(){
        if(sw==1){
            $('.line').addClass('on');
            // $('.m_btn').css('left','400px')
        $('.line span').addClass('on');
        $('.menu_page').addClass('on')
        $('.cover').addClass('on')
        $('body').addClass('on')
        sw=0
        }
        else{
            $('.line').removeClass('on');
            // $('.m_btn').css('left','270px')
        $('.line span').removeClass('on');
        $('.menu_page').removeClass('on')
        $('.cover').removeClass('on')
        $('body').removeClass('on')
        sw=1
        }
        // $('.list li').click(function(){
        //     sw=1
        // })
        



    })
    $('.menu_page').click(function(){
        $('.line').removeClass('on');
        $('.m_menu').removeClass('on');
        $('.line span').removeClass('on');
        $('.menu_page').removeClass('on')
        $('.cover').removeClass('on')
        $('body').removeClass('on')
    })
    $('.cover').click(function(){
        $('.line').removeClass('on');
        $('.m_menu').removeClass('on');
        $('.line span').removeClass('on');
        $('.menu_page').removeClass('on')
        $('.cover').removeClass('on')
        $('body').removeClass('on')
    })
    $('.list li').mouseenter(function(){
        $(this).addClass('on')
    })
    $('.list li').mouseleave(function(){
        $(this).removeClass('on')
    })
       
    // ---slick---
    
   
    
    $('.slick_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
       zindex: 2000,
       
        responsive:[
            {breakpoint: 1200,
                settings:{
                        slidesToShow:2,
                        dots:true,
                        arrows:false
                }
            },
            {breakpoint: 600,
                settings:{
                    
                        slidesToShow:1,
                        dots:true,
                        arrows:false
                }
            }
        ]
    })
   $('.tab li').click(function(){
       let num = $(this).index()
       $(this).addClass('on').siblings().removeClass('on')
       $('.slick_slide').hide()
       $('.slick_slide').eq(num).show()
       $('.slick_slide').slick('setPosition')
   })
//   ---lightBox---
// $('.slick_slide li .light').lightBox({
//     overlayBgColor: '#000',
//     overlayOpacity: 0.8,
//     imageLoading: 'images/loding.gif',
//     imageBtnClose: 'images/lightbox-btn-close.gif',
//     imageBtnPrev: 'images/lightbox-btn-prev.gif',
//     imageBtnNext: 'images/lightbox-btn-next.gif',
//     containerResizeSpeed: 1000,
//     txtImage: '작품',
//     scrolling:false,

//     txtOf: '/',
//    });
   $('.group1').colorbox({rel:'group1',
   maxWidth: '90%',
    maxHeight: '95%',
    title: function () {
        return $(this).find('.inner').html();
    }})
    $('.group2').colorbox({rel:'group1',
   maxWidth: '90%',
    maxHeight: '95%',
    title: function () {
        return $(this).find('.inner').html();
    }})
   
    
// ---section4---
// $('.slick_slide  .wrap').mouseenter(function(){
//     $(this).find('.slide_cover').stop().fadeIn()
// })
// $('.slick_slide  .wrap').mouseleave(function(){
//     $(this).find('.slide_cover').stop().fadeOut()
// })

$('.e_mail').mouseenter(function(){
    $(this).parent().find('.smile').addClass('on')

})
$('.e_mail').mouseleave(function(){
    $(this).parent().find('.smile').removeClass('on')

})




});






