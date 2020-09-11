$(document).ready(function() {
   $('#bitcoins').DataTable( {
        "ajax": {
            "type":"GET",
            "url":"https://api.coincap.io/v2/assets",
            "dataSrc":"data",
            "contentType": 'application/json; charset=utf-8',
        },
        "columns": [
            { "data": "symbol" },
            { "data": "name" },
            { "data": "priceUsd" },
            { "data": "marketCapUsd" },
            { "data": "changePercent24Hr"},
            {
                "data": null,
                "defaultContent": "<button class='btn btn-primary'>More Info</button>"
            }
        ]
    } );
} );