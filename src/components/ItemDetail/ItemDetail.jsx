import "./ItemDetail.css";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import { useParams } from "react-router-dom";

import CardItem from "../CardItem/CardItem";

const ItemDetail = () => {
  const { itemsData, getItem } = useContext(ItemsContext);
  const { id } = useParams();

  useEffect(() => {
    getItem(id); 
  }, [id, getItem]); 

  return (     
    <div className="container-fluid contenedor">
      <section className="row">
          {itemsData.map((item) => {
            return (
              <div className="container-fluid detailProduct" key={item.id}>
                  {item.id ? <CardItem itemData={item} detalle={true}/>  : null}  
              </div>
            );
          })}
      </section>
    </div>
  )
}

export default ItemDetail