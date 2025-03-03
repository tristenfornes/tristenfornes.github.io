// Create a Pizza class with 6 attributes and a getSection() method
class Pizza {
    constructor(name, image, description, price, ingredients, rating) {
      this.name = name;
      this.image = image;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
      this.rating = rating;
    }
  
    // Returns an HTML section that includes the title and image
    getSection() {
      return `
        <div class="pizza-box" onclick="openModal('${this.name}')">
          <img src="${this.image}" alt="${this.name}" />
          <h3>${this.name}</h3>
        </div>
      `;
    }
  }
  
  // Create an array of at least 5 Pizza instances
  const pizzas = [
    new Pizza(
      "Hawaiian",
      "images/hawaiian.png",
      "A tropical blend of ham and pineapple on a tomato base.",
      "$12.99",
      "Ham, Pineapple, Mozzarella, Tomato Sauce",
      "4.5 / 5"
    ),
    new Pizza(
      "Buffalo Chicken Ranch",
      "images/buffalo.png",
      "Spicy buffalo chicken with ranch drizzle.",
      "$14.50",
      "Chicken, Buffalo Sauce, Ranch, Onions, Mozzarella",
      "4 / 5"
    ),
    new Pizza(
      "Margarita",
      "images/Margarita.png",
      "Classic margarita with fresh tomatoes and basil.",
      "$10.99",
      "Tomatoes, Mozzarella, Basil, Olive Oil, Tomato Sauce",
      "4.2 / 5"
    ),
    new Pizza(
      "Pepperoni",
      "images/pepperoni.png",
      "Traditional pepperoni loaded with cheese.",
      "$11.99",
      "Pepperoni, Mozzarella, Tomato Sauce",
      "4.7 / 5"
    ),
    new Pizza(
      "Veggie",
      "images/veggie.png",
      "A colorful blend of fresh vegetables.",
      "$13.99",
      "Bell Peppers, Onions, Olives, Mushrooms, Mozzarella",
      "4.3 / 5"
    )
  ];
  
  // Loop through the pizzas and add them to the DOM
  const pizzaListDiv = document.getElementById("pizzaList");
  pizzas.forEach(pizza => {
    pizzaListDiv.innerHTML += pizza.getSection();
  });
  
  // Function to open the modal
  function openModal(pizzaName) {
    const pizza = pizzas.find(p => p.name === pizzaName);
    if (!pizza) return;
  
    // Fill modal details
    document.getElementById("modalPizzaName").textContent = pizza.name;
    document.getElementById("modalPizzaImage").src = pizza.image;
    // Reset and trigger the rotation animation
    const modalImage = document.getElementById("modalPizzaImage");
    modalImage.classList.remove("rotate");
    void modalImage.offsetWidth; // reflow to restart animation
    modalImage.classList.add("rotate");
  
    document.getElementById("modalPizzaDesc").textContent = pizza.description;
    document.getElementById("modalPizzaPrice").textContent = pizza.price;
    document.getElementById("modalPizzaIngredients").textContent = pizza.ingredients;
    document.getElementById("modalPizzaRating").textContent = pizza.rating;
  
    // Show the modal
    document.getElementById("pizzaModal").style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("pizzaModal").style.display = "none";
  }
  