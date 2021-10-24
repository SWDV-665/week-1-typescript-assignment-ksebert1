
class Grocery {
    brand: string;
    name: string;
    price: number;
    quantity: number;
  };

  const bread = new Grocery();
  bread.brand = "L'oven";
  bread.name = "Fresh 100% Whole Wheat Bread";
  bread.quantity = 3;
  bread.price = 0.89;

  const milk = new Grocery();
  milk.brand = "Friendly Farms";
  milk.name = "2% Reduced Fat Lactose-Free Milk";
  milk.quantity = 6;
  milk.price = 3.09;

  const eggs = new Grocery();
  eggs.brand = "Friendly Farms";
  eggs.name = "2% Reduced Fat Lactose-Free eggs";
  eggs.quantity = 12;
  eggs.price = 3.09;

  const tofu = new Grocery();
  tofu.brand = "Earth Grown";
  tofu.name = "Extra Firm Organic Tofu";
  tofu.quantity = 4;
  tofu.price = 1.65;

  var groceries = [milk, bread, eggs, tofu];

  for (let i = 0; i < groceries.length; i++) {
    document.write("<em>Brand:</em> " +  groceries[i].brand + "<br>");
    document.write("<em>Name:</em> " + groceries[i].name + "<br>");
    document.write("<em>Quantity:</em> " +  groceries[i].quantity + "<br>");
    document.write("<em>Price:</em> " +  groceries[i].price + "<br><br>")
  }



