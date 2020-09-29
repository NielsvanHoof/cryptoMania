// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */

// (function () {
//     $(document).ready(function () {
//         const table = $('#favorites').DataTable({
//             "responsive": true,
//             "rowId": "id",
//             "ajax": {
//                 "type": "GET",
//                 "url": "https://api.coincap.io/v2/assets",
//                 "dataSrc": "data",
//                 "contentType": 'application/json; charset=utf-8',
//             },
//             "columns": [
//                 { "data": "rank" },
//                 { "data": "symbol" },
//                 { "data": "name" },
//                 { "data": "priceUsd", render: $.fn.dataTable.render.number('.', '.', 2, '') },
//                 { "data": "marketCapUsd", render: $.fn.dataTable.render.number('.', '.', 2, '') },
//                 { "data": "changePercent24Hr", render: $.fn.dataTable.render.number('.', '.', 2, '') },
//                 {
//                     "data": null,
//                     "defaultContent": "<button class='btn btn-primary' data-toggle='modal' data-target='#info-modal' >More info</button>",
//                 }
//             ],
//             "createdRow": function (row, data, index) {
//                 $('td', row).eq(0).attr('id', 'td-' + index + '-1');
//             }
//         });
//         initModal(table);
//         addIdToInput(table);
//     })
// })();


// function initModal(table) {
//     $('#bitcoins').on('click', 'button', function () {
//         let data = table.row(this).data();
//         $('#title-modal').html(data.name);
//         $('#modal-short').html(data.symbol);
//         // getHistory(data);
//     })
// }

// //  function getHistory(data) {
// //     try {
// //         let now = new Date();
// //         let timeToday = now.setDate(now.getDate());
// //         let timeWeekAgo = now.setDate(now.getDate()-7);

// //         let response = await (await fetch(`https://api.coincap.io/v2/assets/${data.id}/history?interval=d1&start=${timeWeekAgo}&end=${timeToday}`)).json();

// //         let date = new Date(response.data.date);
        
// //         let convertedDate = date.toISOString().replace("/T.*/",'').split('-').reverse().join('-');

// //         const dateArray = convertedDate.map(x => x.date);
// //         const priceArray = response.data.map(x => x.priceUsd);

// //         generateChart(dateArray,priceArray);
// //     }
// //     catch (error) {
// //         console.log(error);
// //     }
// // }

// function generateChart(chartDate, chartPrice) {

// 	var ctx = document.getElementById('myChart').getContext('2d');

// 	var chart = new Chart(ctx, {
// 			type: 'line',

// 			data: {
// 				labels: chartDate,
// 					datasets: [{
// 						type: "line",
// 							label: "Price over the past 2 weeks",
// 							borderColor: '#3e95cd',
// 							data: chartPrice,
// 					}]
// 			},

// 			options: {
// 				scales: {
// 					xAxes: [{
// 						display: true,
// 						scaleLabel: {
// 							display: true,
// 							labelString: 'Date'
// 						}
// 					}],
// 					yAxes: [{
// 						display: true,
// 						scaleLabel: {
// 							display: true,
// 							labelString: 'Price'
// 						}
// 					}]
// 				},
// 				elements: { point: { radius: 0 } }
// 			}
// 	});
// }

//  function addIdToInput(table){
//     $('#bitcoins').on('click', 'button', function () {
//         let data = table.row(this).data();
//         let id = data.rank;
//         let name = data.id
//         let input = document.getElementById('favorite-id').setAttribute('value',id);
//         let nameInput = document.getElementById('favorite-coin').setAttribute('value',name);
//     })
// }
