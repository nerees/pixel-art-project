//Waiting till (DOM) is ready for JavaScript code to execute
//Why do we need this: https://learn.jquery.com/using-jquery-core/document-ready/
$( document ).ready(function() {
//waiting till the height and width of the grid will be submitted
document.getElementById('sizePicker').addEventListener('submit', function(evt){
      evt.preventDefault(); // without this grid dissapears
      var h = document.getElementById('inputHeight').value;
      var w = document.getElementById('inputWeight').value;
      makeGrid(h, w); //calling a function whitch draws a grid
});
// when the grid squere is clicked
$('#pixelCanvas').on('click', 'td', function(evt){
      // getting the collor code. It can be different every click
      var color = document.getElementById('colorPicker').value;
      console.log(color);
      if ($(this).hasClass('sqr')){
          $(this).toggleClass('sqr');
          $(this).css("background-color", color);
      }else { //on seccond click, going back to white color
        $(this).toggleClass('sqr');
        $(this).css("background-color", "white");
      }
});
});
//drawing a grid from subbmited width and height.
function makeGrid(h, w) {
    var table = $('#pixelCanvas');
    table.find('tbody').remove();
    table.append('<tbody></tbody>');
    var grid = table.find('tbody');
      for (var i = 0; i < h; i++){
        grid.append('<tr></tr>');
      }
      for (var j = 0; j < w; j++){
        table.find('tr').append('<td class="sqr"></td>');
      }

}
