$(document).ready(function() {
    var currentSection = 0;
    $('#konten').hide();
    $('ul li a').click(function() {
        $('ul li a').removeClass('active');
        $(this).addClass('active');
        
        var href = $(this).attr('href');
        $('#konten>div').hide();

        if(currentSection == 0){
            $('#konten').slideToggle(200);
            currentSection = href;
        } else if(currentSection == href) {
            $('#konten').slideToggle(200);
        } else {
            currentSection = href;
        }
        return false;
    })
})