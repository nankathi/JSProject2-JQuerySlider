$(document).ready(function(){
   //Set options
    var speed = 500;            //Fade speed
    var autoSwitch = true;      //Auto slider option
    var autoSwitchSpeed = 4000; //Auto siwtch speed
    
    //Add inital active class
    $('.slide').first().addClass('active');
    
    //Hide all slides
    $('.slide').hide();
    
    //Show first slide
    $('.active').show();
    
    //Next slide
    $('#next').on('click',nextSlide); //End of Next slide
    
    
    //Prev slide
    $('#prev').on('click',prevSlide);//End of Prev slide
    
    //Auto Slider Handler
    if(autoSwitch == true){
        setInterval(nextSlide, autoSwitchSpeed);
    } //End of Auto Slide if stmt
    
    
    //Switch function to Next slide
    function nextSlide(){
         $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    
    
    //Switch function  to prev slide 
    function prevSlide(){
         $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});