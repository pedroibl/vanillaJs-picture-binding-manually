const cartCount = document.getElementById('cartCount');
const productName = document.getElementById('productName');
const productImage = document.getElementById('productImage');
const stockStatus = document.getElementById('stockStatus');
const productDetails = document.getElementById('productDetails');
const addToCartBtn = document.getElementById('addToCartBtn');
const colorCircles = document.querySelectorAll('.color-circle');

let cart = 0;
let inStock = false;

const variants = [
	{ id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
	{ id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
];

function updateProductDetails() {
	productName.textContent = 'Socks';
	stockStatus.textContent = inStock ? 'In Stock' : 'Out of Stock';
	addToCartBtn.classList.toggle('disabledButton', !inStock);
	addToCartBtn.disabled = !inStock;
}

function updateImage(variantImage) {
	productImage.src = variantImage;
}

function addToCart() {
	if (inStock) {
		cart++;
		cartCount.textContent = cart;
	}
}

function handleColorCircleClick(variant) {
	updateImage(variant.image);
	inStock = true;
	updateProductDetails();
}

function handleColorCircleHover(variant) {
	if (!inStock) return;
	updateImage(variant.image);
}

// Add event listeners to color circles
colorCircles.forEach((circle, index) => {
	const variant = variants[index];
	circle.addEventListener('click', () => handleColorCircleClick(variant));
	circle.addEventListener('mouseover', () => handleColorCircleHover(variant));
});

// Initial setup
updateProductDetails();
cartCount.textContent = cart;
