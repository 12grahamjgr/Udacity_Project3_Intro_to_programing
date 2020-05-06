  
  const colorPicker = $('#colorPicker');//Setup colorpicker const by id
  const sizePicker = $('#sizePicker');//Setup sizePicker const by id
  const inputHeight = $('#inputHeight');//Setup user input Height const by id
  const inputWidth = $('#inputWidth');//Setup user input Width const by id
  const pixelCanvas = $('#pixelCanvas');//Setup pixelCanvas const by id
  
  sizePicker.submit(function(event) {//submit button event func to call makeGrid()
    makeGrid(inputWidth.val(), inputHeight.val());//call makeGrid and pass user selected Height and Width values
    event.preventDefault();//stop page refresh on submit
  });

  pixelCanvas.on('mousedown','td',function (e){//look for mouse down event on the table td
     if (e.which == 1) {// this is left click event.
       $(this).css('background-color',colorPicker.val());//td background color to colorpicker value
      }
     if (e.which == 3) {// this is right click event.
       $(this).css('background-color',"#FFFFFF");  // change table cell back to white
      }
  });

  function makeGrid(gWidth,gHeight) {//function to create page grid
    pixelCanvas.children().remove();//remove any appended pixelcanvas objects
    const tr_tag = '<tr></tr>';//set html table row tags to const
	const td_tag = '<td style="background-color:#FFFFFF;"></td>';//set html table column tags to const
    let tr = $(tr_tag);//create object from tr_tag
    for (let rows = 0; rows < gWidth; rows++){//loop to build table rows
      //tr.remove();
      for (let cols = 0; cols < gHeight; cols++) {//loop to build table column
        tr.append(td_tag);//append td_tag to tr (table row) object
      }
      pixelCanvas.append(tr);//append tr object to pixelCanvas object
      tr = $(tr_tag);//create a new (table row) object from tr_tag
    }
  }
  
  function onHover(){
    $("#eyeball").attr('src', 'images/eyeball.gif');
	$('h1').css({'color' : 'blue'});
}

  function offHover(){
    $("#eyeball").attr('src', 'images/eyeball1.png');
	$('h1').css({'color' : 'black'});
  }
