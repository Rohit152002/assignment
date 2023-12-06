import Product from "./Product";
import './Product_list.css'
function Product_list(){
return (
    <div className="list">
        <Product title="Denim Jean" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fI54sY0JG-BGfffsPB9O74NrEV5FEqGILjVosCnQOO9-8iQINfKbczspIu4U7CQteEU&usqp=CAU" price='2300'></Product>
        <Product title="Iphone 15pro " url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcYz0gGtcOXc55Cb4N1Q4aNjuZmbHj6HrOg&usqp=CAU" price='90900'></Product>
        <Product title="LG TV" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuVHE2vkuT4t1I98sykGFq2hNMH5D4gzeMg&usqp=CAU" price='2300'></Product>
    </div>
)
}

export default Product_list;