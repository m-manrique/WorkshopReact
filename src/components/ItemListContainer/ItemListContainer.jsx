import "./ItemListContainer.css";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../../context/ItemsContext";

import { Link } from "react-router-dom";

import CardItem from "../CardItem/CardItem";

const ItemListContainer = () => {
  const { itemsData, getItems } = useContext(ItemsContext);

  useEffect(() => {
    getItems();
  }, [getItems]);

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

export default ItemListContainer