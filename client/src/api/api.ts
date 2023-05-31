import axios from "axios";

export const fetchProducts = async () => {
    // const list = await axios.get('http://localhost:5000/products');
    let list;
    await fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>list=data);
    return list;
}