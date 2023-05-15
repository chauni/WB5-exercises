let cart = [
    { item: 'Bread', price: 3.29, quantity: 2 },
    { item: 'Milk', price: 4.09, quantity: 1 },
    { item: 'T-Bone Steak', price: 12.99, quantity: 2 },
    { item: 'Baking Potato', price: 1.89, quantity: 6 },
    { item: 'Iceberg Lettuce', price: 2.06, quantity: 1 },
    { item: 'Ice Cream - Vanilla', price: 6.81, quantity: 1 },
    { item: 'Apples', price: 0.66, quantity: 6 },
  ];

  //Exercise A

  function getItemNames(name) {
    return name.item
  }

  function displayItemNames(name){
    console.log(name)
  }

  const itemNames = cart.map(getItemNames)

  itemNames.forEach(displayItemNames)

  console.log(itemNames)

  //Exercise B
  console.log('------');

  function totalCostOfItems (total, item) {
    return total + (item.quantity * item.price)
  }

  const totalCost = cart.reduce(totalCostOfItems, 0);
  console.log('Total cost of items:', totalCost)

  //Exercise C
  console.log('------');

  cart.sort(function(a,b){
    if (a.item < b.item) return -1;
    else if (a.item === b.item) return 0;
    else return 1;
  })

  const sortedItems = itemNames.sort();
  sortedItems.forEach(displayItemNames)
  console.log(sortedItems)
