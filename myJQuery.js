$(document).ready(function () {
    console.log("I am a new file now");
    // your JQuery code here
    console.log("We are using JQuery");
    // $('selector').action()
    // $("p").click(); //click on p
    $("p").click(function () {
      console.log("you clicked on p", this);
    //   $(this).hide();
      // $('#id').hide();
      // $('.class').hide();
    }); //do this when we click on p


  //  3 main types of selector in JQuery
  //element selector
  //   $("p").click();
    //   id selector
  //   $("#even").click();
    // class selector
  //   $(".odd").click();

  //   other selectors 
  //   $("*").click();
      // $("p.odd").click();
      // $("p:first").click();


    //   Events in jQuery
    // Mouse Events = click, dblclick, mouseenter, mouseleave
    // Keyboard Events = keypress, keydown, MediaKeyStatusMap
    // Form Events = Submit, change, focus, blur
    // document/window Events = load, resize, scroll, unload



    //demoing the on method 
    // $('p').on(
    //     {
    //     click: function(){
    //         console.log("Thanks for clicking", this);
    //     },
    //     mouseleave: function(){
    //         console.log("Thanks for leaving", this);
    //     }
    // })
    // $('#wiki').hide(1000, function(){
    //     console.log("I am hidden now");
    // })
    // $('#wiki').show(1000, function(){
    //     console.log("I am shown now");
    // })
    $('#but').click(function(){
        $('#wiki').fadeToggle(1000)
    })
//     $('#but').click(function(){
//       $('#wiki').fadeOut(1000)
//   })
//   $('#but').click(function(){
//     $('#wiki').fadeIn(1000)
// })

    // slide methods
    // speed and callback parameters are optional
    // $('#wiki').slideToggle(1000,function(){
    //   console.log("done");
    // })
    // $('#wiki').slideUp(1000,function(){
    //   console.log("done");
    // })
    // $('#wiki').slideDown(1000,function(){
    //   console.log("done");
    // })

    //Animate functionality in jQuery

//     $('#wiki').animate({
// opacity : 0.3,
// height : '150px',
// width: '380px'
//     }, 1000)


$('#wiki').animate({opacity : 0.3}, 4000)
$('#wiki').animate({opacity : 0.9}, 1000)
$('#wiki').animate({opacity : 0.3, width:'380px'}, 1000)
$('#wiki').css('background-color', 'red')
  });