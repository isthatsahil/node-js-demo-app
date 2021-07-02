const products = []
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save(){
        products.push(this);
    }
    // static keyword make sure we can a method
    // directly from the class without instantiation
    static fetchAll(){
        return products;
    }
}