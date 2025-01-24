export interface Dish {
    name: string;
    amount: number;
    noofrate: number;
    rating: number;
    image: string; // Assuming `food1`, `food3`, etc., are strings representing image paths or URLs
  }
  
  export interface RestaurantInterface {
    id: number;
    name: string;
    description: string;
    image: string; // Assuming `food1` is a string
    openingTime: number; // Hours in 24-hour format
    closeTime: number; // Hours in 24-hour format
    region: string;
    tags: string[];
    noofrate: number;
    ratings: number;
    isFavourite: boolean;
    isDeliveryNow: boolean;
    timeOfDelivery: string; // Format: "30-45 mins"
    deliveryType: string; // Assuming this is a string representation of cost or type
    dishes: Dish[];
  }
  