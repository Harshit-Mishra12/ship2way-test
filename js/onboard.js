$(document).ready(function() {
    $(document).on("click", ".question", function(e) {
       var checked = $(this).find("input:checkbox").is(":checked");
       if (checked) {
           $('.answer').show(300);
       } else {
           $('.answer').hide(300);
       }
    });
});