class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}




class ShoppingCart {
    constructor() {
        this.items = []; // Array to store ShoppingCartItem instances
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        // Check if the product already exists in the cart
        const existingItemIndex = this.items.findIndex(item => item.product.id === product.id);
        if (existingItemIndex >= 0) {
            // If the product exists, update the quantity
            this.items[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add a new item
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }


    