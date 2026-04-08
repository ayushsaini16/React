const api = {
  "restaurants": [
    {
      "id": 201,
      "name": "Spicy Biryani House",
      "cuisine": ["Indian", "Biryani"],
      "rating": 4.3,
      "reviewsCount": 1240,
      "deliveryTime": "30-40 mins",
      "costForTwo": 400,
      "location": {
        "area": "Kakadeo",
        "city": "Kanpur",
        "coordinates": {
          "lat": 26.4499,
          "lng": 80.3319
        }
      },
      "isOpen": true,
      "menu": [
        { "id": 1, "name": "Chicken Biryani", "price": 250, "isVeg": false },
        { "id": 2, "name": "Veg Biryani", "price": 180, "isVeg": true }
      ]
    },
    {
      "id": 202,
      "name": "Pizza Corner",
      "cuisine": ["Italian", "Fast Food"],
      "rating": 4.1,
      "reviewsCount": 980,
      "deliveryTime": "25-35 mins",
      "costForTwo": 500,
      "location": {
        "area": "Govind Nagar",
        "city": "Kanpur",
        "coordinates": {
          "lat": 26.4490,
          "lng": 80.2980
        }
      },
      "isOpen": true,
      "menu": [
        { "id": 3, "name": "Margherita Pizza", "price": 200, "isVeg": true },
        { "id": 4, "name": "Farmhouse Pizza", "price": 350, "isVeg": true }
      ]
    },
    {
      "id": 203,
      "name": "Burger Hub",
      "cuisine": ["American", "Fast Food"],
      "rating": 4.0,
      "reviewsCount": 670,
      "deliveryTime": "20-30 mins",
      "costForTwo": 300,
      "location": {
        "area": "Rawatpur",
        "city": "Kanpur",
        "coordinates": {
          "lat": 26.4785,
          "lng": 80.2945
        }
      },
      "isOpen": false,
      "menu": [
        { "id": 5, "name": "Chicken Burger", "price": 150, "isVeg": false },
        { "id": 6, "name": "Veg Burger", "price": 120, "isVeg": true }
      ]
    },
    {
      "id": 204,
      "name": "South Spice",
      "cuisine": ["South Indian"],
      "rating": 4.5,
      "reviewsCount": 1500,
      "deliveryTime": "35-45 mins",
      "costForTwo": 350,
      "location": {
        "area": "Arya Nagar",
        "city": "Kanpur",
        "coordinates": {
          "lat": 26.4800,
          "lng": 80.3150
        }
      },
      "isOpen": true,
      "menu": [
        { "id": 7, "name": "Masala Dosa", "price": 120, "isVeg": true },
        { "id": 8, "name": "Idli Sambhar", "price": 80, "isVeg": true }
      ]
    }
  ]
}

export default api;