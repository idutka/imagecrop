$(document).ready(function(){   

$("#box").draggable({
    containment: 'parent',
    cursor:"move",
    drag:function(event, ui){
    	$('#box').css( "background-position", "-"+ui.position.left+"px -"+ui.position.top+"px")
	}
});
$("#box").resizable({ 
	aspectRatio: true ,
	minHeight: 50,
	containment: 'parent',
	handles: "all",
	resize:function(event, ui){
    	$('#box').css( "background-position", "-"+ui.position.left+"px -"+ui.position.top+"px")
	}
});


});