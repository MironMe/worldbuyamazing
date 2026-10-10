const products = [
  { name: "Retro Walkman", category: "Audio", price: 129, oldPrice: 180, icon: "🎧", badge: "Hot" },
  { name: "Polaroid Camera", category: "Photography", price: 199, oldPrice: 260, icon: "📷", badge: "New" },
  { name: "Arcade Console", category: "Gaming", price: 349, oldPrice: 420, icon: "🕹️", badge: "Rare" },
  { name: "Leather Backpack", category: "Fashion", price: 94, oldPrice: 136, icon: "🎒", badge: "Trend" },
  { name: "Vintage Vinyl", category: "Music", price: 38, oldPrice: 52, icon: "💿", badge: "Top" },
  { name: "Desk Lamp", category: "Home", price: 79, oldPrice: 110, icon: "💡", badge: "Fresh" }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function renderProducts(items) {
  productGrid.innerHTML = "";

  if (!items.length) {
    productGrid.innerHTML = `
      <div class="product-card" style="grid-column: 1 / -1; padding: 20px;">
        <h3 style="margin: 0;">No matching items found</h3>
        <p style="margin: 10px 0 0; color: #d7d0b3;">Try a different keyword like “camera”, “audio”, or “retro”.</p>
      </div>
    `;
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-visual" aria-hidden="true">${product.icon}</div>
      <div class="content">
        <div class="topline">
          <h3>${product.name}</h3>
          <span class="badge">${product.badge}</span>
        </div>
        <div class="meta">
          <span>${product.category}</span>
          <span>Verified</span>
        </div>
        <div class="price-row">
          <div class="price">$${product.price}<small>$${product.oldPrice}</small></div>
          <button type="button" class="cta-mini">Buy</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function filterProducts() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const haystack = `${product.name} ${product.category}`.toLowerCase();
    return haystack.includes(query);
  });

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
searchButton.addEventListener("click", filterProducts);

renderProducts(products);
