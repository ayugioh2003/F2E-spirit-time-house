$(document).ready(function () {
  

  // add task
  $('.addtodo-simple input').focus(function (e) { 
    e.preventDefault();
    $('.addtodo-complicate').show();
  });

  $('.addtodo-simple input').blur(function (e) { 
    e.preventDefault();
    $('.addtodo-complicate').hide();
  });


  // complete task
  $('.checkbox').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('complete');
    $(this).siblings('.todoname').toggleClass('complete');
  });



});