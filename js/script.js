// elements fade-in as user scrolls the page //

$(document).ready(function() {

    $(window).scroll( function(){

        $('.mx-2 card-deck').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});

// force page to start at top when refreshed //

$(document).ready(function(){
    $(this).scrollTop(0);
});
