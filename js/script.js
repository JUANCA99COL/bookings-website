// ==========================================================
// Declaration of an array of objects
// ==========================================================
var accommodations = [
      {
        id : 101,
        name : 'Sofitel Welli',
        categorie : 'Hotel',
				city : 'Wellington',
        lat : -41.2797191,
        lng : 174.7725163,
        cost : 180,
        photo : 'hotel.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 3,
				address : '11 Bolton Street, Wellington Central, Wellington 6011',
        desc : 'Located in the central city within walking distance to Parliament and Wellingtons financial district. 129 beautifully appointed guest rooms and suites with complimentary WiFi.',
        meal : 'yes'

      },

      {
        id : 102,
        categorie : 'Hostel',
        name : 'Waterloo & backpackers welli',
				city : 'Wellington',
        lat : -41.2802541,
        lng : 174.7777658,
        cost : 140,
        photo : 'hostel.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 3,
				address : '1 Bunny Street, Pipitea, Wellington 6011',
        desc : 'The hotel is conveniently located next to all major travelling connections (rail, sea and road) as well as being a short walk from Wellington city’s retail shops and major tourist attractions.',
        meal : 'yes'

      },

      {
        id : 103,
        categorie : 'House',
        name : 'Private room in house Auck',
				city : 'Auckland',
        lat : -36.7202748,
        lng : 174.7292451,
        cost : 160,
        photo : 'house.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : 'Browns Bay',
        desc : 'The location is ideal being a few minutes away from Browns Bay Beach, boat ramp, and all that Browns Bay Central now offers. Stroll down to grab a coffee/beer/lunch, and New World and Countdown supermarkets. ',
        meal : 'yes'

      },

      {
        id : 104,
        categorie : 'Motel',
        name : 'FERNZ Motel & Apartments Birkenhead Auck',
				city : 'Auckland',
        lat : -36.8134757,
        lng : 174.7234613,
        cost : 250,
        photo : 'motel.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '23 Rawene Road, Birkenhead, Auckland 0626',
        desc : 'Located in the leafy suburb of Birkenhead on Aucklands North Shore district, FERNZ Motel & Apartments Birkenhead offers accommodation within a 15-minute drive from Auckland CBD.',
        meal : 'yes'


      },

			{
				id : 105,
				categorie : 'Hotel',
				name : 'Scenic Suites Queenstown',
				city : 'Queenstown',
				lat : -45.0323603,
				lng : 168.6626948,
				cost : 146,
				photo : 'queens-hotel.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '27 Stanley Street, 9300 Queenstown, New Zealand',
				desc : 'Scenic Suites',
				meal : 'yes'
				// Queenstown is located in the resort of Queenstown, the hotel is a 5 minute walk from the centre, yet its quiet, hillside location offers great views over the lake and mountains,
				// free on site parking is available subject to availability.

			},

			{
				id : 105,
				categorie : 'Motel',
				name : 'Lomond Lodge Motel',
				city : 'Queenstown',
				lat : -45.0314682,
				lng : 168.6549564,
				cost : 146,
				photo : 'lomond-queens.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '33 Man Street, 9300 Queenstown, New Zealand',
				desc : 'Lomond Lodge Motel & Apartments is located in the centre of Queenstown. It offers a variety of accommodation, just 50 m from the lake front and gondola.Complimentary WiFi is available.',
				meal : 'yes'


			},

			{
				id : 106,
				categorie : 'Hostel',
				name : 'Nomads Queenstown',
				city : 'Queenstown',
				lat : -45.0324971,
				lng : 168.6593897,
				cost : 38,
				photo : 'nomads.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '5/11 Church Street, South island, Queenstown 9300',
				desc : 'Feel right at home at our fun and friendly – did we mention award-winning? – hostel, Nomads Queenstown. We’re perched on the lake in the middle of town, with envy-inducing views of the mountains.',
				meal : 'yes'


			},


			{
				id : 107,
				categorie : 'Motel',
				name : 'Bella Vista Motel Wellington',
				city : 'Wellington',
				lat : -41.3019202,
				lng : 174.8019756,
				cost : 154,
				photo : 'welli-motel.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '302/304 Evans Bay Parade, Hataitai, Wellington 6021',
				desc : 'Best View in Queenstown-Town Centre Location!!!',
				meal : 'yes'


			},


			{
				id : 108,
				categorie : 'Hostel',
				name : 'Blue Lake TOP 10 Holiday Park',
				city : 'Rotorua',
				lat : -38.2041822,
				lng : 175.7669455,
				cost : 110,
				photo : 'bluelake.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '723 Tarawera Road, Rotorua 3040',
				desc : 'Blue Lake (Lake Tikitapu) is conveniently located half way between Rotorua’s thermal wonderland and the famous Whakarewarewa Redwood Forest.',
				meal : 'yes'


			},

			{
				id : 109,
				categorie : 'Hotel',
				name : 'Holiday In Rotorua',
				city : 'Rotorua',
				lat : -38.2049075,
				lng : 175.5091485,
				cost : 159,
				photo : 'rotorua-pool.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '10 Tryon Street, Whakarewarewa, Rotorua 3010',
				desc : 'Rotorua is the perfect destination to warm up this winter. Relax in geothermal hot springs or explore the Redwoods forest mountain bike trails.',
				meal : 'yes'


			},

			{
				id : 110,
				categorie : 'Motel',
				name : 'Cleveland Thermal Motel',
				city : 'Rotorua',
				lat : -38.1144574,
				lng : 176.2226254,
				cost : 113,
				photo : 'cleveland-rotorua.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '113-119 Lake Road, Koutu, Rotorua 3010',
				desc : 'Enjoy thermal at the Cleveland where families stay, children play and couples get away',
				meal : 'yes'


			},

			{
				id : 111,
				categorie : 'Hotel',
				name : 'Hotel Grand Windsor Auckland - MGallery',
				city : 'Auckland',
				lat : -36.8458589,
				lng : 174.6964166,
				cost : 288,
				photo : 'auck-hotel.jpg',
				minDays : 1,
				maxDays : 15,
				minGuests : 1,
				maxGuests : 5,
				address : '58/60 Queen Street, Auckland CBD, Auckland 1010',
				desc : 'The elegant five star Grand Windsor Hotel Auckland, MGallery by Sofitel transports guests to an age of opulent glamour.',
				meal : 'yes'


			}

];

// ==========================================================
//	Nav Animation
// ==========================================================

/* Open */
function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}


$(document).ready(function(){
  $('#myOwnModal').hide();

	$('body').append(script);

  $('#close-btn').click(function(){
    $('#myOwnModal').hide();
  });
  // alert

  $('.book-me').click(function(){
    alert("thanks for booking");
  });


// ==========================================================
//	Date Calculation
// ==========================================================
	$('#startDate').datepicker({
		dateFormat : 'yy-mm-dd',
		changeMonth : true,
		minDate :new Date(),
		maxDate : '+1y',
		onSelect : function(date){
			var selectDate = new Date(date);
			var msecInADay  = 86400000;
			var stDate = new Date(selectDate.getTime() + msecInADay);

			$('#endDate').datepicker('option', 'minDate', stDate);
			var enDate = new Date(selectDate.getTime() + 10 * msecInADay);

			$('#endDate').datepicker('option', 'maxDate', enDate);

		}

	});

	$('#endDate').datepicker({
		dateFormat : 'yy-mm-dd',
		changeMonth : true
	});

});


// ==========================================================
//	Maps
// ==========================================================


// console.log(key); //key comes from external file mapKey.js
var script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap&libraries=&v=weekly" defer></script>';
console.log (script);

function initMap() {

  // The location of New Zealand
  const wellington = { lat: -41.2489187, lng: 174.7001308 };
  // The map, centered at New Zealand
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom:8,
    center: wellington,
  });



  // ==========================================================
  // Function ..........
  // ==========================================================


  function filterAccommodation(xDays, xGuests, xCity, xMeal){

    var i;
    for (i = 0 ; i < accommodations.length; i++){

      if (( (xDays <= accommodations[i].maxDays) && (xDays >= accommodations[i].minDays)) &&
      ( (xGuests <= accommodations[i].maxGuest) && (xGuests >= accommodations[i].minGuest)) && (xCity === accommodations[i].city)){

      //bootstrap cards to $display
       displayAccommodations(i);
       //cardModal();
    } //end of for loop
    } //end of allCats function

  }


	// ==========================================================
	// filter by guests, city and meal
	// ==========================================================

			$('#btn-search').click(function(){
			var days = dateDiff();
			var guests = parseInt($('#guests').val());
			var city = $('#city').val();
			var meal = parseInt($('#meal').val());

      // filterAccommodations(days, guests, city, meal);


			var i;

				for ( i  = 0 ; i < accommodations.length; i++) {
          // console.log(i, accommodations[i].name);

					if (( (days <= accommodations[i].maxDays) && (days >= accommodations[i].minDays)) &&
					 ( (guests <= accommodations[i].maxGuests) && (guests >= accommodations[i].minGuests)) && (city === accommodations[i].city)){


						var total  = (accommodations[i].cost + meal * guests) * days;

						displayAccommodations(i);


            var location = { lat : accommodations[i].lat, lng: accommodations[i].lng};
            // console.log(location);
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({
              position: location,
              map: map
            });

            var contentString = '<div class=""> <h3 class="p-2 text-info">'+ accommodations[i].name + ' </h3></div>';

            const infowindow = new google.maps.InfoWindow({
              content: contentString,
            });

            marker.addListener("click", () => {
              infowindow.open(map, marker);
            });


						cardModal(days, guests,city, total);

					}
				}
		});

	} //initMap



		$('#comment').hide();
			$('.qna').click(function(){
				$('#comment').toggle();
			});


		$('.my-button').click(function(){
			$('.search').toggleClass('active');
		});

    $('#message').hide();
    $('#map').hide();
      $('#btn-search').click(function(){
        $('#message').show();
        $('#map').show();
    });



	// ==========================================================
	// Date Diff
	// ==========================================================

	function dateDiff(){
		var start = $(startDate).datepicker('getDate');
		var end = $(endDate).datepicker('getDate');

		var days = (end-start)/1000/60/60/24; //to get human readable days
		return (days);

	}


	// ==========================================================
	// Display accommodation home page
	// ==========================================================

	function displayAccommodations(j){
  //  $('#result').text('');
	  //access properties of objects using index number
	  $('#result').append( '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2">' +
	                          '<div class="bg-info card text-danger" >' +
	                             '<img id="' + accommodations[j].id + '" src="images/' + accommodations[j].photo + '" class="card-img-top py-2 moreDetails" alt="' + accommodations[j].categorie + '">' +
                               // '<div id="map" class=""></div>' +
															 '<a id="' + accommodations[j].id + '"   class="mx-auto other-btn text-white p-2 btn btn-lg rounded-pill moreDetails">VIEW</a>' +
	                          '</div>' +
	                      '</div>'
	                  ); //append ends here


	} //displayAccommodations



	// ==========================================================
	// Modal
	// ==========================================================

	  function cardModal(d,g,c,t){
      // console.log('cardModal');
	    $('.moreDetails').click(function(){
        $('#myOwnModal').show();
	      $('#imageAccommodations').text(' '); //clearing the content
        $('#exampleModalLabel').text(' ');
	      // console.log(this.id);
        var j;
        for (j = 0; j< accommodations.length; j++){
          // console.log(parseInt(this.id) , accommodations[j].id);
          if ( parseInt(this.id) === accommodations[j].id) {
	          // categorie = accommodations[i]id.categorie;
	          // console.log(categorie);
	          // console.log(accommodations[i].id, accommodations[i].categorie);
	            $('#exampleModalLabel').text(accommodations[j].categorie);

	            //append will keep  adding to existing content, so clear if you want
	            //or else use html to replace existing content
	            $('#imageAccommodations').html('<img class="img-modal" src="images/' + accommodations[j].photo+ '" alt="' + accommodations[j].name + '"/>' +
              '<h3 class="pt-2 text-center card-title hed-modal">'+ accommodations[j].name + '</h3>' +
              '<h3 class=" text-center card-text hed-modal"> ' + accommodations[j].address + '<span class=""> <br> Cost per day:' + accommodations[j].cost + '</span> </h3>' +
              '<p class=" text-center para-modal"><span class="">' + accommodations[j].desc + '</span></p>' +
              '<h3 class=" text-center card-text hed-modal"><span class=""> meal: ' + accommodations[j].meal + '</span></h3>' +
               '<h3 class=" text-center hed-modal">' + d + ' days</h3>' +
               '<h3 class=" text-center hed-modal">' + g + ' guests</h3>'+
               '<h3 class=" text-center hed-modal">total : $ ' + t + '</h3>' +
               '<a id="' + accommodations[j].id + '"   href="index.html" class="mx-auto d-block bg-info text-white p-2 btn btn-lg rounded-pill book-me">confirm</a>'

              );
          }
          }


			  }); // end of moreDetails click event


		  } //cardModal
