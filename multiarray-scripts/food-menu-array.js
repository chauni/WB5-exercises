let menu = [
    [
        {item: "Sausage and Egg Biscuit", price: 3.69},
        {item: "Bacon and Egg Biscuit", price: 3.49},
        {item: "Ham and Egg Biscuit", price: 3.29}
    ],
    [
        {item: "Chicken Sandwich", price: 4.49},
        {item: "Meatball Sub", price: 4.49},
        {item: "Nachos", price: 6.29},
        {item: "Shrimp Tacos", price: 4.49}
    ],
    [
        {item: "Spaghetti", price: 6.69},
        {item: "Baked Salmon", price: 8.49},
        {item: "Steak", price: 10.29},
        {item: "Rack of Ribs", price: 14.99},
        {item: "Margherita Pizza", price: 12.29}
    ]
]

const menuIndex = 2
const menuOptions = ["Breakfast", "Lunch", "Dinner"]
console.log(menuOptions[menuIndex], "menu")

menu[menuIndex].forEach((meal) => {
    console.log(meal.item)
})
