function add_tag() {
  $("#Addline").append("<tr><td><input style='width:50px;'></td><td><input style='width:50px;'></td><td><input style='width:50px;'></td><td><input style='width:50px;'></td><td><button class='btn btn-danger' onclick='rm_tags()'><i class='fa fa-minus'></i></button></td></tr>");
}

 function rm_tags() {
      $(event.target).closest("tr").remove();
   }


function handleselectionForm() {

    var alias = document.getElementById("alias");
    var sku = document.getElementById("sku");
    var preset = document.getElementById("preset");
    var weight = document.getElementById("weight");
    var name = document.getElementById("name");
    var werehouse = document.getElementById("werehouse");
    var active = document.getElementById("active");
    var created = document.getElementById("created");
    var image_url = document.getElementById("image_url");
    var allocated = document.getElementById("allocated");
    var available = document.getElementById("available");
    var declared = document.getElementById("declared");
    var dimenions = document.getElementById("dimenions");
    var fullfillment = document.getElementById("fullfillment");
    
    
      if (alias.checked == true){
        for (let el of document.querySelectorAll('.alias_column')) el.style.display = 'none';
      }
      if (sku.checked == true){
        for (let el of document.querySelectorAll('.sku_column')) el.style.display = 'none';
      }

      if (preset.checked == true){
        for (let el of document.querySelectorAll('.preset_column')) el.style.display = 'none';
      }
      if (available.checked == true){
        for (let el of document.querySelectorAll('.avaliable_column')) el.style.display = 'none';
      }
}
// Product Form Submit and Append Row Forms
$(document).ready(function(){

  $(".add-product").click(function(){
      var company_name = $("#company_name").val();
      var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + company_name + "</td><td>" + company_name + "</td><td>" + company_name + "</td><td>" + company_name + "</td><td>" + company_name + "</td><td>" + company_name + "</td><td>" + company_name + "</td></tr>";
      $("table tbody").append(markup);
      $('#New_Orders').modal('hide');
  });
  
  

});  

// Preset Groups Form Submit and Append Row Forms
    $(document).ready(function(){

        $(".add-preset").click(function(){
            var preset_group = $("#preset_group").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + preset_group + "</td><td>" + preset_group + "</td><td>" + preset_group + "</td><td>" + preset_group + "</td><td>" + preset_group + "</td><td>" + preset_group + "</td><td>" + preset_group + "</td><td>" + preset_group + "</td><td><input type='button' class='btn btn-success' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btn-Delete' value='Delete'></td></tr>";
            $("table tbody").append(markup);
            $('#preset_model').modal('hide');
           
        });
        
        // Find and remove selected table rows
        $("#tbUser").on('click', '.btn-Delete', function () {

            var retVal = confirm("Are you sure you want to delete ?");
            if( retVal == true ){
                 $(this).closest('tr').remove();
            }
            else{
                alert ("User does not want to delete!");
               
            }
        });

    });  


// Reporting Category Form Submit and Append Row Forms
    $(document).ready(function(){

        $(".add-category").click(function(){
            var category = $("#category_name").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + category + "</td><td><input type='button' class='btn btn-success' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btnDelete' value='Delete'></td></tr>";
            $("table tbody").append(markup);
            $('#category').modal('hide');
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
