const foodItem= [
    {
    id: 1,
    name: 'Chicken Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 250,
    img: 'Images/Biryani/Biryani.png',
    quantity: 1
},
{
    id: 2,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 280,
    img: 'Images/Biryani/Chicken Biryani.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 290,
    img: 'Images/Biryani/Mughlai biryani.jpg',
    quantity: 1
},
{
    id: 4,
    name: 'Vegetable Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 180,
    img: 'Images/Biryani/veg biryani.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 300,
    img: 'Images/Biryani/mutton biryani.jpg',
    quantity: 1
},
{
    id: 10,
    name: 'Chicken Tikka Masala',
    category : 'chicken',
    rating : 4.3,
    price: 220,
    img: 'Images/Chicken/Chicken_Tikka_Masala_0.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.3,
    price: 200,
    img: 'Images/Chicken/chicken curry.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Chicken Korma',
    category : 'chicken',
    rating : 4.3,
    price: 230,
    img: 'Images/Chicken/Chicken-Korma.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Butter Chicken',
    category : 'chicken',
    rating : 4.3,
    price: 240,
    img: 'Images/Chicken/butter-chicken.png',
    quantity: 1
},
{
    id: 14,
    name: 'Chicken Shawarma',
    category : 'chicken',
    rating : 4.3,
    price: 180,
    img: 'Images/Chicken/shawarma.webp',
    quantity: 1
},
{
    id: 16,
    name: 'Paneer Tikka',
    category : 'paneer',
    rating : 4.3,
    price: 180,
    img: 'Images/Paneer/paneer tikka.avif',
    quantity: 1

},
{
    id: 17,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 190,
    img: 'Images/Paneer/palak-paneer.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.3,
    price: 200,
    img: 'Images/Paneer/paneer butter masala.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'Paneer Tikka Masala',
    category : 'paneer',
    rating : 4.3,
    price: 210,
    img: 'Images/Paneer/Paneer-Tikka-Masala.jpg',
    quantity: 1

},
{
    id: 20,
    name: 'Shahi Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 220,
    img: 'Images/Paneer/shahi paneer.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.3,
    price: 160,
    img: 'Images/veg/Navratan-Korma.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Aloo Gobi',
    category : 'vegetable',
    rating : 4.3,
    price: 140,
    img: 'Images/veg/Aloo-Gobi.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Chana Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 150,
    img: 'Images/veg/chana-masala.webp',
    quantity: 1
},
{
    id: 26,
    name: 'Baingan Bharta',
    category : 'vegetable',
    rating : 4.3,
    price: 170,
    img: 'Images/veg/Baingan-Bharta.jpg',
    quantity: 1
},
{
    id: 27,
    name: 'Bhindi Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 160,
    img: 'Images/veg/bhindi_masala.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Momos',
    category : 'chinese',
    rating : 4.3,
    price: 150,
    img: 'Images/Chinese/momos.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Chicken Manchurian',
    category : 'chinese',
    rating : 4.3,
    price: 180,
    img: 'Images/Chinese/chicken manchuria.jpg',
    quantity: 1
},
{
    id: 34,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.3,
    price: 100,
    img: 'Images/Chinese/spring rolls.webp',
    quantity: 1
},
{
    id: 35,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 160,
    img: 'Images/Chinese/schezwan chicken.jpg',
    quantity: 1
},
{
    id: 36,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.3,
    price: 120,
    img: 'Images/Chinese/fried rice.jpg',
    quantity: 1
},
{
    id: 37,
    name: 'Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 90,
    img: 'Images/southern/masala dosa.png',
    quantity: 1
},
{
    id: 38,
    name: 'Idli Sambhar',
    category : 'south indian',
    rating : 4.3,
    price: 80,
    img: 'Images/southern/Idli-and-Sambar.jpg',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 100,
    img: 'Images/southern/onion utappam.webp',
    quantity: 1
},
{
    id: 42,
    name: 'Pongal',
    category : 'south indian',
    rating : 4.3,
    price: 95,
    img: 'Images/southern/pongal.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'south indian',
    rating : 4.3,
    price: 90,
    img: 'Images/southern/sambhar vada.jpg',
    quantity: 1
},
]

export {foodItem};