// Escribe tu código aquí:
function Product (name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
}
const producto1 = new Product('Laptop', 999.99, 5)
const producto2 = new Product('Phone', 599.99, 10)

console.log(producto1)
console.log(producto2)
