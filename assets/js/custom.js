// toggle product list

$(document).ready(function(){
  $("button.trigger-quickLook").click(function(){
      var btn = $(this);
      var quickLook=$(this).parents('.col-sm-4').find('.quickLook');
      if (btn.hasClass('active')){
            btn.removeClass('active');
            $(quickLook).toggle();
      }
      else{
            btn.addClass('active');
            $(quickLook).toggle();
      }
      
  });
});


$(function() {

  // Input Text Only Number
  $('.number').keydown(function(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) || 
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  // Carousel Touch Support
  $('.carousel').hammer().on('swipeleft', function(){
    $('.carousel').carousel('next');
  });
  $('.carousel').hammer().on('swiperight', function(){
    $('.carousel').carousel('prev');
  });

  // Carousel Thumbnails
  $('[id^=carousel-selector-]').click( function(){
    var id_selector = $(this).attr("id"),
        id = id_selector.substr(id_selector.length -1),
        id = parseInt(id);

    $('.carousel-thumbnail').carousel(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');

  });

  // When the Carousel Slides, Auto Update
  $('.carousel-thumbnail').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number'),
        id = parseInt(id);

    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id^=carousel-selector-'+id+']').addClass('selected');

  });


});

//tabbing

$(function () {
    $('#myAccountTab a:last').tab('show')
})

//carousel thumbnails
$(document).ready(function() {
	$('#brandsCarousel').carousel({
	interval: 5000
	})
    
    $('#brandsCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});