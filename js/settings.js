$(document).ready( function () {
  $('#tbl_orderfilter').DataTable();
} );

// Reporting Category Form Submit and Append Row Forms
    $(document).ready(function(){

        $(".add-user").click(function(){
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var city = $("#city").val();
            var address = $("#address").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td><td>" + mobile + "</td><td>" + city + "</td><td>" + address + "</td><td>" + address + "</td><td><input type='button' class='btn btn-success' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btnDelete' value='Delete'></td></tr>";
            $("table tbody").append(markup);
        });
        
        // Find and remove selected table rows
        $("#tbUser").on('click', '.btnDelete', function () {
            var retVal = confirm("Are you sure you want to delete ?");
            if( retVal == true ){
                 $(this).closest('tr').remove();
            }
            else{
                alert ("User does not want to delete!");
               
            }
        });

    });    
