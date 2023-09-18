class ProductManager {

    constructor() {
        this.Products = [];
    }
    getProduct() {
        return this.Products
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        let product = this.Products.find(prod => prod.code === code)
        if (product) {
            return console.log("ya esta en la lista")
        }else{
              this.Products.push(
            {
                id: this.Products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            })
        
        }console.log("Product added")
      
    }
    getProductById(id) {
        let product = this.Products.find(prod => prod.id === id)
        if (!product) {
            console.log("Product not found")
        }else {
            console.log("product found",product)
        }
    }
}

let productManager = new ProductManager();

console.log("getProduct",productManager.getProduct());

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
console.log(productManager.getProdcuts());

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

productManager.getProductById(4);

console.log("getProduct",productManager.getProduct());