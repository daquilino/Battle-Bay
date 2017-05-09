console.log("warehouse-page.js file has loaded");



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
      },
      stop: function( event, ui ) {
        numberOfUnits = $('#slider').slider("option", "value");
        changeOrderSummary();
      }
    });
  // } );
//===============================================================================


// Event Listeners
//-------------------------------------------------------------------------------

// Mouse hover on the warehouse choices
$(document).on({
    mouseenter: function () {
      $(this).addClass("hover-shadow");
      $(this).css("z-index", "10");
    },
    mouseleave: function () {
      if ($(this).attr("data-warehouse") === selectedWarehouse){
        $(this).removeClass("hover-shadow");
        $(this).css("z-index", "5");
      } else {
        $(this).removeClass("hover-shadow");
        $(this).css("z-index", "0");
      }
    }
}, ".warehouse-selection-div");

$(document).on("click", ".warehouse-selection-div", selectWarehouse);



// $(document).on("click", "#placeOrder", placeOrder);
//===============================================================================


// Global Variables
//-------------------------------------------------------------------------------
var fashionPricePerUnit;
var electronicsPricePerUnit;
var collectablesPricePerUnit;
var numberOfUnits = $('#slider').slider("option", "value");
var selectedWarehouse = "none";
var total = 0;
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
  fashionPricePerUnit = data[1].price;
  electronicsPricePerUnit = data[0].price;
  collectablesPricePerUnit = data[2].price;

  console.log(fashionPricePerUnit, electronicsPricePerUnit, collectablesPricePerUnit);

  $("#fashionPrice").html(fashionPricePerUnit + " Bit(s)");
  $("#electronicsPrice").html(electronicsPricePerUnit + " Bit(s)");
  $("#collectablesPrice").html(collectablesPricePerUnit + " Bit(s)");

});
//===============================================================================


// Function to store the warehouse that gets selected by the user
//-------------------------------------------------------------------------------
function selectWarehouse(){
  console.log("Warehouse selected.");

  if (selectedWarehouse === "none"){
    $(this).addClass("selected-shadow");
    $(this).css("z-index", "5");
    selectedWarehouse = $(this).attr("data-warehouse");
    changeOrderSummary();

  } else {

    if ($(this).attr("data-warehouse") === selectedWarehouse){
      // Do Nothing 
    
    } else {
      var currentlySelectedDiv = $(document).find("[data-warehouse='" + selectedWarehouse + "']");
      
      $(currentlySelectedDiv).removeClass("selected-shadow");
      $(currentlySelectedDiv).css("z-index", "0");

      $(this).addClass("selected-shadow");
      $(this).css("z-index", "5");
      selectedWarehouse = $(this).attr("data-warehouse");
      changeOrderSummary();

    }
  }
};
//===============================================================================

// Helper Function to change the order summary Div
//-------------------------------------------------------------------------------
function changeOrderSummary(){
  $("#orderSummaryUnits").html(numberOfUnits);
  $("#orderSummaryWarehouse").html(selectedWarehouse);

  if (selectedWarehouse === "fashion"){
    total = fashionPricePerUnit * numberOfUnits;
    $("#orderSummaryTotal").html(total);
  
  } else if (selectedWarehouse === "electronics"){
    total = electronicsPricePerUnit * numberOfUnits;
    $("#orderSummaryTotal").html(total);
  
  } else {
    total = collectablesPricePerUnit * numberOfUnits;
    $("#orderSummaryTotal").html(total);
 
  }
}
//===============================================================================

// Function to Display the order status
//-------------------------------------------------------------------------------
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
