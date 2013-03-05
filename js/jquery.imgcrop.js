$(document).ready(function(){   

( function( $ ) {

    $.widget( "my.myWidget", {

        options: {  
        	handles         : "all",
            fonurl          : "img/bg.png",
            idfon           : "fon",
            idbox           : "box",
            defaultradius   : 100,
            minradius       : 20,
            borderradius    : "50%",
            defaultstyle    : true

    	},

        fon: null,
        box: null,

        _create: function() {
            var _this = this;
            this.element.load(function() {
                _this._createfon();
                _this._createbox();
        	    _this._adddrag();
        	    _this._addresize();
            });
        },

        _createfon: function() {
            var h,w;
            
            h = this.element.css('height');
            w = this.element.css('width');

            this.fon = $('<div>', {
                id      : this.options.idfon,
                width   : w,
                height  : h
            });

            this.fon.css( "position", 'absolute');
            this.fon.css( "top", '0px');

            this.fon.css( "background-image", 'url(' + this.options.fonurl + ')');

            this.element.after(this.fon);
        }, 

        _createbox: function() {
            var d = this.options.defaultradius*2;
            var img = this.element.attr('src');

            this.box = $('<div>', {
                id: this.options.idbox,
                width: d + "px",
                height: d + "px"
            });
            
            if(this.options.defaultstyle){
                this.box.css( "box-shadow", "0 0 20px #000000 inset");
            }

            this.box.css( "border-radius", this.options.borderradius);
            this.box.css( "background-image", 'url(' + img + ')');
            this.box.css( "background-repeat", "no-repeat");
            this.box.css( "cursor", "move");
        
            this.fon.append(this.box);
        }, 

        
        _adddrag: function() {
        	var _this = this;
        	this.box.draggable({
    			containment: 'parent',
    			cursor:"move",
    			drag:function(event, ui){
    				_this._moveBG (ui)
				}
			})
        },

        _addresize:function() {
        	var _this = this;
        	this.box.resizable({ 
				aspectRatio: true ,
				minHeight: this.options.minradius*2,
				containment: 'parent',
				handles: "all",
				resize:function(event, ui){
					// r = ui.size.width/2;
    				_this._moveBG (ui)
				}
			})
        },

        addboxcss:function() {
            console.log('sdfs');
        },

        _moveBG:function(ui) {
	    	var x = ui.position.left;
    		var y = ui.position.top;

    		this.box.css( "background-position", "-"+x+"px -"+y+"px");

    		//$('#result').text('x: '+x+' y: '+y+'\n R: '+r);
		},

        _setOption: function( key, value ) {
            switch( key ) {
                case "length":
                    break;
            }
            return this._superApply( arguments );
        },

        _destroy: function() {
            return this._super();
        }
    });
})( jQuery );

var c = $('#content').myWidget({
    idfon        : "shadowfon",
    idbox        : "circle",
    borderradius : "50%"
});


});