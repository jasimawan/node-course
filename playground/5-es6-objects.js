// object property shorthand
const name = 'Jasim'
const userAge = '23'

const user = {
    name,
    age: userAge,
    location: 'islamabad'
}
console.log(user)

// object destructuring

const product = {
    label: 'Red Book',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.5
}
// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel,stock, rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)