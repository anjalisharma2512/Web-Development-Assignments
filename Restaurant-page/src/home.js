function loadHomePage() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("home-container");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent = 
            "Enjoy delicious food made with fresh ingredients and lots of love."

    const description = document.createElement("p");
    description.textContent = 
            "Our restaurant offers a warm atmosphere, friendly service, and delicious meal from everyone."

    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(description);

    content.appendChild(container);
}

export default loadHomePage;