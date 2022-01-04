// $(document).ready( function () {
//     var extensions = {
//         "sFilter": "dataTables_filter search-box",
//     }
//     // Used when bJQueryUI is false
//     $.extend($.fn.dataTableExt.oStdClasses, extensions);
//     // Used when bJQueryUI is true
//     $.extend($.fn.dataTableExt.oJUIClasses, extensions);
//     $('#cancelledTable').dataTable({
//         "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
//          "paging": false,//Dont want paging                
//          "bPaginate": false,//Dont want paging   
//          language: { search: '', searchPlaceholder: "Search Table" },
//     });
//     //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
// } );

// $(document).ready( function () {
//     var extensions = {
//         "sFilter": "dataTables_filter search-box",
//     }
//     // Used when bJQueryUI is false
//     $.extend($.fn.dataTableExt.oStdClasses, extensions);
//     // Used when bJQueryUI is true
//     $.extend($.fn.dataTableExt.oJUIClasses, extensions);
//     $('#shippedTable').dataTable({
//         "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
//          "paging": false,//Dont want paging                
//          "bPaginate": false,//Dont want paging   
//          language: { search: '', searchPlaceholder: "Search Table" },
//     });
//     //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
// } );

// $(document).ready( function () {
//     var extensions = {
//         "sFilter": "dataTables_filter search-box",
//     }
//     // Used when bJQueryUI is false
//     $.extend($.fn.dataTableExt.oStdClasses, extensions);
//     // Used when bJQueryUI is true
//     $.extend($.fn.dataTableExt.oJUIClasses, extensions);
//     $('#awaitingpaymentTable').dataTable({
//         "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
//          "paging": false,//Dont want paging                
//          "bPaginate": false,//Dont want paging   
//          language: { search: '', searchPlaceholder: "Search Table" },
//     });
//     //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
// } );

$(document).ready( function () {
    var extensions = {
        "sFilter": "dataTables_filter search-box",
    }
    // Used when bJQueryUI is false
    $.extend($.fn.dataTableExt.oStdClasses, extensions);
    // Used when bJQueryUI is true
    $.extend($.fn.dataTableExt.oJUIClasses, extensions);
    $('table').dataTable({
        "bInfo": false, //Dont display info e.g. "Showing 1 to 4 of 4 entries"
         "paging": false,//Dont want paging                
         "bPaginate": false,//Dont want paging   
         language: { search: '', searchPlaceholder: "Search Table" },
    });
    //$('#cancelledTable_filter label input').attr("placeholder","Search Table");
} );
// $(function() {
//     //The passed argument has to be at least a empty object or a object with your desired options
//     $('body').overlayScrollbars({resize : 'both', 
//     nativeScrollbarsOverlaid : {
//                 showNativeScrollbars : false,   //true || false
//                 initialize : true               //true || false
//               },
//               overflowBehavior : {
//                 x : 'scroll',
//                 y : 'scroll' 
        
//               }, });

// });
// var instance = OverlayScrollbars(document.getElementById("os"), {});
$('body').overlayScrollbars({});
$("table").floatThead();
