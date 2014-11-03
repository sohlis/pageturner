
var storyObject = {
  y: {
   story: '1 yes story',
    yy: {
      story: '2 yes story',
      yyy: {
        story: '3 yes story',
        yyyy: null,
        yyyn: null
      },
      yyn: null
    },
    yn: {
      story: '1 yes 1 no story',
      yny: null,
      ynn: null
    }
  }
  n: {
   story: "this is a 1 no story",
    ny: {
      story: 'this is a 1 no 1 yes story',
      nyy: null,
      nyn: null
    }
    nn: {
      story: 'this is a double no story',
      nny: null,
      nnn: null
    }
  }
}


/*eval("console.log(storyObject.y.yn.ynstory)"); */

//var ynCounter = 'y';
/*ynCounter = ynCounter + '.yy';*/
/*console.log(eval('storyObject.' + ynCounter + '.story'));
console.log('storyObject.' + ynCounter + '.story');*/

String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}


function yesClick() {
   var yInserter = 'y'; //initialized actual y insertion
    var yCounter = 0 //counts the number of time y has been clicked
         var yPast = '';
  $( "#right" ).click(function() {
      yCounter = yCounter + 1; //add a click
      var yIs = yInserter.repeat(yCounter); //appends another 'y' for every click, using above '.repeat' function
      yPast = yPast + '.' + yIs;
      console.log(eval('storyObject' + yPast + '.story'));
    var yDeliverable = eval('storyObject' + yPast + '.story');
       $( "div.question" ).replaceWith( '<div class="question">'+ yDeliverable + '</div>' );
  });
}


$( "#right" ).click(yesClick());





