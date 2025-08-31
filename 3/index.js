const products = [
    { id: 1, name: "Apple iPhone 12", category: "Electronics", price: 999 },
    { id: 2, name: "Adidas running shoes", category: "Sportswear", price: 280 },
    { id: 3, name: "Samsung Galaxy S21", category: "Electronics", price: 850 },
    { id: 4, name: "Nike Air Max", category: "Sportswear", price: 300 }
];

const criteria = {
    categories: ["Electronics", "Sportswear"],
    priceRange: { min: 200, max: 1000 },
    nameLength: { min: 10, max: 25 },
    keywords: ["Galaxy", "Air"],
    sortBy: [
        { field: "price", order: "ascending" },
        { field: "name", order: "descending" }
    ]
};

function filterAndSortProducts(products, criteria) {
    let filteredProducts = products.filter((product) => {
        const filterCategory = criteria.categories.includes(product.category);
        const filterPrice = product.price >= criteria.priceRange.min && product.price <= criteria.priceRange.max;
        const filterNameLength = product.name.length >= criteria.nameLength.min && product.name.length <= criteria.nameLength.max;
        const filterKeywords = criteria.keywords.some(keyword => product.name.includes(keyword));

        return filterCategory && filterPrice && filterNameLength && filterKeywords;
    });


    filteredProducts.sort((a, b) => {
        for (const sortOption of criteria.sortBy) {
            const field = sortOption.field;

            let comparison = 0;
            if (a[field] > b[field]) {
                comparison = 1;
            } else if (a[field] < b[field]) {
                comparison = -1;
            }

            return comparison;
        }
    });

    return filteredProducts;

}

const result = filterAndSortProducts(products, criteria);
console.log(result);

module.exports = { filterAndSortProducts };