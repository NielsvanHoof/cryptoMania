/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
displayData();

function displayData() {
    $(document).ready(function () {
        const table = $('#bitcoins').DataTable({
            "responsive": true,
            "rowId": "id",
            "ajax": {
                "type": "GET",
                "url": "https://api.coincap.io/v2/assets",
                "dataSrc": "data",
                "contentType": 'application/json; charset=utf-8',
            },
            "columns": [
                { "data": "rank" },
                { "data": "symbol" },
                { "data": "name" },
                { "data": "priceUsd", render: $.fn.dataTable.render.number('.', '.', 2, '') },
                { "data": "marketCapUsd", render: $.fn.dataTable.render.number('.', '.', 2, '') },
                { "data": "changePercent24Hr", render: $.fn.dataTable.render.number('.', '.', 2, '') },
                {
                    "data": null,
                    "defaultContent": "<button class='btn btn-primary' data-toggle='modal' data-target='#info-modal' >More info</button>",
                }
            ],
            "createdRow": function ( row, data, index ) {
                $('td', row).eq(0).attr('id', 'td-' + index + '-1');
             }
        });
        getTableData(table);
    });
}


function getTableData(table) {
        let data = table.row( $(this).closest('tr') ).data();
        console.log(data);
}