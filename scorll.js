$(document).on('scroll', function(){

    var pixcelsFromTop = $(document).scrollTop()

    $('.process').text(pixcelsFromTop + ' pixcels')

    console.log(pixcelsFromTop)
})