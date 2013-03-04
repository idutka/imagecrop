$(document).ready(function(){   

( function( $ ) {
    // The jQuery.aj namespace will automatically be created if it doesn't exist
    $.widget( "my.myWidget", {
        // These options will be used as defaults
        options: { 
        	handles : "all" 
    	},

        _create: function() {

        	this._adddrag();
        	this._addresize();

        },

        
        _adddrag: function() {
        	var _this = this;
        	this.element.draggable({
    			containment: 'parent',
    			cursor:"move",
    			drag:function(event, ui){
    				_this._moveBG (ui)
				}
			})
        },

        _addresize:function() {
        	var _this = this;
        	this.element.resizable({ 
				aspectRatio: true ,
				minHeight: 50,
				containment: 'parent',
				handles: "all",
				resize:function(event, ui){
					r = ui.size.width/2;
    				_this._moveBG (ui)
				}
			})
        },

        _moveBG:function(ui) {
	    	var x = ui.position.left;
    		var y = ui.position.top;

    		this.element.css( "background-position", "-"+x+"px -"+y+"px");

    		//$('#result').text('x: '+x+' y: '+y+'\n R: '+r);
		},

        _setOption: function( key, value ) {
            // Use the _setOption method to respond to changes to options
            switch( key ) {
                case "length":
                    break;
            }
            // and call the parent function too!
            return this._superApply( arguments );
        },
        _destroy: function() {
            // Use the destroy method to reverse everything your plugin has applied
            return this._super();
        }
    });
})( jQuery );

$('#box').myWidget();

});