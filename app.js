const cardData = [
  {
    id: "1",
    price: "205",
    title: "Watch 1",
    description: "This is a sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
    padding: "5px 3px 6px 8px",
  },
  {
    id: "2",
    price: "209",

    title: "Watch  2",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "3",
    price: "215",

    title: "Watch 3",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "4",
    price: "223",

    title: "Watch 4",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "5",
    price: "243",

    title: "Watch 5",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "6",
    price: "263",

    title: "Watch 6",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "7",
    price: "293",

    title: "Watch 7",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "8",
    price: "693",

    title: "Watch 8",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
  {
    id: "9",
    price: "1293",

    title: "Watch 9",
    description: "This is another sample card description.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
    width: "200",
    height: "400",
    border: "1px solid black",
    borderWidth: "0.5px",
    margin: "10px",
  },
];

cardData.forEach(
  ({
    id,
    price,
    title,
    description,
    image,
    width,
    height,
    border,
    borderWidth,
    margin,
    padding,
  }) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.border = border;
    card.style.borderWidth = borderWidth;
    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
    card.style.margin = `${margin}`;
    card.style.float = "left"; // Set the float property to left

    const cardImage = document.createElement("img");
    cardImage.src = image;
    cardImage.alt = title;
    cardImage.classList.add("card-image");
    cardImage.width = width;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
    cardTitle.classList.add("card-title");
    cardTitle.style.padding = padding;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = description;
    cardDescription.classList.add("card-description");
    cardDescription.style.padding = padding;

    const cardId = document.createElement("p");
    cardId.textContent = `ID: ${id}`; // Add an id element

    const cardPrice = document.createElement("p");
    cardPrice.textContent = `Price: $${price}`; // Add a price element

    cardBody.appendChild(cardTitle);

    cardBody.appendChild(cardId); // Append the id element
    cardBody.appendChild(cardPrice); // Append the price element

    cardBody.appendChild(cardDescription);

    card.appendChild(cardImage);
    card.appendChild(cardBody);

    document.body.appendChild(card);
  }
);
