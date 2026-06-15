const ProductCard = () => {
    const Product = {
        Name:"Delsey Suitcase",
        Price:6999,
        Category:"Travel & Luggage",
        Description:"Compact travel companion with style and bold color option"
    };

    return (
        <>
        <div>
            <h2>Product Card</h2>
            <h3>Product Name : {Product.Name}</h3>
            <h3>Product Price : {Product.Price}</h3>
            <h3>Product Category : {Product.Category}</h3>
            <h3>Institute Description : {Product.Description}</h3>

        </div>
        </>
    )
}
export default ProductCard