$(document).ready(function() {
    $('#bitcoins').DataTable( {
        "ajax": "https://reqres.in/api/users/2",
        "columns": [
            { "data": "id" },
            { "data": "email" },
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "avatar" },
        ]
    } );
} );