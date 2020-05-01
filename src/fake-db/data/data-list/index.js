import mock from "@/fake-db/mock.js"

const data = {
  products: [
    {
      "id": 1,
      "category": "Firm",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/01.png",
      "name": "Ezmata",
      "order_status": "on_hold",
      "issud": "10/02/2020",
      "dued": "10/02/2020"
    },
    {
      "id": 2,
      "category": "Firm",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/02.png",
      "name": "Ezmata",
      "order_status": "Paid",
      "issud": "10/02/2020",
      "dued": "10/02/2020"
    },
    {
      "id": 3,
      "category": "Firm",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/06.png",
      "name": "AEzmata",
      "order_status": "canceled",
      "issud": "10/02/2020",
      "dued": "10/02/2020"
    },
    {
      "id": 4,
      "category": "Firm",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/09.png",
      "name": "Ezmata",
      "order_status": "Paid",
      "issud": "10/02/2020",
      "dued": "10/02/2020"
    },
    {
      "id": 5,
      "category": "Firm",
      "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/06.png",
      "name": "Ezmata",
      "order_status": "Paid",
      "issud": "10/02/2020",
      "dued": "10/02/2020"
    },
   
  ]
}


mock.onGet("/api/data-list/products").reply(() => {
  return [200, JSON.parse(JSON.stringify(data.products)).reverse()];
});

// POST : Add new Item
mock.onPost("/api/data-list/products/").reply((request) => {

  // Get event from post data
  let item = JSON.parse(request.data).item

  const length = data.products.length
  let lastIndex = 0
  if(length){
    lastIndex = data.products[length - 1].id
  }
  item.id = lastIndex + 1

  data.products.push(item)

  return [201, {id: item.id}]
})

// Update Product
mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

  let item = data.products.find((item) => item.id == itemId)
  Object.assign(item, JSON.parse(request.data).item)

  return [200, item]
})

// DELETE: Remove Item
mock.onDelete(/\/api\/data-list\/products\/\d+/).reply((request) => {

  const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

  const itemIndex = data.products.findIndex((p) => p.id == itemId)
  data.products.splice(itemIndex, 1)
  return [200]
})
