$('document').ready(function() {
  $('#button').on('click', function() {
    $('input[required]').addClass('req');
  });

  $('#password2').keyup(function(){

    if($(this).val() == $('#password1').val().substr(0,$(this).val().length))
  {
      $('#password1').css('border', '#007539 2px solid');
      $('#password2').css('border', '#007539 2px solid');
  }

  if($(this).val() != $('#password1').val().substr(0,$(this).val().length))
  {

      $('#password2').css('border', '#E8474C 2px solid');
  }

});
});
