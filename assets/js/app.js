$(function(){

    let header_inner = $("#header_inner"),
        headerH = $("#header").innerHeight();
    let scrollOffset = $(window).scrollTop();

    /*Fixed header_inner*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){

        if(scrollOffset >= headerH){
            header_inner.addClass("fixed");
        }
        else{
            header_inner.removeClass("fixed");
        }
    }


    /*menu nav toggle*/ $("#nav_toggle").on("click",function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /*Smooth scroll*/
        $("[data-scroll]").on("click", function(event){
            event.preventDefault();

            let $this = $(this),
                blockId = $this.data('scroll'),
                blockOffset = $(blockId).offset() .top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

           $("html, body").animate({
              scrollTop: blockOffset
           }, 500);
        });

    /*Slider https://kenwheeler.github.io/slick/*/
    $('#slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }]
    });

    /*tabs*/
    $('[data-tab]').on('click', function(){
        let $elemID = $(this).data('tab');

        $('.column_text').fadeOut(0);
        $($elemID).fadeToggle(700);
    });



});
