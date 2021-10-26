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