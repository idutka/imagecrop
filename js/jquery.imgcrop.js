$(document).ready(function(){   

( function( $ ) {

    $.widget( "my.myWidget", {

        options: {  
        	handles         : "all",
            maskurl          : "img/bg.png",
            idmask           : "mask",
            idbox           : "box",
            defaultradius   : 100,
            minradius       : 20,
            borderradius    : "50%",
            defaultstyle    : true

    	},

        mask: null,
        box: null,

        _create: function() {

            var _this = this;
           
            this.element.one('load', function() {

                _this._createmask();
                _this._createbox();
                _this._adddrag();
                _this._addresize();
                _this._showSize(0,0,_this.options.defaultradius);

            }).each(function() {
                if(this.complete) $(this).load();
            });

        },

        _createmask: function() {
                      
            var h = this.element.css('height');
            var w = this.element.css('width');

            this.mask = $('<div>', {
                id      : this.options.idmask,
                width   : w,
                height  : h
            });

            this.mask.css( "position", 'absolute');
            this.mask.css( "top", '0px');
            this.mask.css( "left", '0px');

            this.mask.css( "background-image", 'url(' + this.options.maskurl + ')');

            this.element.after(this.mask);
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
        
            this.mask.append(this.box);
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
    				_this._moveBG (ui);
				}
			})
        },

        _moveBG:function(ui) {
	    	var x = ui.position.left;
    		var y = ui.position.top;

            if(ui.size != undefined){
                var r = ui.size.width/2;
            }else{
                var r = false;
            }
            
    		this.box.css( "background-position", "-"+x+"px -"+y+"px");

            this._showSize(x,y,r);
		},

        _showSize:function(x,y,r) {
            var i = $('#size :input');

            i[0].value = x;
            i[1].value = y;
            if(r){ i[2].value = r; }

        },

        _setOption: function( key, value ) {
            switch( key ) {
                case "length":
                    break;
            }
            return this._superApply( arguments );
        },

        _destroy: function() {
            alert('Еемент видалено');
            this.mask.remove();
            return this._super();
        }
    });
})( jQuery );


var w = $('#content').myWidget({
    idmask       : "shadowmask",
    idbox        : "circle",
    borderradius : "50%"
});

$('#destroy').click(function(){
    w.remove();
})

});