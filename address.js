$(document).ready(function(){
    var input = document.getElementById('address');
    var options = {
        types: ['address'],
        componentRestrictions: {
            country: "nz"
        }
    };

    autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', fillInAddress);
});

var componentForm = {
    street_number: 'short_name',  
    route: 'long_name',
    sublocality_level_1: 'short_name',          // Suburb in NewZealand
    locality: 'long_name',                      // City in NewZealand
    administrative_area_level_1: 'short_name',  // Region in NewZealand
    country: 'long_name',
    postal_code: 'short_name'
};

function fillInAddress() {
    var place = autocomplete.getPlace();

    document.getElementById('address').value = place.formatted_address;

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        //alert(addressType+place.address_components[i]['short_name']+place.address_components[i]['long_name']);
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    }

}
