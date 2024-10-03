function productDetails (productName, price, isAvailabe){
    const availability = isAvailabe ? "available" : "not available";
    return `The ${productName} cost $${price}. It is ${availability}.`;
}
console.log(productDetails("laptop", 10, false));