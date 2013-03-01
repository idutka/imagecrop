$(document).ready(function(){   
var r = 100;
$("#box").draggable({
    containment: 'parent',
    cursor:"move",
    drag:function(event, ui){
    	moveBackground (ui)
	}
});
$("#box").resizable({ 
	aspectRatio: true ,
	minHeight: 50,
	containment: 'parent',
	handles: "all",
	resize:function(event, ui){
		r = ui.size.width/2;
    	moveBackground (ui)
	}
});

function moveBackground (ui) {
	    var x = ui.position.left;
    	var y = ui.position.top;

    	$('#box').css( "background-position", "-"+x+"px -"+y+"px");

    	$('#result').text('x: '+x+' y: '+y+'\n R: '+r);
}

});