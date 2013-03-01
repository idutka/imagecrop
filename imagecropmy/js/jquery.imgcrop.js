$(document).ready(function(){   

$("#box").draggable({
    containment: 'parent',
    cursor:"move"
});
$("#box").resizable({ 
	aspectRatio: true ,
	handles: "all"
});

});