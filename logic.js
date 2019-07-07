// call the vehicle data from api
$(document).ready(function() {
    callData();
});

var url = "https://api.sawatchlabs.com/models/13/2017" 

function callData() {
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
    }).then(function(res) {
        console.log(res.data);
        console.log(res.data[0].vehicle_year); 
   
    // orgnaize car data by vehicle_model? *It's already alphabetical

    // append data to html table
        for (var i = 0; i < res.data.length; i++) {
            $("#swt-table").append(
                "<tr>" + 
                    "<td>" + res.data[i].vehicle_year + "</td>" +
                    "<td>" + res.data[i].vehicle_make_id + "</td>" +
                    "<td>" + res.data[i].vehicle_model + "</td>" +
                    "<td>" + res.data[i].displacement + "</td>" +
                    "<td>" + res.data[i].cylinders + "</td>" +
                    "<td>" + res.data[i].class + "</td>" +
                "</tr>" 
            )
        };
    })

};
