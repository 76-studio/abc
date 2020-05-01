/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Shkun Accountin Software
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: "Dashboard",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu: [
      {
        url: '/dashboard/analytics',
        name: "Analytics",
        icon: "GridIcon",
        slug: "dashboard-analytics",
        i18n: "Analytics",
      },
      {
        url: '/dashboard/company',
        name: "Company",
        icon: "PackageIcon",
        slug: "dashboard-ecommerce",
        i18n: "Company",

        submenu: [
          {
            url: '/dashboard/company',
            name: "Company List",
            slug: "company-list",
            i18n: "Company List",
          },
          {
            url: null,
            name: "Add Company",
            slug: "add-company",
            i18n: "Add Company",
          },
        ]

        
      },
    ]
  },






  

  {

    
    url: null,
    name: "Transaction",
    icon: "ListIcon",
    i18n: "Transaction",
    submenu: [

      {
        url: "/dashboard/sale-gst",
        name: "Sale GST",
        slug: "sale-GST",
        i18n: "Sale GST",
      },

      
      {
        url: "/dashboard/purchasegstforms",
        name: "Purchase GST",
        slug: "purchase-GST",
        i18n: "Purchase GST",
      },




      {
        name: "Cash",
        slug: "cash",
        i18n: "Cash",

        submenu: [
          {
            url: "/dashboard/cashvoucher",
            name: "Cash Voucher",
            slug: "cash-voucher",
            i18n: "Cash Voucher",
          },
          {
            url: "/dashboard/cashreceipt",
            name: "Receipt Book",
            slug: "receipt-book",
            i18n: "Receipt Book",
          },
        ]
      },
      {
        url: "/dashboard/journal",
        name: "Journal",
        slug: "journal",
        i18n: "Journal",
      },
      {
        url: "/dashboard/bank",
        name: "Bank",
        slug: "bank",
        i18n: "Bank",
      },
      {
        url: "/dashboard/tdsvouchar",
        name: "TDS Vouchar",
        slug: "tds-vouchar",
        i18n: "TDS Vouchar",
      },
      {
        url: "/dashboard/newledger",
        name: "New Ledger Accounts",
        slug: "nes-ledger",
        i18n: "New Ledeger Accounts",
      },
      {
        url: "#",
        name: "New Stock Accounts",
        slug: "new-stock",
        icon: "MailIcon",
        i18n: "New Stock Accounts",
      },
      
      {
        url: "#",
        name: "Define HSN For GST Purpose",
        slug: "hsn-gst",
        i18n: "Define HSN For GST Purpose",
      },
      {
        url: "#",
        name: "Production Chart",
        slug: "product-chart",
        i18n: "Production Chart",
      },

      {
        url: "#",
        name: "Stock Transfer",
        slug: "stock-trans",
        i18n: "Stock Transfer",
      },
      {
        url: "#",
        name: "Annexure",
        slug: "annexure",
        i18n: "Annexure",
      },
      {
        url: "#",
        name: "Inventory",
        slug: "inventory",
        i18n: "Inventory",
      },

      {
        url: "#",
        name: "Banking",
        slug: "banking",
        i18n: "Banking",
      },
      {
        url: "#",
        name: "Goods Return",
        slug: "goods-return",
        i18n: "Goods Return",
      },
      
      {
        url: "#",
        name: "Sale GST Challan",
        slug: "sale-gst-challan",
        i18n: "Sale GST Challan",
      },

     

        
      
    ]
  },


  {
    header: "About",
    icon: "PackageIcon",
    i18n: "About",
    items: [

      {
        url: "#",
        name: "About Us",
        slug: "sale-GST",
        icon: "MailIcon",
        i18n: "About Us",
      },
      {
        url: "/dashboard/exciseregister",
        name: "exciseregister-GST",
        slug: "exciseregiste-GST",
        i18n: "exciseregiste GST",
      },

      
    ]
  },
  
]

