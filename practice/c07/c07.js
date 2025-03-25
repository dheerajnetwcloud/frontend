$(':header').addClass('highlight').hide().fadeIn(2000);



var listText = $('ul').text();

var newItem = $('<li>').text(listText).hide();

$('ul').append(newItem);

newItem.fadeIn(2000);


$('ul li').addClass('highlight').hide().fadeIn(1000);


$('ul li').css('background-color', '#272727').hide().fadeIn(3000);

//addClass('highlight');


$('ul li').delay(20000).each(function(){
    $(this).text($(this).text().toUpperCase());
});

$('ul li').on('click', function(e){
    $(this).text($(this).text() + '  !  ' + $(this).text().length + e.type);
});