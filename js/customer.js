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

  // Customer Form Submit and Append Row Forms
  $(document).ready(function(){
  
    $(".add-customer").click(function(){
        var name = $("#name").val();
        var comapny = $("#comapny").val();
        var order = $("#order").val();
        var ship_paid = $("#ship_paid").val();
        var import_price = "456";
        var avl_unit = "350";
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + comapny + "</td><td>" + order + "</td><td>" + ship_paid + "</td><td>" + import_price + "</td><td>" + import_price + "</td><td>" + import_price + "</td><td>" + avl_unit + "</td><td>" + avl_unit + "</td><td><input type='button' class='btn btn-success' data-toggle='modal' data-target='#edit_customer' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btn-Delete' value='Delete'></td></tr>";
        $("#customer_tbl").append(markup);
        $('#add_customer').modal('hide');
    });
  
        $("#customer_tbl").on('click', '.btnDelete', function () {
    
        var retVal = confirm("Are you sure you want to delete ?");
        if( retVal == true ){
            $(this).closest('tr').remove();
        }
        else{
            alert ("User does not want to delete!");
            
        }
    });
    }); 
    
// Vendor Form Submit and Append Row Forms
  $(document).ready(function(){
  
    $(".add-vendor").click(function(){
        var vendor_name = $("#vendor_name").val();
        var vendor_company = $("#vendor_company").val();
        var order_id = $("#order_id").val();
        var shipping_id = $("#shipping_id").val();
        var country = "India";
        var avl_unit = "350";
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + vendor_name + "</td><td>" + vendor_company + "</td><td>" + order_id + "</td><td>" + shipping_id + "</td><td>" + country + "</td><td>" + country + "</td><td>" + avl_unit + "</td><td>" + avl_unit + "</td><td><input type='button' class='btn btn-success' data-toggle='modal' data-target='#edit_vendor' value='Edit'>&nbsp;<input type='button' class='btn btn-danger btn-Delete' value='Delete'></td></tr>";
        $("#vendor_tbl").append(markup);
        $('#add_vendor').modal('hide');
    });
  
        $("#vendor_tbl").on('click', '.btnDelete', function () {
    
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
  