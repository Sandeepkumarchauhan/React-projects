const restaurants = [
  {
    id: 1,
    name: "Burger King",
    avgRating: 4.2,
    costForTwo: 500,
    deliveryTime: "30 mins",
    promoted: true,
    menu: {
      starters: [
        { name: "Fries", price: 100 },
        { name: "Veg Nuggets", price: 120 },
      ],
      mainCourse: [
        { name: "Whopper", price: 250 },
        { name: "Veg Burger", price: 200 },
      ],
      recommended: [
        { name: "Whopper", price: 250 },
        { name: "Fries", price: 100 },
      ],
    },
  },
  {
    id: 2,
    name: "Dominos",
    avgRating: 4.5,
    costForTwo: 600,
    deliveryTime: "25 mins",
    promoted: false,
    menu: {
      starters: [
        { name: "Garlic Bread", price: 150 },
        { name: "Cheese Sticks", price: 180 },
      ],
      mainCourse: [
        { name: "Veg Extravaganza Pizza", price: 400 },
        { name: "Farmhouse Pizza", price: 380 },
      ],
      recommended: [
        { name: "Veg Extravaganza Pizza", price: 400 },
        { name: "Garlic Bread", price: 150 },
      ],
    },
  },
  {
    id: 3,
    name: "KFC",
    avgRating: 4.1,
    costForTwo: 550,
    deliveryTime: "35 mins",
    promoted: true,
    menu: {
      starters: [
        { name: "Chicken Popcorn", price: 150 },
        { name: "Veg Zinger", price: 180 },
      ],
      mainCourse: [
        { name: "Zinger Burger", price: 220 },
        { name: "Bucket Meal", price: 450 },
      ],
      recommended: [
        { name: "Zinger Burger", price: 220 },
        { name: "Chicken Popcorn", price: 150 },
      ],
    },
  },
  {
    id: 4,
    name: "Pizza Hut",
    avgRating: 4.3,
    costForTwo: 650,
    deliveryTime: "28 mins",
    promoted: false,
    menu: {
      starters: [
        { name: "Paneer Tikka", price: 180 },
        { name: "Veggie Delight", price: 150 },
      ],
      mainCourse: [
        { name: "Margherita Pizza", price: 350 },
        { name: "Peppy Paneer Pizza", price: 400 },
      ],
      recommended: [
        { name: "Peppy Paneer Pizza", price: 400 },
        { name: "Paneer Tikka", price: 180 },
      ],
    },
  },
  {
    id: 5,
    name: "Subway",
    avgRating: 4.0,
    costForTwo: 450,
    deliveryTime: "20 mins",
    promoted: true,
    menu: {
      starters: [
        { name: "Veggie Patty", price: 120 },
        { name: "Chicken Tikka Roll", price: 150 },
      ],
      mainCourse: [
        { name: "Veg Sub", price: 200 },
        { name: "Chicken Sub", price: 250 },
      ],
      recommended: [
        { name: "Chicken Sub", price: 250 },
        { name: "Veggie Patty", price: 120 },
      ],
    },
  },
  {
    id: 6,
    name: "Cafe Coffee Day",
    avgRating: 4.4,
    costForTwo: 400,
    deliveryTime: "15 mins",
    promoted: false,
    menu: {
      starters: [
        { name: "Brownie", price: 120 },
        { name: "Choco Muffin", price: 100 },
      ],
      mainCourse: [
        { name: "Pasta", price: 220 },
        { name: "Veg Sandwich", price: 150 },
      ],
      recommended: [
        { name: "Pasta", price: 220 },
        { name: "Brownie", price: 120 },
      ],
    },
  },
  {
    id: 7,
    name: "McDonald's",
    avgRating: 4.2,
    costForTwo: 500,
    deliveryTime: "25 mins",
    promoted: true,
    menu: {
      starters: [
        { name: "French Fries", price: 100 },
        { name: "Chicken Nuggets", price: 150 },
      ],
      mainCourse: [
        { name: "Big Mac", price: 250 },
        { name: "McVeggie", price: 200 },
      ],
      recommended: [
        { name: "Big Mac", price: 250 },
        { name: "French Fries", price: 100 },
      ],
    },
  },
  {
    id: 8,
    name: "Haldiram's",
    avgRating: 4.6,
    costForTwo: 350,
    deliveryTime: "30 mins",
    promoted: false,
    menu: {
      starters: [
        { name: "Samosa", price: 50 },
        { name: "Paneer Tikka", price: 120 },
      ],
      mainCourse: [
        { name: "Rajma Chawal", price: 150 },
        { name: "Paneer Butter Masala", price: 200 },
      ],
      recommended: [
        { name: "Rajma Chawal", price: 150 },
        { name: "Paneer Tikka", price: 120 },
      ],
    },
  },
  {
    id: 9,
    name: "Biryani Blues",
    avgRating: 4.5,
    costForTwo: 500,
    deliveryTime: "40 mins",
    promoted: true,
    menu: {
      starters: [
        { name: "Chicken 65", price: 180 },
        { name: "Veg Pakora", price: 100 },
      ],
      mainCourse: [
        { name: "Hyderabadi Biryani", price: 400 },
        { name: "Paneer Biryani", price: 350 },
      ],
      recommended: [
        { name: "Hyderabadi Biryani", price: 400 },
        { name: "Chicken 65", price: 180 },
      ],
    },
  },
];

export default restaurants;
