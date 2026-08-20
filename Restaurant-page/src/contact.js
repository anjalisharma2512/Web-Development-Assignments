function loadContactPage() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("contact-container");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Main Street Jaipur, Rajasthan";

    const phone = document.createElement("p");
    phone.textContent = "Phone: +91 9876354201";

    const email = document.createElement("p");
    email.textContent = "Email: anjali77425@gmail.com";

    const timing = document.createElement("p");
    timing.textContent = "Opening Hours: 11:00 AM - 10:00 PM";

    container.appendChild(heading);
    container.appendChild(address);
    container.appendChild(phone);
    container.appendChild(email);
    container.appendChild(timing);

    content.appendChild(container);
}

export default loadContactPage;