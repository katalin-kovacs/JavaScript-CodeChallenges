const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

function vegetarianMenu(menu) {
  const vegetarianOptions = menu.filter((dish) => dish.isVegetarian === true);
  const menuNode = document.getElementById("menu");

  vegetarianOptions.forEach((dish) => {
    let dishLi = document.createElement("li");
    dishLi.textContent = dish.name;
    menuNode.appendChild(dishLi);
  });
}

vegetarianMenu(menu);
