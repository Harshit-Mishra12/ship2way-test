
$(document).ready( function () {
  $('#product_table').DataTable();
} );

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
      var pro_name = $("#pro_name").val();
      var pro_desc = $("#pro_desc").val();
      var original_price = $("#original_price").val();
      var sales_price = $("#sales_price").val();
      var pro_type = $("#pro_type").val();
      var Shipping_fee = "120";
      var import_price = "456";
      var avl_unit = "350";
      var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + pro_name + "</td><td>" + pro_desc + "</td><td>" + original_price + "</td><td>" + import_price + "</td><td>" + pro_type + "</td><td>" + sales_price + "</td><td>" + Shipping_fee + "</td><td>" + avl_unit + "</td><td><input type='button' class='btn btn-success' data-toggle='modal' data-target='#edit_product' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btn-Delete' value='Delete'></td></tr>";
      $("table tbody").append(markup);
      $('#add_product').modal('hide');
  });

  $("#tbl_product").on('click', '.btn-Delete', function () {

    var retVal = confirm("Are you sure you want to delete ?");
    if( retVal == true ){
         $(this).closest('tr').remove();
    }
    else{
        alert ("User does not want to delete!");
       
    }
});

  
  

});  

// Preset Groups Form Submit and Append Row Forms
    $(document).ready(function(){

        $(".add-preset").click(function(){
            var preset_group = $("#preset_group").val();
            var stores = "Ebay";
            var pro_type = "shop";
            var dimension = "30 x 40";
            var weight = "40gms";
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + preset_group + "</td><td>" + stores + "</td><td>" + pro_type + "</td><td>" + dimension + "</td><td>" + weight + "</td><td><input type='button' class='btn btn-success' data-toggle='modal' data-target='#edit_preset' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btn-Delete' value='Delete'></td></tr>";
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
            var pro_type = "bag";
            var stores ="shopify";
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + category + "</td><td>" + pro_type + "</td><td>" + stores + "</td><td><input type='button' class='btn btn-success' data-toggle='modal' data-target='#edit_rep' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btnDelete' value='Delete'></td></tr>";
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
