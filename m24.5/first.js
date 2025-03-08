function matchedProducts(products, search) {
    let result = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            result.push(product);
        }
    }
    return result;
}


let products = [
    { id: 1, name: 'nokia Phone', price: 12000 },
    { id: 2, name: 'iphone phone', price: 60000 },
    { id: 3, name: 'vivo phone', price: 25000 },
    { id: 3, name: 'vivo laptop', price: 25000 },
    { id: 4, name: 'one plus Phone', price: 45000 },
    { id: 4, name: 'one plus laptop', price: 45000 },
    { id: 4, name: 'lenvo laptop', price: 85000 },
    { id: 4, name: 'hp laptop', price: 45000 },
    { id: 5, name: 'infin Phone', price: 18000 },
    { id: 6, name: 'blackbary phone', price: 10000 },
    { id: 7, name: 'oppo Phone', price: 34000 },
    { id: 8, name: 'walton phone', price: 8000 },
    { id: 4, name: 'samsung laptop', price: 45000 },
]
console.log(matchedProducts(products,'laptop'));