var Grocery = /** @class */ (function () {
    function Grocery() {
    }
    return Grocery;
}());
;
var bread = new Grocery();
bread.brand = "L'oven";
bread.name = "Fresh 100% Whole Wheat Bread";
bread.quantity = 3;
bread.price = 0.89;
var milk = new Grocery();
milk.brand = "Friendly Farms";
milk.name = "2% Reduced Fat Lactose-Free Milk";
milk.quantity = 6;
milk.price = 3.09;
var eggs = new Grocery();
eggs.brand = "Friendly Farms";
eggs.name = "2% Reduced Fat Lactose-Free eggs";
eggs.quantity = 12;
eggs.price = 3.09;
var tofu = new Grocery();
tofu.brand = "Earth Grown";
tofu.name = "Extra Firm Organic Tofu";
tofu.quantity = 4;
tofu.price = 1.65;
var groceries = [milk, bread, eggs, tofu];
for (var i = 0; i < groceries.length; i++) {
    document.write("Item" + i + groceries[i] + "<br>");
}
