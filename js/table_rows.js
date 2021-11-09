
function rm() {
    $(event.target).closest("tr").remove();
  }
  
  function add() {
    $("#Addline").append("<tr><td><input style='width:100px;'></td><td><input style='width:100px;'></td><td><input style='width:100px;'></td><td><input style='width:100px;'></td><td><button class='btn btn-danger' onclick='rm()'><i class='fa fa-minus'></i></button></td></tr>");
  }

  
//Reporting Category Form Submit and Append Row Forms

// Settings ->Inventory Management -> Inventory Werehouse

$(document).ready(function(){

    $(".add-user").click(function(){
        var name = $("#name").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td><input type='button' class='btn btn-success' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btnDelete' value='Delete'></td></tr>";
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

// End
