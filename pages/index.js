import styles from '../styles/Home.module.css'
import Products from './products';
import Categories from './categories';
import React, { useEffect, useState } from "react";
const Home=(props)=> {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const getApiData = async () => {
    const categoryResponse = await fetch(
      'https://fakestoreapi.com/products'
    ).then((response) => response.json());
    const productResponse = await fetch(
      'https://fakestoreapi.com/products'
    ).then((response) => response.json());
  
    // update the state
    setProducts(productResponse);
    setCategories(categoryResponse)
    setSelectedCategory(categoryResponse[0]?.category)
  };
  useEffect(() => {
    getApiData();
  }, []);

const onChangeHandler = (selectedCategory) => {
  setSelectedCategory(selectedCategory);
  
}
const productsToDisplay = products?.filter((obj)=> obj.category === selectedCategory);
  return (
    <div >
      <div className={styles.categories} style={{display: 'flex'}}>
       {categories && categories?.map((item)=>
          <Categories data={item} categoryHandler= {onChangeHandler}/>
          )}
          </div>
          <div style={{width:'100%', display:'flex', padding:'10%'}}>
          {productsToDisplay?.map((item)=>
          <Products data={item}/>
          )}
          </div>
          </div>

  )
}
export default Home;
