Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
  console.log("trying to load make-a-listing page")

  console.log("make-a-listing-page.js file has loaded");



  


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
  var numberOfFashionUnits = 0;
  var numberOfElectronicsUnits = 0;
  var numberOfCollectablesUnits = 0;
  var numberOfUnitsToSell = 1;
  var selectedWarehouse;

  //===============================================================================


  // GET User Account Data
  //-------------------------------------------------------------------------------
  // This Function runs when the make-a-listing page loads so It pulls the most recent 
  // info from the database
  //-------------------------------------------------------------------------------
  $.ajax({
    method: 'GET',
    url: '/api/inventory/' + 1
  })
  .done(function(data) {
  	// The data comes back as an array of objects
    console.log("User Inventory Data: " + data);
    
    for (var i = 0; i < data.length; i++){
    	if (data[i].item_name === "fashion"){
    		numberOfFashionUnits ++;
    	} else if (data[i].item_name === "electronics"){
    		numberOfElectronicsUnits ++;
    	} else if (data[i].item_name === "collectables"){
    		numberOfCollectablesUnits ++;
    	}
    }

    // Display the number of units for each inventory type.
    $("#fashionStock").html(numberOfFashionUnits + " Unit(s)");
    $("#electronicsStock").html(numberOfElectronicsUnits + " Unit(s)");
    $("#collectablesStock").html(numberOfCollectablesUnits + " Unit(s)");

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
    $("#listingDetailsUnits").html(numberOfUnitsToSell);
    $("#listingDetailsWarehouse").html(selectedWarehouse);

    if (selectedWarehouse === "fashion"){
      // total = fashionPricePerUnit * numberOfUnitsToSell;
      $("#listingDetailsTotal").html(1);
    
    } else if (selectedWarehouse === "electronics"){
      // total = electronicsPricePerUnit * numberOfUnitsToSell;
      $("#listingDetailsTotal").html(1);
    
    } else {
      // total = collectablesPricePerUnit * numberOfUnitsToSell;
      $("#listingDetailsTotal").html(1);
   
    }
  }
  //===============================================================================


  // Jquery Slider Function
  //-------------------------------------------------------------------------------

      // var handle = $( "#custom-handle" );
      // $( "#warehouse-slider" ).slider({
      //   max: 50,
      //   create: function() {
      //     handle.text( $( this ).slider( "value" ) );
      //   },
      //   slide: function( event, ui ) {
      //     handle.text( ui.value );
      //   },
      //   stop: function( event, ui ) {
      //     numberOfUnits = $('#warehouse-slider').slider("option", "value");
      //     changeOrderSummary();
      //   }
      // });

  //===============================================================================


  //
  //-------------------------------------------------------------------------------
  //===============================================================================

  //
  //-------------------------------------------------------------------------------
  //===============================================================================
});