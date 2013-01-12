var slideSpeed = 1500; // milliseconds
function fadeDown(section) {
  $('#' + section).stop(true, true).fadeIn({ duration: slideSpeed, queue: false }).css('display', 'none').slideDown(slideSpeed);
}

// pass in id of textbox, button, and nextdiv (without '#')
function hookUp(textbox, button, greyouts, nextdiv, alsoDo) {
    var originalText = $('#' + textbox).val()
    $('#' + textbox).click( function(){
        if ($('#' + textbox).val() == originalText) {
            $('#' + textbox).val('');
        }
    });
    $('#' + textbox).focusout( function(){
        if ($('#' + textbox).val() == '') {
            $('#' + textbox).val(originalText);
        }
    });
    $('#' + button).click( function(){
        $("#" + textbox).attr("disabled", "disabled"); 
        $("#" + button).attr("disabled", "disabled"); 
        for (var i = 0; i < greyouts.length; ++i) {
            $("#" + greyouts[i]).addClass('greyed')
        }
        fadeDown(nextdiv)
        if (alsoDo)
            alsoDo();
    });
}

$(document).ready(function() {
  fadeDown('q1');
  hookUp('t1', 'b1', ['d1'], 'q2')
  hookUp('t2', 'b2', ['d2a', 'd2b'], 'q3')
  hookUp('t3', 'b3', ['d3'], 'q4')
  hookUp('', 'b4', ['d4'], 'q5', function() {
      $("#cb1").attr("disabled", "disabled"); 
      $("#cb2").attr("disabled", "disabled"); 
      $("#cb3").attr("disabled", "disabled"); 
      $('.nav-tabs').button()
      if (selection == 1) {
          $('#final').html("Dear " +$('#t1').val()+ ", <br><br>Remember Mr. Teddy? Mr. Teddy doesn't " +$('#t2').val()+" ... <br><br>Sincerely, <br> --  " +$('#t3').val());
              } else if (selection == 2) {
                  $('#final').html("Dear " +$('#t1').val()+ " <br><br>... " +$('#t2').val()+" ... <br><br> Sincerely, <br> --  " +$('#t3').val());
              } else if (selection == 3) {
                  $('#final').html("Dear " + $('#t1').val()+ ",<br><br> Lately, your tendency to " + $('#t2').val()+" has made me consider taking up homicide as a hobby...and you've been voluntold! Congratulations! <br><br>(Remember, I know where you sleep at night...) <br><br>With love,<br><br>-- " +$('#t3').val());
              }
          })
      });

var selection = 0
$('div.btn-group .btn').click(function(){
  $(this).find('input:button').attr('checked', true);
  selection = $('input[name=radio-btn-ctrl]:checked').val();
});