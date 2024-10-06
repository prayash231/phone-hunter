const phone = {
    brand: 'Apple ', 
    phone_name: 'iPhone 13 mini', 
    slug: 'apple_iphone_13_mini-11104', 
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg'
}

// const brand = phone.brand;
// console.log(brand);

// const slug = phone.slug;
// console.log(slug);

/* object destructuring */
const {brand, image, slug} = phone;
console.log(slug);