import "./CategoryPage.css";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import CardItem from "../../components/CardItem/CardItem";


const CategoryPage = () => {
  const { categoryId } = useParams();
  const { itemsData, getItemsCategory } = useContext(ItemsContext);

  useEffect(() => {
    getItemsCategory(categoryId);
  }, [categoryId, getItemsCategory]); 

  return (     
    <div className="container-fluid contenedor">
      <section className="row">
          {itemsData.map((item) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center cardItems" key={item.id} > 
                <Link to={`/itemDetail/${item.id}`} style={{textDecoration: "none" , color: "black"}}>
                  <CardItem itemData={item}/>    
                </Link>      
              </div>
            );
          })}
      </section>
    </div>
  )
}

export default CategoryPage