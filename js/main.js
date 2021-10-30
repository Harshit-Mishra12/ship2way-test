
// $("#navbar").load("/header.html");
// Treeview Initialization
$('body').on('click','.list-group-item',function(){
  window.location=$(this).attr('href');
  });
var NavigationMenu = [
  {
    text: "Shipments",
    icon: "fas fa-shipping-fast",
    nodes: [
      {
        text: "Shipped",
        icon: "fa fa-folder",
        nodes: [
          {
            text: "Recent",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html"
          },
          {
            text: "In Transit",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html"
          },          {
            text: "Delivered",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html"
          },          {
            text: "Delivery Exception",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html"
          },          {
            text: "Voided",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/recents.html"
          },
        ]
      },
      {
        text: "Fulfilments",
        icon: "fa fa-folder",
        nodes:[
          {
            text: "Recent",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html"
          },
          {
            text: "Pending",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html"
          },
          {
            text: "In Transit",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html"
          },
          {
            text: "Delivered",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html"
          },
          {
            text: "Delivery Exception",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html"
          },
          {
            text: "Cancelled",
            icon: "fa fa-folder",
            class: "custom-class",
            href: "/Shipments/fulfilments.html"
          },
        ]
      },
      {
        text: "Returns",
        icon: "fa fa-folder",
        href: "/Shipments/returnsOutstanding.html"
      },
      {
        text: "End of Day",
        icon: "fa fa-folder",
        href: "/Shipments/endDay.html"
      },
      {
        text: "Batches",
        icon: "fa fa-folder",
        href: "/Shipments/batch.html"
      }
    ]
  },
  {
    text: "Onboard",
    icon: "fas fa-truck-loading",
    href: "/Onboard/onboard.html"
  },
  {
    text: "Insights",
    icon: "far fa-chart-bar",
    nodes:[
      {
        text: "Overview",
        icon: "fa fa-folder",
        href: "/Insights/overview.html"
      },
      {
        text: "Operations",
        icon: "fa fa-folder",
        href: "/Insights/operations.html"
      },
      {
        text: "Customer Engagement",
        icon: "fa fa-folder",
        href: "/Insights/customerengagement.html"
      },
      {
        text: "Sales Trend",
        icon: "fa fa-folder",
        href: "/Insights/sales.html"
      },
      {
        text: "Customer Overview",
        icon: "fa fa-folder",
        href: "/Insights/customers.html"
      },
      {
        text: "Products Highlight",
        icon: "fa fa-folder",
        href: "/Insights/productsold.html"
      }
    ]
  },
  {
    text: "Orders",
    icon: "fas fa-shopping-cart",
    nodes:[
      {
        text: "Awaiting Payment",
        icon: "fa fa-folder",
        href: "/Orders/AwaitingPayment.html"
      },
      {
        text: "On Hold",
        icon: "fa fa-folder",
        href: "/Orders/OnHold.html"
      },
      {
        text: "Awaiting Shipment",
        icon: "fa fa-folder",
        href: "/Orders/AwaitingShipment.html"
      },
      {
        text: "Shipped",
        icon: "fa fa-folder",
        href: "/Orders/Shipped.html"
      },
      {
        text: "Cancelled",
        icon: "fa fa-folder",
        href: "/Orders/Cancelled.html"
      },
      {
        text: "Alert",
        icon: "fa fa-folder",
        href: "/Orders/OrderAlerts.html"
      }
    ]
  },
  {
    text: "Products",
    icon: "fas fa-boxes",
    nodes:[
      {
        text: "Products",
        icon: "fa fa-folder",
        href: "/Products/products.html"
      },
      {
        text: "Preset Group",
        icon: "fa fa-folder",
        href: "/Products/preset_groups.html"
      },
      {
        text: "Reporting Categories",
        icon: "fa fa-folder",
        href: "/Products/rep_categories.html"
      },
      {
        text: "Inventory",
        icon: "fa fa-folder",
        href: "/Products/inventory.html"
      },
    ]
  },
  {
    text: "Customers",
    icon: "fas fa-user-friends",
    nodes:[
      {
        text: "Customers",
        icon: "fa fa-folder",
        href: "/Customers/customers.html"
      },
    ]
  }
  
];
$('#navbar').bstreeview({ 
  data: JSON.stringify(NavigationMenu),
  expandIcon: 'fa fa-angle-down fa-fw',
  collapseIcon: 'fa fa-angle-right fa-fw',
  openNodeLinkOnNewTab: true
});
