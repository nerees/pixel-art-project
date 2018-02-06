//Waiting till (DOM) is ready for JavaScript code to execute
//Why do we need this: https://learn.jquery.com/using-jquery-core/document-ready/
$( document ).ready(function() {
//waiting till the height and width of the grid will be submitted
$('#sizePicker').on('submit', function(evt){
      evt.preventDefault(); // without this grid dissapears
      let h = document.getElementById('inputHeight').value;
      let w = document.getElementById('inputWeight').value;
      makeGrid(h, w); //calling a function whitch draws a grid
});
// when the grid squere is clicked
$('#pixelCanvas').on('click', 'td', function(evt){
      // getting the collor code. It can be different every click
      let color = document.getElementById('colorPicker').value;
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
    const table = $('#pixelCanvas');
    table.find('tbody').remove();
    table.append('<tbody></tbody>');
    const grid = table.find('tbody');
      for (let i = 0; i < h; i++){
        grid.append('<tr></tr>');
      }
      for (let j = 0; j < w; j++){
        table.find('tr').append('<td class="sqr"></td>');
      }
    const note = $('#note');
    note.find('p').remove();
    note.append('<p></p>');
    const notetext = note.find('p');
    notetext.append('To clear the color please click again on grid');

}
