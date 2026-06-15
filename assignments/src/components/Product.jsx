
const Product = ({data}) => {
    const {name,category,price,brand}= data
    return (
        <div className="bg-cyan-400 flex-col align-middle justify-items-center">
            <h2>Product Data</h2>
            <h3>name:{name}</h3>
            <h3>category:{category}</h3>
            <h3>price:{price}</h3>
            <h3>brand:{brand}</h3>

        </div>
    )
}
export default Product