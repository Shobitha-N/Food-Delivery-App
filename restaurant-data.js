const restaurants = [
    {
        id: 1,
        name: "Pizza Hut",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        rating: 4.3,
        deliveryTime: 30,
        priceForTwo: 600,
        bannerImage: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
        menu: {
            "Bestsellers": [
                {
                    id: "b1",
                    name: "Margherita Pizza",
                    description: "Classic delight with 100% real mozzarella cheese",
                    price: 299,
                    image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
                    rating: 4.5,
                    isVeg: true,
                    isBestseller: true
                },
                {
                    id: "b2",
                    name: "Pepperoni Pizza",
                    description: "American classic with spicy pepperoni & cheese",
                    price: 399,
                    image: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg",
                    rating: 4.3,
                    isVeg: false,
                    isBestseller: true
                }
            ],
            "Veg Pizza": [
                {
                    id: "v1",
                    name: "Veggie Supreme",
                    description: "Black olives, capsicum, mushroom, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
                    price: 549,
                    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
                    rating: 4.6,
                    isVeg: true
                },
                {
                    id: "v2",
                    name: "Double Cheese",
                    description: "Extra cheese on cheese",
                    price: 349,
                    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
                    rating: 4.4,
                    isVeg: true
                }
            ],
            "Non-Veg Pizza": [
                {
                    id: "nv1",
                    name: "Chicken Supreme",
                    description: "Loaded with chicken tikka, chicken pepperoni and chicken sausage",
                    price: 599,
                    image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
                    rating: 4.4,
                    isVeg: false
                },
                {
                    id: "nv2",
                    name: "Meat Lovers",
                    description: "Chicken pepperoni, chicken sausage, chicken tikka, grilled chicken rashers",
                    price: 649,
                    image: "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg",
                    rating: 4.5,
                    isVeg: false
                }
            ],
            "Sides": [
                {
                    id: "s1",
                    name: "Garlic Breadsticks",
                    description: "Freshly baked breadsticks with garlic spread & herbs",
                    price: 169,
                    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
                    rating: 4.3,
                    isVeg: true
                },
                {
                    id: "s2",
                    name: "Chicken Wings",
                    description: "Spicy chicken wings with special sauce",
                    price: 249,
                    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
                    rating: 4.4,
                    isVeg: false
                }
            ],
            "Beverages": [
                {
                    id: "bv1",
                    name: "Pepsi",
                    description: "500ml",
                    price: 60,
                    image: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg",
                    rating: 4.2,
                    isVeg: true
                },
                {
                    id: "bv2",
                    name: "Mineral Water",
                    description: "1 liter",
                    price: 40,
                    image: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg",
                    rating: 4.1,
                    isVeg: true
                }
            ]
        }
    },
    {
        id: 2,
        name: "La Piazza Italian Restaurant",
        cuisines: ["Italian", "Pizza", "Pasta"],
        rating: 4.5,
        reviews: 500,
        deliveryTime: "25-30",
        distance: 2.5,
        priceForTwo: "₹₹",
        bannerImage: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
        fssaiLicense: "12345678901234",
        address: "123 Italian Street, Food District, City - 400001",
        openingHours: {
            open: "11:00",
            close: "23:00"
        },
        hygieneRating: 4.5,
        type: "Non-veg",
        reviewStats: {
            overall: 4.5,
            food: 4.3,
            delivery: 4.6,
            packaging: 4.4
        },
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
                comment: "Amazing food! The pasta was perfectly cooked and the service was quick.",
                date: "2024-02-15",
                likes: 12
            },
            {
                name: "Sarah Smith",
                rating: 4.0,
                comment: "Great Italian food, but delivery was a bit delayed.",
                date: "2024-02-14",
                likes: 8
            }
        ],
        offers: [
            {
                title: "50% OFF up to ₹100",
                description: "Use code WELCOME50",
                icon: "percent"
            },
            {
                title: "20% OFF up to ₹200",
                description: "Pay with HDFC Bank Cards",
                icon: "credit-card"
            }
        ],
        menu: {
            recommended: [
                {
                    id: "p1",
                    name: "Margherita Pizza",
                    description: "Fresh tomatoes, mozzarella cheese, basil leaves, olive oil, and our special pizza sauce",
                    price: 299,
                    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
                    isVeg: true,
                    rating: 4.8,
                    ratingCount: 245,
                    customization: ["Size", "Extra Cheese", "Toppings"],
                    tags: ["Bestseller", "Must Try"]
                },
                {
                    id: "p2",
                    name: "Pepperoni Pizza",
                    description: "Classic pepperoni with mozzarella cheese and pizza sauce",
                    price: 399,
                    image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg",
                    isVeg: false,
                    rating: 4.6,
                    ratingCount: 189,
                    customization: ["Size", "Extra Cheese", "Toppings"],
                    tags: ["Spicy", "Popular"]
                }
            ],
            starters: [
                {
                    id: "s1",
                    name: "Garlic Bread",
                    description: "Freshly baked bread with garlic butter and herbs",
                    price: 149,
                    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
                    isVeg: true,
                    rating: 4.5,
                    ratingCount: 156,
                    tags: ["Quick Bite"]
                },
                {
                    id: "s2",
                    name: "Bruschetta",
                    description: "Grilled bread rubbed with garlic, topped with tomatoes, olive oil, and basil",
                    price: 199,
                    image: "https://images.pexels.com/photos/2228539/pexels-photo-2228539.jpeg",
                    isVeg: true,
                    rating: 4.3,
                    ratingCount: 122
                },
                {
                    id: "s3",
                    name: "Calamari Fritti",
                    description: "Crispy fried squid rings served with marinara sauce",
                    price: 349,
                    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
                    isVeg: false,
                    rating: 4.4,
                    ratingCount: 98,
                    tags: ["Chef's Special"]
                }
            ],
            pasta: [
                {
                    id: "m1",
                    name: "Spaghetti Carbonara",
                    description: "Classic carbonara with eggs, pecorino cheese, guanciale, and black pepper",
                    price: 349,
                    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
                    isVeg: false,
                    rating: 4.7,
                    ratingCount: 205,
                    customization: ["Spice Level", "Extra Cheese"],
                    tags: ["Bestseller"]
                },
                {
                    id: "m2",
                    name: "Penne Arrabbiata",
                    description: "Spicy tomato sauce with garlic, red chili, and fresh basil",
                    price: 299,
                    image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
                    isVeg: true,
                    rating: 4.5,
                    ratingCount: 178,
                    customization: ["Spice Level", "Extra Cheese"],
                    tags: ["Spicy", "Popular"]
                },
                {
                    id: "m3",
                    name: "Fettuccine Alfredo",
                    description: "Creamy sauce with parmesan cheese and butter",
                    price: 379,
                    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
                    isVeg: true,
                    rating: 4.6,
                    ratingCount: 145,
                    customization: ["Extra Cheese", "Add Chicken"],
                    tags: ["Creamy"]
                }
            ],
            desserts: [
                {
                    id: "d1",
                    name: "Tiramisu",
                    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
                    price: 249,
                    image: "https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg",
                    isVeg: true,
                    rating: 4.9,
                    ratingCount: 234,
                    tags: ["Must Try", "Bestseller"]
                },
                {
                    id: "d2",
                    name: "Panna Cotta",
                    description: "Vanilla cream dessert with berry compote",
                    price: 199,
                    image: "https://images.pexels.com/photos/6163262/pexels-photo-6163262.jpeg",
                    isVeg: true,
                    rating: 4.4,
                    ratingCount: 156
                }
            ]
        }
    },
    {
        id: 3,
        name: "Dragon Wok",
        cuisines: ["Chinese", "Asian", "Sushi"],
        rating: 4.3,
        reviews: 350,
        deliveryTime: "35-40",
        distance: 3.0,
        priceForTwo: "₹₹",
        bannerImage: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
        fssaiLicense: "23456789012345",
        address: "456 Asian Avenue, Food District, City - 400001",
        openingHours: {
            open: "12:00",
            close: "23:00"
        },
        hygieneRating: 4.4,
        type: "Non-veg",
        reviewStats: {
            overall: 4.3,
            food: 4.4,
            delivery: 4.2,
            packaging: 4.3
        },
        reviews: [
            {
                name: "Mike Chen",
                rating: 4.5,
                comment: "Authentic Chinese flavors! Loved the dim sum.",
                date: "2024-02-15",
                likes: 15
            },
            {
                name: "Lisa Wang",
                rating: 4.0,
                comment: "Good food but portions could be bigger.",
                date: "2024-02-13",
                likes: 7
            }
        ],
        offers: [
            {
                title: "30% OFF up to ₹150",
                description: "Use code ASIAN30",
                icon: "percent"
            }
        ],
        menu: {
            recommended: [
                {
                    id: "dw1",
                    name: "Kung Pao Chicken",
                    description: "Spicy diced chicken with peanuts and vegetables",
                    price: 299,
                    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
                    isVeg: false,
                    rating: 4.6,
                    ratingCount: 189,
                    customization: ["Spice Level", "Extra Sauce"],
                    tags: ["Spicy", "Bestseller"]
                }
            ],
            starters: [
                {
                    id: "dw2",
                    name: "Spring Rolls",
                    description: "Crispy vegetable spring rolls with sweet chili sauce",
                    price: 199,
                    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
                    isVeg: true,
                    rating: 4.4,
                    ratingCount: 167,
                    tags: ["Quick Bite"]
                },
                {
                    id: "dw3",
                    name: "Dim Sum Platter",
                    description: "Assorted steamed dumplings with dipping sauces",
                    price: 349,
                    image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg",
                    isVeg: false,
                    rating: 4.7,
                    ratingCount: 203,
                    tags: ["Must Try"]
                }
            ],
            mainCourse: [
                {
                    id: "dw4",
                    name: "Schezwan Noodles",
                    description: "Spicy stir-fried noodles with vegetables",
                    price: 249,
                    image: "https://images.pexels.com/photos/1087906/pexels-photo-1087906.jpeg",
                    isVeg: true,
                    rating: 4.3,
                    ratingCount: 145,
                    customization: ["Spice Level", "Add Chicken"],
                    tags: ["Spicy"]
                },
                {
                    id: "dw5",
                    name: "Sweet and Sour Pork",
                    description: "Crispy pork in tangy sweet and sour sauce",
                    price: 329,
                    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
                    isVeg: false,
                    rating: 4.5,
                    ratingCount: 178,
                    tags: ["Chef's Special"]
                }
            ],
            sushi: [
                {
                    id: "dw6",
                    name: "California Roll",
                    description: "Crab stick, avocado, and cucumber roll",
                    price: 399,
                    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
                    isVeg: false,
                    rating: 4.8,
                    ratingCount: 234,
                    tags: ["Premium", "Bestseller"]
                }
            ]
        }
    },
    {
        id: 4,
        name: "Tandoori Nights",
        cuisines: ["North Indian", "Mughlai", "Biryani"],
        rating: 4.6,
        reviews: 750,
        deliveryTime: "30-35",
        distance: 1.8,
        priceForTwo: "₹₹₹",
        bannerImage: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        fssaiLicense: "34567890123456",
        address: "789 Spice Road, Food District, City - 400001",
        openingHours: {
            open: "11:00",
            close: "23:30"
        },
        hygieneRating: 4.6,
        type: "Non-veg",
        reviewStats: {
            overall: 4.6,
            food: 4.7,
            delivery: 4.5,
            packaging: 4.6
        },
        reviews: [
            {
                name: "Rahul Sharma",
                rating: 5.0,
                comment: "Best butter chicken in town! Quick delivery too.",
                date: "2024-02-16",
                likes: 25
            },
            {
                name: "Priya Patel",
                rating: 4.5,
                comment: "Delicious biryani and great portion size.",
                date: "2024-02-14",
                likes: 18
            }
        ],
        offers: [
            {
                title: "40% OFF up to ₹200",
                description: "Use code SPICY40",
                icon: "percent"
            },
            {
                title: "Free Delivery",
                description: "On orders above ₹499",
                icon: "truck"
            }
        ],
        menu: {
            recommended: [
                {
                    id: "tn1",
                    name: "Butter Chicken",
                    description: "Tender chicken in rich tomato gravy",
                    price: 399,
                    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
                    isVeg: false,
                    rating: 4.8,
                    ratingCount: 456,
                    customization: ["Spice Level", "Extra Gravy"],
                    tags: ["Bestseller", "Must Try"]
                }
            ],
            starters: [
                {
                    id: "tn2",
                    name: "Tandoori Chicken",
                    description: "Classic tandoor-cooked chicken with spices",
                    price: 349,
                    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
                    isVeg: false,
                    rating: 4.7,
                    ratingCount: 345,
                    customization: ["Full/Half", "Spice Level"],
                    tags: ["Classic"]
                },
                {
                    id: "tn3",
                    name: "Paneer Tikka",
                    description: "Marinated and grilled cottage cheese with vegetables",
                    price: 299,
                    image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg",
                    isVeg: true,
                    rating: 4.6,
                    ratingCount: 289,
                    tags: ["Bestseller"]
                }
            ],
            mainCourse: [
                {
                    id: "tn4",
                    name: "Dal Makhani",
                    description: "Creamy black lentils cooked overnight",
                    price: 299,
                    image: "https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg",
                    isVeg: true,
                    rating: 4.5,
                    ratingCount: 234,
                    customization: ["Extra Butter"],
                    tags: ["Classic"]
                },
                {
                    id: "tn5",
                    name: "Chicken Biryani",
                    description: "Fragrant rice cooked with spiced chicken",
                    price: 449,
                    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
                    isVeg: false,
                    rating: 4.9,
                    ratingCount: 567,
                    customization: ["Spice Level", "Extra Raita"],
                    tags: ["Bestseller", "Spicy"]
                }
            ],
            breads: [
                {
                    id: "tn6",
                    name: "Butter Naan",
                    description: "Soft tandoor-baked bread with butter",
                    price: 49,
                    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
                    isVeg: true,
                    rating: 4.4,
                    ratingCount: 345
                },
                {
                    id: "tn7",
                    name: "Garlic Naan",
                    description: "Naan bread topped with garlic and butter",
                    price: 59,
                    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
                    isVeg: true,
                    rating: 4.5,
                    ratingCount: 234
                }
            ]
        }
    },
    {
        id: 5,
        name: "Sushi Master",
        cuisines: ["Japanese", "Sushi", "Asian"],
        rating: 4.7,
        reviews: 280,
        deliveryTime: "40-45",
        distance: 4.2,
        priceForTwo: "₹₹₹₹",
        menu: {
            recommended: [
                {
                    id: "sm1",
                    name: "Dragon Roll",
                    description: "Shrimp tempura roll topped with avocado",
                    price: 549,
                    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
                    isVeg: false
                }
            ]
        }
    },
    {
        id: 6,
        name: "Mediterranean Delights",
        cuisines: ["Mediterranean", "Greek", "Lebanese"],
        rating: 4.4,
        reviews: 320,
        deliveryTime: "35-40",
        distance: 3.5,
        priceForTwo: "₹₹₹",
        menu: {
            recommended: [
                {
                    id: "md1",
                    name: "Falafel Platter",
                    description: "Crispy falafels with hummus and pita bread",
                    price: 299,
                    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
                    isVeg: true
                }
            ]
        }
    },
    {
        id: 7,
        name: "Taco Fiesta",
        cuisines: ["Mexican", "Tex-Mex"],
        rating: 4.2,
        reviews: 420,
        deliveryTime: "25-30",
        distance: 2.8,
        priceForTwo: "₹₹",
        menu: {
            recommended: [
                {
                    id: "tf1",
                    name: "Street Tacos",
                    description: "Authentic Mexican street tacos",
                    price: 249,
                    image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
                    isVeg: false
                }
            ]
        }
    },
    {
        id: 8,
        name: "Thai Spice",
        cuisines: ["Thai", "Asian"],
        rating: 4.5,
        reviews: 380,
        deliveryTime: "30-35",
        distance: 3.1,
        priceForTwo: "₹₹",
        menu: {
            recommended: [
                {
                    id: "ts1",
                    name: "Pad Thai",
                    description: "Classic Thai noodles with peanuts and lime",
                    price: 299,
                    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
                    isVeg: true
                }
            ]
        }
    },
    {
        id: 9,
        name: "Burger Boulevard",
        cuisines: ["American", "Burgers", "Fast Food"],
        rating: 4.3,
        reviews: 550,
        deliveryTime: "20-25",
        distance: 2.0,
        priceForTwo: "₹₹",
        menu: {
            recommended: [
                {
                    id: "bb1",
                    name: "Classic Cheeseburger",
                    description: "Juicy beef patty with cheese and fresh veggies",
                    price: 249,
                    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
                    isVeg: false
                }
            ]
        }
    },
    {
        id: 10,
        name: "South Indian Express",
        cuisines: ["South Indian", "Dosa", "Idli"],
        rating: 4.4,
        reviews: 620,
        deliveryTime: "20-25",
        distance: 1.5,
        priceForTwo: "₹",
        menu: {
            recommended: [
                {
                    id: "sie1",
                    name: "Masala Dosa",
                    description: "Crispy dosa with potato filling and chutneys",
                    price: 149,
                    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
                    isVeg: true
                }
            ]
        }
    },
    {
        id: 11,
        name: "Persian Palace",
        cuisines: ["Persian", "Middle Eastern"],
        rating: 4.6,
        reviews: 280,
        deliveryTime: "35-40",
        distance: 4.0,
        priceForTwo: "₹₹₹",
        menu: {
            recommended: [
                {
                    id: "pp1",
                    name: "Chicken Kebab Platter",
                    description: "Grilled chicken kebabs with saffron rice",
                    price: 449,
                    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
                    isVeg: false
                }
            ]
        }
    },
    {
        id: 12,
        name: "Healthy Bowls",
        cuisines: ["Healthy", "Salads", "Bowls"],
        rating: 4.5,
        reviews: 320,
        deliveryTime: "20-25",
        distance: 2.3,
        priceForTwo: "₹₹",
        menu: {
            recommended: [
                {
                    id: "hb1",
                    name: "Buddha Bowl",
                    description: "Quinoa, avocado, roasted vegetables, and tahini dressing",
                    price: 349,
                    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
                    isVeg: true
                }
            ]
        }
    },
    {
        id: 13,
        name: "BBQ Nation",
        cuisines: ["BBQ", "Grills", "North Indian"],
        rating: 4.4,
        reviews: 480,
        deliveryTime: "35-40",
        distance: 3.8,
        priceForTwo: "₹₹₹",
        menu: {
            recommended: [
                {
                    id: "bn1",
                    name: "Mixed Grill Platter",
                    description: "Assorted grilled meats with sides",
                    price: 699,
                    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
                    isVeg: false
                }
            ]
        }
    },
    {
        id: 14,
        name: "Dim Sum House",
        cuisines: ["Chinese", "Dim Sum", "Asian"],
        rating: 4.3,
        reviews: 290,
        deliveryTime: "30-35",
        distance: 3.2,
        priceForTwo: "₹₹",
        menu: {
            recommended: [
                {
                    id: "dsh1",
                    name: "Assorted Dim Sum Basket",
                    description: "Selection of steamed dumplings",
                    price: 399,
                    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
                    isVeg: false
                }
            ]
        }
    },
    {
        id: 15,
        name: "Pasta Paradise",
        cuisines: ["Italian", "Pasta", "European"],
        rating: 4.5,
        reviews: 340,
        deliveryTime: "25-30",
        distance: 2.7,
        priceForTwo: "₹₹",
        menu: {
            recommended: [
                {
                    id: "pp1",
                    name: "Truffle Mushroom Pasta",
                    description: "Creamy pasta with truffle and wild mushrooms",
                    price: 449,
                    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
                    isVeg: true
                }
            ]
        }
    },
    {
        id: 16,
        name: "Ice Cream Lab",
        cuisines: ["Desserts", "Ice Cream", "Beverages"],
        rating: 4.7,
        reviews: 620,
        deliveryTime: "15-20",
        distance: 1.9,
        priceForTwo: "₹",
        menu: {
            recommended: [
                {
                    id: "icl1",
                    name: "Nitrogen Ice Cream",
                    description: "Smooth and creamy nitrogen-frozen ice cream",
                    price: 249,
                    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
                    isVeg: true
                }
            ]
        }
    }
]; 