console.log("warehouse-page.js file loaded");



// Jquery Slider Function
//-------------------------------------------------------------------------------
// $( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
    	max: 50,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  // } );
//===============================================================================


// Event Listeners
//-------------------------------------------------------------------------------
// $(document).on("click", "#placeOrder", placeOrder);
//===============================================================================


// Global Variables
//-------------------------------------------------------------------------------
var fashionPricePerUnit;
var electronicsPricePerUnit;
var collectablesPricePerUnit;
var numberOfUnits = $('#slider').slider("option", "value");
//===============================================================================





// GET Warehouse Prices
//-------------------------------------------------------------------------------
// This Function runs when the warehouse page loads so It pulls the most recent 
// info from the database
//-------------------------------------------------------------------------------
$.ajax({
  method: 'GET',
  url: '/api/warehouse'
})
.done(function(data) {
  console.log(data);
  fashionPricePerUnit = data[0].price;
  electronicsPricePerUnit = data[1].price;
  collectablesPricePerUnit = data[2].price;

  $("#fashionPrice").html(fashionPricePerUnit + " Bit(s)");
  $("#electronicsPrice").html(electronicsPricePerUnit + " Bit(s)");
  $("#collectablesPrice").html(collectablesPricePerUnit + " Bit(s)");

});
//===============================================================================





// Place an Order Function
//-------------------------------------------------------------------------------
// function placeOrder() {
//   console.log("Place Order Button Pressed");
// }



// postObj = {
//   "item_name": "value",
//   "quantity": "value",
//   "allUserId": "value"
// }

// $.ajax({
//   method: "POST",
//   url: '/api/inventory',
//   post: postObj
// })
// .done(function(data){
//   console.log(data);
// });

// //Returns JSON object 
//              {
//       "quantity": 1,
//       "id": 6,
//       "item_name": "electronics",
//       "starting_price": "1",
//       "allUserId": "3"
//         }

//===============================================================================





//
//-------------------------------------------------------------------------------
//===============================================================================

//
//-------------------------------------------------------------------------------
//===============================================================================

//
//-------------------------------------------------------------------------------
//===============================================================================

//
//-------------------------------------------------------------------------------
//===============================================================================