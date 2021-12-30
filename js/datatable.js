$(document).ready( function () {
    var extensions = {
        "sFilter": "dataTables_filter search-box",
    }
    // Used when bJQueryUI is false
    $.extend($.fn.dataTableExt.oStdClasses, extensions);
    // Used when bJQueryUI is true
    $.extend($.fn.dataTableExt.oJUIClasses, extensions);
    $('#cancelledTable').dataTable({
        "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
         "paging": false,//Dont want paging                
         "bPaginate": false,//Dont want paging   
         language: { search: '', searchPlaceholder: "Search Table" },
    });
    //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
} );

$(document).ready( function () {
    var extensions = {
        "sFilter": "dataTables_filter search-box",
    }
    // Used when bJQueryUI is false
    $.extend($.fn.dataTableExt.oStdClasses, extensions);
    // Used when bJQueryUI is true
    $.extend($.fn.dataTableExt.oJUIClasses, extensions);
    $('#shippedTable').dataTable({
        "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
         "paging": false,//Dont want paging                
         "bPaginate": false,//Dont want paging   
         language: { search: '', searchPlaceholder: "Search Table" },
    });
    //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
} );

$(document).ready( function () {
    var extensions = {
        "sFilter": "dataTables_filter search-box",
    }
    // Used when bJQueryUI is false
    $.extend($.fn.dataTableExt.oStdClasses, extensions);
    // Used when bJQueryUI is true
    $.extend($.fn.dataTableExt.oJUIClasses, extensions);
    $('#awaitingpaymentTable').dataTable({
        "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
         "paging": false,//Dont want paging                
         "bPaginate": false,//Dont want paging   
         language: { search: '', searchPlaceholder: "Search Table" },
    });
    //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
} );

$(document).ready( function () {
    var extensions = {
        "sFilter": "dataTables_filter search-box",
    }
    // Used when bJQueryUI is false
    $.extend($.fn.dataTableExt.oStdClasses, extensions);
    // Used when bJQueryUI is true
    $.extend($.fn.dataTableExt.oJUIClasses, extensions);
    $('#holdTable').dataTable({
        "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
         "paging": false,//Dont want paging                
         "bPaginate": false,//Dont want paging   
         language: { search: '', searchPlaceholder: "Search Table" },
    });
    //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
} );

