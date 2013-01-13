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
          $('#final').html("Dear " +$('#t1').val()+ ", \n\nIt has come to my attention that you tend to " +$('#t2').val()+" a lot. Please desist, or more threatening messages will follow. \n\nSincerely,,\n\n--  " +$('#t3').val());
              } else if (selection == 2) {
                  $('#final').html("Dear " +$('#t1').val()+ ", \n\nCease to " +$('#t2').val()+" immediately.\nSide-effects of disobeying may include nausea, heartburn, upset stomach, indigestion, and...well, let's not talk about it.\n\nDo as I say,\n\n --  " +$('#t3').val());
              } else if (selection == 3) {
                  $('#final').html("Dear " + $('#t1').val()+ ",\n\n Your tendency to " + $('#t2').val()+" has resulted in the untimely and unfortunate dismemberment of your beloved teddy bear, Mr. Teddy. Please collect his remains from the toilet, the local gaggle of geese, and in the bottom of the compost bin.\nI am always available to be your rock during these trying times.\n\nSincere regrets,\n\n-- " +$('#t3').val());
              }
          })
      });

var selection = 0
$('div.btn-group .btn').click(function(){
  $(this).find('input:button').attr('checked', true);
  selection = $('input[name=radio-btn-ctrl]:checked').val();
});

$('#b5').click(function() {
FB.login(function(response) {
   if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     $("#friendselector").jfmfs();
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 }, {scope: 'publish_stream'});
})


$('#b6').click(function() {
  var friendSelector = $("#friendselector").data('jfmfs');
  var friendIds = friendSelector.getSelectedIds();
  var msgs = $("#final").html();
  console.log("friendIds = " + friendIds);
  FB.api('/' + friendIds + '/feed', 'post', {message: msgs}, function(response)
          {
            if (!response || response.error)
            {
              alert('Something went horribly wrong. Refresh to try again, if you dare.');
            }
            else
            {
              alert('Shame given successfully! Refresh to send another.');
            }
          });
});