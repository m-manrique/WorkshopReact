import "./ItemDetail.css";
import CardItem from "../CardItem/CardItem";

const ItemDetail = () => {
 
  const itemsData = [
    {
      "id": 1,
      "identificador": 22,
      "title": "Sleek Wireless Headphone & Inked Earbud Set",
      "price": 500,
      "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
      "image": "https://firebasestorage.googleapis.com/v0/b/workshopreact-a69f2.appspot.com/o/id28.jpeg?alt=media&token=52737208-84bd-4063-a95a-2e28b6969a2c",
      "category": "Electronics"
    }
  ];

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