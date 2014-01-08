$(document).ready(function(e){

			$(function(){
         
        $('#mapa').gmap3({
          map:{
			  options:{
              center:[-21.676118, -45.92166],
              zoom: 18
            }
          },
		  

          marker:{
            values:[
     
	
	
     {latLng:[-21.67568, -45.92242], data:"Loja 01 <br> (00) 0000 - 0000",options: {icon: new google.maps.MarkerImage("img/map_icons/hotel.png",
       new google.maps.Size(32, 37, "px", "px")
     )
    }},
              {latLng:[-21.67523, -45.92241], data:"Loja 02 <br> (00) 0000 - 0000",options: {
     icon: new google.maps.MarkerImage(
       "img/map_icons/dollar.png",
       new google.maps.Size(32, 37, "px", "px")
     )
    }
	},
	 {latLng:[-21.676226, -45.921656], data:"Loja 03 <br> (00) 0000 - 0000",options: {
     icon: new google.maps.MarkerImage(
       "img/map_icons/dollar.png",
       new google.maps.Size(32, 37, "px", "px")
     )
    }
	}
            ],
            options:{
              draggable: false
            },
            events:{
              mouseover: function(marker, event, context){
                var map = $(this).gmap3("get"),
                  infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                  infowindow.open(map, marker);
                  infowindow.setContent(context.data);
                } else {
                  $(this).gmap3({
                    infowindow:{
                      anchor:marker, 
                      options:{content: context.data}
                    }
                  });
                }
              },
              mouseout: function(){
                var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                if (infowindow){
                  infowindow.close();
                }
              }
            }
          }

        });
      });
});
