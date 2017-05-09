// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
 	
	// Debug Tool
	console.log("make-a-listing-page.js file has loaded");



  


  // Event Listeners
  //-------------------------------------------------------------------------------

  // Mouse hover on the itemType choices
  $(document).on({
      mouseenter: function () {
        $(this).addClass("hover-shadow");
        $(this).css("z-index", "10");
      },
      mouseleave: function () {
        if ($(this).attr("data-itemType") === selectedItemType){
          $(this).removeClass("hover-shadow");
          $(this).css("z-index", "5");
        } else {
          $(this).removeClass("hover-shadow");
          $(this).css("z-index", "0");
        }
      }
  }, ".itemType-selection-div");

  // Triggers when the user clicks on a itemType selector
  $(document).on("click", ".itemType-selection-div", selectItemType);

  // Updates the order summary when the mouse leaves the number input field
  $(":input[name=startingPrice]").mouseleave(function(){
  	changeListingDetails();
  });



  // $(document).on("click", "#placeOrder", placeOrder);
  //===============================================================================


  // Global Variables
  //-------------------------------------------------------------------------------
  var numberOfFashionUnits = 0;
  var numberOfElectronicsUnits = 0;
  var numberOfCollectablesUnits = 0;
  var numberOfUnitsToSell = 1;
  var selectedItemType = "none";
  var userId = document.cookie.split("=")[1];
  var price = 0;

  //===============================================================================


  // GET User Account Data
  //-------------------------------------------------------------------------------
  // This Function runs when the make-a-listing page loads so It pulls the most recent 
  // info from the database
  //-------------------------------------------------------------------------------
  $.ajax({
    method: 'GET',
    url: '/api/inventory/' + userId
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
  function selectItemType(){
    console.log("itemType selected.");

    if (selectedItemType === "none"){
      $(this).addClass("selected-shadow");
      $(this).css("z-index", "5");
      selectedItemType = $(this).attr("data-itemType");
      changeListingDetails();

    } else {

      if ($(this).attr("data-itemType") === selectedItemType){
        // Do Nothing 
      
      } else {
        var currentlySelectedDiv = $(document).find("[data-itemType='" + selectedItemType + "']");
        
        $(currentlySelectedDiv).removeClass("selected-shadow");
        $(currentlySelectedDiv).css("z-index", "0");

        $(this).addClass("selected-shadow");
        $(this).css("z-index", "5");
        selectedItemType = $(this).attr("data-itemType");
        changeListingDetails();

      }
    }
  };
  //===============================================================================

  // Helper Function to change the order summary Div
  //-------------------------------------------------------------------------------
  function changeListingDetails(){
    $("#listingDetailsUnits").html(numberOfUnitsToSell);
    $("#listingDetailsItemType").html(selectedItemType);

    if (selectedItemType === "fashion"){
    	price = $(":input[name=startingPrice]").val();
      $("#listingDetailsTotal").html(price);
    
    } else if (selectedItemType === "electronics"){
    	price = $(":input[name=startingPrice]").val();
      $("#listingDetailsTotal").html(price);
    
    } else {
    	price = $(":input[name=startingPrice]").val();
      $("#listingDetailsTotal").html(price);
   
    }
  }
  //===============================================================================


  //
  //-------------------------------------------------------------------------------
  //===============================================================================

  //
  //-------------------------------------------------------------------------------
  //===============================================================================
// });