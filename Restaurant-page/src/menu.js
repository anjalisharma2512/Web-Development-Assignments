function loadMenuPage() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("menu-container");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const pizza = document.createElement("div");
    pizza.classList.add("menu-item");

    const pizzaName = document.createElement("h2");
    pizzaName.textContent = "Margherita Pizza";

    const pizzaDescription = document.createElement("p");
    pizzaDescription.textContent = "Fresh tomatoes, mozzarella and basil.";

    const pizzaPrice = document.createElement("p");
    pizzaPrice.textContent = "₹250";

    pizza.appendChild(pizzaName);
    pizza.appendChild(pizzaDescription);
    pizza.appendChild(pizzaPrice);

    const burger = document.createElement("div");
    burger.classList.add("menu-item");

    const burgerName = document.createElement("h2");
    burgerName.textContent = "Classic Burger";

    const burgerDescription = document.createElement("p");
    burgerDescription.textContent = "Juicy burger with fresh vegetables and cheese.";

    const burgerPrice = document.createElement("p");
    burgerPrice.textContent = "₹180";

    burger.appendChild(burgerName);
    burger.appendChild(burgerDescription);
    burger.appendChild(burgerPrice);


    const pasta = document.createElement("div");
    pasta.classList.add("menu-item");

    const pastaName = document.createElement("h2");
    pastaName.textContent = "Creamy Pasta";

    const pastaDescription = document.createElement("p");
    pastaDescription.textContent = "Creamy pasta with herbs and parmesan.";

    const pastaPrice = document.createElement("p");
    pastaPrice.textContent = "₹220";

    pasta.appendChild(pastaName);
    pasta.appendChild(pastaDescription);
    pasta.appendChild(pastaPrice);


    container.appendChild(heading);
    container.appendChild(pizza);
    container.appendChild(burger);
    container.appendChild(pasta);

    content.appendChild(container);
}

export default loadMenuPage;
