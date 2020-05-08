  //setup const variables
  const colorPicker = $('#colorPicker');//Setup colorpicker const by id
  const sizePicker = $('#sizePicker');//Setup sizePicker const by id
  const inputHeight = $('#inputHeight');//Setup user inputHeight const by id
  const inputWidth = $('#inputWidth');//Setup user inputWidth const by id
  const pixelCanvas = $('#pixelCanvas');//Setup pixelCanvas const by id
  
  sizePicker.submit(function(event) {//submit button event func to call makeGrid()
    makeGrid(inputWidth.val(), inputHeight.val());//call makeGrid and pass user selected Height and Width values
    event.preventDefault();//stop page refresh on submit
  });

  pixelCanvas.on('mousedown','td',function (event){//look for mouse down event on the table td
     if (event.which == 1) {// this is left click event.
       $(this).css('background-color',colorPicker.val());//td background color to colorpicker value
      }
     if (event.which == 3) {// this is right click event.
       $(this).css('background-color',"#FFFFFF");  // change table cell back to white
      }
  });

  function makeGrid(gWidth,gHeight) {//function to create page grid
    pixelCanvas.children().remove();//remove any appended pixelcanvas table
    const tr_tag = '<tr></tr>';//set html table row tags to const
	const td_tag = '<td style="background-color:#FFFFFF;"></td>';//set html table column/data tags to const
    let tr = $(tr_tag);//setup tr to append to
	
    for (let rows = 0; rows < gWidth; rows++){//loop to build table rows
      for (let cols = 0; cols < gHeight; cols++) {//loop to build table column
        tr.append(td_tag);//append td_tag to tr (table row)
      }
      pixelCanvas.append(tr);//append tr to pixelCanvas
      tr = $(tr_tag);//re-set tr to new row
    }
  }
  
  function onHover(){//on Hover change to animated gif and change h1 to blue
    $('#eyeball').attr('src', 'images/eyeball.gif');
	$('h1').css({'color' : 'blue'});
}

  function offHover(){//off Hover change to static png and change h1 to black
    $('#eyeball').attr('src', 'images/eyeball1.png');
	$('h1').css({'color' : 'black'});
  }
