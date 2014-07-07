//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require countdown
//= require moment
//= require fullcalendar
//= require chosen-jquery
//= require_self

var startTheParty = function() {
  console.log('it works!');
  window.setTimeout(function(){
    $('#hello').modal('show');
  }, 1500);
};

// js function for the fullcalendar plugin
$(function() {

  $.getJSON('/events', function(events) {
    $('#calendar').fullCalendar({
      events: events,
      header: {
        left:   'prev',
        center: 'title',
        right:  'next'
      },
      dayClick: function(date, jsEvent, view) {
        var today = date.format('MMM Do YY');
        $('#hello .modal-dialog .modal-content .modal-body p').replaceWith('<p>Today is '+today+'</p>');
        $('#hello').modal('show');
      }
    });
  });


  // $.getJSON('/places', function(data) {
  //   console.log(data);
  // });

  // $.getJSON('/restaurants', function(restaurants) {
  //   $(restaurants).each(function(index, restaurant) {
  //     $('#restaurants').append('<p>' + restaurant.name + '</p>');
  //   });
  // });

  var $form = $('form#new_event')

  $('input.btn', $form).click(function() {
    $.post($form.attr('action'), $form.serialize(), function(data) {
      console.log(data);
      console.log('Event created');
      $('#create-event').modal('hide');
    });
    return false;
  });
});


// js function for the countdown timer plugin
$(function(){

  var note = $('#note'),
    ts = new Date(2012, 0, 1),
    newYear = true;

  if((new Date()) > ts){
    // The new year is here! Count towards something else.
    // Notice the *1000 at the end - time must be in milliseconds
    ts = (new Date()).getTime() + 3*24*60*60*1000;
    newYear = false;
  }

  $('#countdown').countdown({
    timestamp	: ts,
    callback	: function(days, hours, minutes, seconds){

      var message = "";

      message += days + " day" + ( days==1 ? '':'s' ) + ", ";
      message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
      message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
      message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

      if(newYear){
        message += "left until the new year!";
      }
      else {
        message += "left to the Zombie Appocolypse!!!";
      }

      note.html(message);
    }
  });

});



$(function(){
  $('.chosen-select').chosen({
    allow_single_deselect: true,
    no_results_text: 'No results matched',
    width: '200px'
  });
});
