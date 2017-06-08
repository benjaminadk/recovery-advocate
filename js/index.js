$(document).ready(function(){
  //INITIALIZE MATERIALIZE FEATURES
   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy({scrollOffset:5});
  $('.materialboxed').materialbox();
  
   Materialize.toast("Welcome to Northeastern Recovery Advocates!",5000,'black',function(){
    Materialize.toast("We are glad you made it to our web site.",7000,'black',function(){
      Materialize.toast("You can learn how this site works by reading below",5000,'black',function(){
        Materialize.toast("Make sure you check out the map, its AMAZING",5000,'black',function(){
          Materialize.toast("Then fill out the form at the bottom of the page",10000,'black',function(){
            Materialize.toast("We will get back to you SOON with a PLAN tailored to you.",10000,'black');
          });
        });
      });
    });
  });
});