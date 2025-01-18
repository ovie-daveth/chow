import food1 from "@/assets/images/food1.jpeg"
import food2 from "@/assets/images/food2.jpeg"
import food3 from "@/assets/images/food3.jpeg"
import food4 from "@/assets/images/food4.jpeg"

import cat1 from "@/assets/images/food1.png"
import cat2 from "@/assets/images/food2.png"
import cat3 from "@/assets/images/food3.png"
import cat4 from "@/assets/images/food4.png"

export const categories = [
    {
      "id": 1,
      "name": "All   ",
      "description": "Delicious cheesy pizzas with various toppings.",
      "image": cat1
    },
    {
      "id": 2,
      "name": "Burgers",
      "description": "Juicy burgers with fresh ingredients and sides.",
      "image": cat2
    },
    {
      "id": 3,
      "name": "Sushi",
      "description": "Fresh sushi rolls, nigiri, and sashimi.",
      "image": cat3
    },
    {
      "id": 4,
      "name": "Pasta",
      "description": "Classic pasta dishes with rich sauces.",
      "image": cat4
    },
    {
      "id": 5,
      "name": "Salads",
      "description": "Healthy and fresh salads with a variety of dressings.",
      "image": cat1
    },
    {
      "id": 6,
      "name": "Desserts",
      "description": "Sweet treats and desserts for every occasion.",
      "image": cat2
    },
    {
      "id": 7,
      "name": "Drinks",
      "description": "Refreshing beverages including juices, sodas, and more.",
      "image": cat3
    },
    {
      "id": 8,
      "name": "Seafood",
      "description": "Delicious seafood dishes with fresh ingredients.",
      "image": cat4
    },
    {
      "id": 9,
      "name": "Steaks",
      "description": "Tender and juicy steaks cooked to perfection.",
      "image": cat1
    },
    {
      "id": 10,
      "name": "Vegetarian",
      "description": "Tasty vegetarian options for a healthy meal.",
      "image": cat2
    }
  ]
  

  export const restaurantsList = [
    {
      id: 1,
      name: "Rose Garden Restaurants",
      description: "Delicious cheesy pizzas with various toppings.",
      image: food1,
      tags: ["burger", "chicken", "wings", "salad"],
      noofrate: 13,
      ratings: 4.5,
      timeOfDelivery: "30-45 mins",
      deliveryType: "From #1,200",
      dishes: [
        { name: "Cheese Pizza", amount: 12.99, noofrate: 102, rating: 4.7, image: food4},
        { name: "BBQ Chicken Wings", amount: 9.99, noofrate: 102, rating: 4.6, image: food3 },
        { name: "Caesar Salad", amount: 8.99, noofrate: 102, rating: 4.3, image: food1}
      ],
    },
    {
      id: 2,
      name: "Ocean Breeze Diner",
      description: "Fresh seafood and coastal cuisine served daily.",
      image: food2,
      tags: ["seafood", "grill", "fish", "lobster"],
      noofrate: 13,
      ratings: 4.7,
      timeOfDelivery: "40-55 mins",
      deliveryType: "#12,000",
      dishes: [
        { name: "Grilled Salmon", amount: 15.99, noofrate: 102, rating: 4.8, image: food1 },
        { name: "Lobster Bisque", amount: 12.49, noofrate: 102, rating: 4.7, image: food2 },
        { name: "Fried Calamari", amount: 10.99, noofrate: 102, rating: 4.5, image: food3 },
      ],
    },
    {
      id: 3,
      name: "Mountain View Cafe",
      description: "Cozy cafe with freshly brewed coffee and pastries.",
      image: food3,
      tags: ["coffee", "pastries", "desserts", "breakfast"],
      noofrate: 1332,
      ratings: 4.3,
      timeOfDelivery: "20-30 mins",
      deliveryType: "Free",
      dishes: [
        { name: "Cappuccino", amount: 4.99, noofrate: 102, rating: 4.6, image: food1 },
        { name: "Blueberry Muffin", amount: 3.49, noofrate: 102, rating: 4.4, image: food4 },
        { name: "Chocolate Croissant", amount: 3.99, noofrate: 102, rating: 4.5, image: food2 },
      ],
    },
    {
      id: 4,
      name: "Spice Route Kitchen",
      description: "Authentic Indian cuisine with bold and rich flavors.",
      image: food4,
      tags: ["curry", "naan", "spicy", "vegetarian"],
      noofrate: 13,
      ratings: 4.8,
      timeOfDelivery: "50-65 mins",
      deliveryType: "Paid",
      dishes: [
        { name: "Butter Chicken", amount: 13.99, noofrate: 102, rating: 4.9, image: food1 },
        { name: "Vegetable Biryani", amount: 10.99, noofrate: 102, rating: 4.8, image: food2 },
        { name: "Garlic Naan", amount: 2.99, noofrate: 102, rating: 4.7, image: food3 }
      ],
    },
    {
      id: 5,
      name: "The Green Bowl",
      description: "Healthy salads and bowls with fresh organic ingredients.",
      image: food3,
      tags: ["salads", "healthy", "vegan", "organic"],
      noofrate: 13,
      ratings: 4.6,
      timeOfDelivery: "25-35 mins",
      deliveryType: "Free",
      dishes: [
        { name: "Quinoa Salad", amount: 9.99, noofrate: 102, rating: 4.7, image: food3},
        { name: "Avocado Toast", amount: 7.49, noofrate: 102, rating: 4.6, image: food1},
        { name: "Berry Smoothie Bowl", amount: 8.99, noofrate: 102, rating: 4.8, image: food4 },
      ],
    },
  ];
  
  

  export const featuredDishes = [
      {
        "id": 1,
        "name": "Cheese Pizza",
        "amount": 12.99,
        "noofrate": 123,
        "rating": 4.7,
        "image": food1,
        "deliveryType": "Free",
        "timeOfDelivery": "20-25min",
        "restaurant": "Rose Garden Restaurants"
      },
      {
        "id": 2,
        "name": "Grilled Salmon",
        "amount": 15.99,
        "noofrate": 123,
        "rating": 4.8,
        "image": food2,
        "deliveryType": "Paid",
        "timeOfDelivery": "20-25min",
        "restaurant": "Ocean Breeze Diner"
      },
      {
        "id": 3,
        "name": "Cappuccino",
        "amount": 4.99,
        "noofrate": 123,
        "rating": 4.6,
        "image": food3,
        "deliveryType": "Free",
        "timeOfDelivery": "20-25min",
        "restaurant": "Mountain View Cafe"
      },
      {
        "id": 4,
        "name": "Butter Chicken",
        "amount": 13.99,
        "noofrate": 123,
        "rating": 4.9,
        "image": food4,
        "deliveryType": "Paid",
        "timeOfDelivery": "20-25min",
        "restaurant": "Spice Route Kitchen"
      },
      {
        "id": 5,
        "name": "Berry Smoothie Bowl",
        "amount": 8.99,
        "noofrate": 123,
        "rating": 4.8,
        "image": food1,
        "deliveryType": "Free",
        "timeOfDelivery": "20-25min",
        "restaurant": "The Green Bowl"
      }
    ]
  