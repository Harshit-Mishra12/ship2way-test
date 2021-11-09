$('body').on('click','.list-group-item',function(){
  localStorage.setItem("nav_item_id", $(this).attr('id'));
  window.location=$(this).attr('href');
  });
var NavigationMenu = [
  {
    text: "Shipments",
    icon: "fas fa-shipping-fast",
    id: "nav1",
    nodes: [
      {
        text: "Shipped",
        icon: "fa fa-folder",
        id:"nav1_1",
        nodes: [
          {
            text: "Recent",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html",
            id:"nav1_1_1",
          },
          {
            text: "In Transit",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html",
            id:"nav1_1_2",
          },          {
            text: "Delivered",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html",
            id:"nav1_1_3",
          },          
          {
            text: "Delivery Exception",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html",
            id:"nav1_1_4",
          },          
          {
            text: "Voided",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html",
            id:"nav1_1_5",
          },
        ]
      },
      {
        text: "Fulfilments",
        icon: "fa fa-folder",
        id:"nav1_2",
        nodes:[
          {
            text: "Recent",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html",
            id:"nav1_2_1",
          },
          {
            text: "Pending",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html",
            id:"nav1_2_2",
          },
          {
            text: "In Transit",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html",
            id:"nav1_2_3",
          },
          {
            text: "Delivered",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html",
            id:"nav1_2_4",
          },
          {
            text: "Delivery Exception",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html",
            id:"nav1_2_5",
          },
          {
            text: "Cancelled",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html",
            id:"nav1_2_6",
          },
        ]
      },
      {
        text: "Returns",
        icon: "fa fa-folder",
        href: "/Shipments/returnsOutstanding.html",
        id:"nav1_3",
      },
      {
        text: "End of Day",
        icon: "fa fa-folder",
        href: "/Shipments/endDay.html",
        id:"nav1_4",
      },
      {
        text: "Batches",
        icon: "fa fa-folder",
        href: "/Shipments/batch.html",
        id:"nav1_5",
      }
    ]
  },
  {
    id:"nav2",
    text: "Onboard",
    icon: "fas fa-truck-loading",
    href: "/Onboard/onboard.html",
    
  },
  {
    text: "Insights",
    icon: "far fa-chart-bar",
    id:"nav3",
    nodes:[
      {
        text: "Overview",
        icon: "fa fa-folder",
        href: "/Insights/overview.html",
        id:"nav3_1",
      },
      {
        text: "Operations",
        icon: "fa fa-folder",
        href: "/Insights/operations.html",
        id:"nav3_2",
      },
      {
        text: "Customer Engagement",
        icon: "fa fa-folder",
        href: "/Insights/customerengagements.html",
        id:"nav3_3",
      },
      {
        text: "Sales Trend",
        icon: "fa fa-folder",
        href: "/Insights/sales.html",
        id:"nav3_4",
      },
      {
        text: "Customer Overview",
        icon: "fa fa-folder",
        href: "/Insights/customers.html",
        id:"nav3_5",
      },
      {
        text: "Products Highlight",
        icon: "fa fa-folder",
        href: "/Insights/productsold.html",
        id:"nav3_6",
      }
    ]
  },
  {
    text: "Orders",
    icon: "fas fa-shopping-cart",
    id:'nav4',
    nodes:[
      {
        text: "Awaiting Payment",
        icon: "fa fa-folder",
        href: "/Orders/AwaitingPayment.html",
        id:'nav4_1'
      },
      {
        text: "On Hold",
        icon: "fa fa-folder",
        href: "/Orders/OnHold.html",
        id:'nav4_2'
      },
      {
        text: "Awaiting Shipment",
        icon: "fa fa-folder",
        href: "/Orders/AwaitingShipment.html",
        id:'nav4_3'
      },
      {
        text: "Shipped",
        icon: "fa fa-folder",
        href: "/Orders/Shipped.html",
        id:'nav4_4'
      },
      {
        text: "Cancelled",
        icon: "fa fa-folder",
        href: "/Orders/Cancelled.html",
        id:'nav4_5'
      },
      {
        text: "Alert",
        icon: "fa fa-folder",
        href: "/Orders/OrderAlerts.html",
        id:'nav4_6'
      }
    ]
  },
  {
    text: "Products",
    icon: "fas fa-boxes",
    id:'nav5',
    nodes:[
      {
        text: "Products",
        icon: "fa fa-folder",
        href: "/Products/products.html",
        id:'nav5_1'
      },
      {
        text: "Preset Group",
        icon: "fa fa-folder",
        href: "/Products/preset_groups.html",
        id:'nav5_2'
      },
      {
        text: "Reporting Categories",
        icon: "fa fa-folder",
        href: "/Products/rep_categories.html",
        id:'nav5_3'
      },
      {
        text: "Inventory",
        icon: "fa fa-folder",
        href: "/Products/inventory.html",
        id:'nav5_4'
      },
    ]
  },
  {
    text: "Customers",
    icon: "fas fa-user-friends",
    id:'nav6',
    nodes:[
      {
        text: "Customers",
        icon: "fa fa-folder",
        href: "/Customers/customers.html",
        id:'nav6_1'
      },
    ]
  },
  {
    id:"nav7",
    text: "Invoice",
    icon: "fas fa-truck-loading",
    href: "/Invoice/invoice.html",
    
  },
  {
    text: "Settings",
    icon: "fas fa-user-friends",
    id:'nav8',
    nodes:[
      {
        text: "Account",
        icon: "fa fa-folder",
        id:'nav8_1',
        nodes:[
          {
            text: "My Profile",
            icon: "fa fa-folder",
            href: "/Settings/Accounts/myprofile.html",
            id:'nav8_1_1'
          },
          {
            text: "Display Options",
            icon: "fa fa-folder",
            href: "/Settings/Accounts/display_options.html",
            id:'nav8_1_2'
          },
          {
            text: "Subscription",
            icon: "fa fa-folder",
            href: "/Settings/Accounts/subscription.html",
            id:'nav8_1_3'
          },
          {
            text: "User Management",
            icon: "fa fa-folder",
            href: "/Settings/Accounts/user_management.html",
            id:'nav8_1_4'
          },
          {
            text: "API Settings",
            icon: "fa fa-folder",
            href: "/Settings/Accounts/api_settings.html",
            id:'nav8_1_5'
          },
          
         
        ]
      },
      {
        text: "Selling Channel",
        icon: "fa fa-folder",
        id:'nav8_2',
        nodes:[
          {
            text: "Store Setup",
            icon: "fa fa-folder",
            href: "/Settings/Selling_Channels/store_setup.html",
            id:'nav8_2_1'
          },
        ]
      },
      {
        text: "Branded Customer Pages",
        icon: "fa fa-folder",
        id:'nav8_3',
        nodes:[
          {
            text: "Branding Defaults",
            icon: "fa fa-folder",
            href: "/Settings/Branded_Customer/branding_defaults.html",
            id:'nav8_3_1'
          },
        ]
      },
      {
        text: "Templates",
        icon: "fa fa-folder",
        id:'nav8_4',
        nodes:[
          {
            text: "Email Filters",
            icon: "fa fa-folder",
            href: "/Settings/Templates/email_templates.html",
            id:'nav8_4_1'
          },
          {
            text: "Packing Slips",
            icon: "fa fa-folder",
            href: "/Settings/Templates/packing_slips.html",
            id:'nav8_4_2'
          },
        ]
      },
      {
        text: "Automation",
        icon: "fa fa-folder",
        id:'nav8_5',
        nodes:[
          {
            text: "Order Filters",
            icon: "fa fa-folder",
            href: "/Settings/Automation/order_filters.html",
            id:'nav8_5_1'
          },
          {
            text: "Automation Rules",
            icon: "fa fa-folder",
            href: "/Settings/Automation/automation_rules.html",
            id:'nav8_5_2'
          },
        ]
      },
      {
        text: "Shipping",
        icon: "fa fa-folder",
        id:'nav8_6',
        nodes:[
          {
            text: "Workflow Settings",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/workflow_settings.html",
            id:'nav8_7_1'
          },
          {
            text: "Ship From Locations",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/ship_location.html",
            id:'nav8_7_2'
          },
          {
            text: "Carriers",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/carriers.html",
            id:'nav8_7_2'
          },
          {
            text: "Fullfillment Providers",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/full_provider.html",
            id:'nav8_7_2'
          },
          {
            text: "Insurance",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/insurance.html",
            id:'nav8_7_2'
          },
          {
            text: "Packages",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/packages.html",
            id:'nav8_7_2'
          },
          {
            text: "Return",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/return.html",
            id:'nav8_7_2'
          },
          {
            text: "International Settings",
            icon: "fa fa-folder",
            href: "/Settings/Shipping/international_setting.html",
            id:'nav8_7_2'
          },
          
          
        ]
      },
      {
        text: "Printing",
        icon: "fa fa-folder",
        id:'nav8_7',
        nodes:[
          {
            text: "Printing Setup",
            icon: "fa fa-folder",
            href: "/Settings/Printing/printing_setup.html",
            id:'nav8_7_1'
          },
          {
            text: "Shipstation Connect",
            icon: "fa fa-folder",
            href: "/Settings/Printing/shipstation_connect.html",
            id:'nav8_7_2'
          }
          
        ]
      },
      {
        text: "Inventory Management",
        icon: "fa fa-folder",
        id:'nav8_8',
        nodes:[
          {
            text: "Inventory Settings",
            icon: "fa fa-folder",
            href: "/Settings/Inventory_Management/inventory_settings.html",
            id:'nav8_8_1'
          },
          {
            text: "Allocation Strategy",
            icon: "fa fa-folder",
            href: "/Settings/Inventory_Management/allocation_strategy.html",
            id:'nav8_8_2'
          },
          {
            text: "Inventory Werehouses",
            icon: "fa fa-folder",
            href: "/Settings/Inventory_Management/inventory_warehouse.html",
            id:'nav8_8_3'
          },
        ]
      },
      {
        text: "Integrations",
        icon: "fa fa-folder",
        id:'nav8_9',
        nodes:[
          {
            text: "Integrations",
            icon: "fa fa-folder",
            href: "/Settings/Integrations/integrations.html",
            id:'nav8_9_1'
          },
        ]
      },
    ]
  }
  
];
$('#navbar').bstreeview({ 
  data: JSON.stringify(NavigationMenu),
  expandIcon: 'fa fa-angle-down fa-fw',
  collapseIcon: 'fa fa-angle-right fa-fw',
});
function GetNavClicked()
{
var nav_item_id = localStorage.getItem("nav_item_id");
document.getElementById(nav_item_id).className += ' selected';
var parent_id = nav_item_id.split('_');
GenerateClick(parent_id);
}

function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}
function GenerateClick(parent_id)
{
  var append_parent_id = parent_id[0];
  for(var i = 0;i < parent_id.length-1;i++)
  {
    if(i != 0)
    {
      append_parent_id = append_parent_id+"_"+parent_id[i]
 
    }
   
  simulate(document.getElementById(append_parent_id),'click');
    
  }
}
GetNavClicked();