  //Setup colorpicker const by id
  const colorPicker = $('#colorPicker');

  //Setup sizePicker const by id
  const sizePicker = $('#sizePicker');

  //Setup user input Height and Width const by id
  const inputHeight = $('#inputHeight');
  const inputWidth = $('#inputWidth');

  //Setup pixelCanvas const by id
  const pixelCanvas = $('#pixelCanvas');

  //submit button event func to call makeGrid()
  sizePicker.submit(function(event) {
    //call makeGrid and pass user selected Height and Width values
    makeGrid(inputWidth.val(), inputHeight.val());
    //stop page refresh on submit
    event.preventDefault();
  });


  pixelCanvas.on('mousedown','td',function (e){//look for mouse down event
     if (e.which == 1) {// this is left click event.
       $(this).css('background-color',colorPicker.val());
      }
     if (e.which == 3) {// this is right click event.
       $(this).css('background-color',"#FFFFFF");  // change table cell back to white
      }
  });


  function makeGrid(gWidth,gHeight) {
    pixelCanvas.children().remove();
    const tr_tag = '<tr></tr>';
	const td_tag = '<td style="background-color:#FFFFFF;"></td>';
    //const td_tag = '<td style="background-color:#FFFFFF;"><span style="width:10px;height:10px;"></span></td>';
    let tr = $(tr_tag);
    let td = $(td_tag);
	console.log(tr_tag);
    for (let rows = 0; rows < gWidth; rows++){
      //tr.remove();
      for (let cols = 0; cols < gHeight; cols++) {
        tr.append(td_tag);
      }
      pixelCanvas.append(tr);
      tr = $(tr_tag);
    }
  }
  
  function onHover(){
    $("#eyeball").attr('src', 'images/eyeball.gif');
	$('h1').css({'color' : 'blue'});
	sleep();
}

  function offHover(){
    $("#eyeball").attr('src', 'images/eyeball1.png');
	$('h1').css({'color' : 'black'});
  }
	
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}