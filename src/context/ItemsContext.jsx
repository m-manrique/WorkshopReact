import { createContext, useState, useEffect } from "react";

export const ItemsContext = createContext();

// FIREBASE
import { db } from "../firebase/firebaseConfig";
import { query, collection, getDocs, where, documentId } from "firebase/firestore";

export const ItemsProvider = ({children}) => {
  const [itemsData, setItemsData] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const q = query(collection(db, "items"));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItemsData(docs);
  };

  const getItemsCategory = async (categoryId) => {
    const q = query(collection(db, "items"), where("category", "==", categoryId));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setItemsData(docs);
  };  
  
  const getItem = async (id) => {
    const q = query(collection(db, "items"), where(documentId(), "==", id));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    }); 
    setItemsData(docs);
  };

  const getCompras = async () => {
      const comprasCollection = collection(db, 'compras');
      const comprasSnapshot = await getDocs(comprasCollection);
      const comprasData = comprasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompras(comprasData);
    } ;

  const validarCantidad = (cantidad) => {
    return Math.max(cantidad, 0);
  };

  const onCantidadChange = (newCantidad) => {
    setCantidad(newCantidad);
  };

  const handleIncremento = () => {
    onCantidadChange(validarCantidad(cantidad + 1));
  };

  const handleDecremento = () => {
    onCantidadChange(validarCantidad(cantidad - 1));
  };

  const agregarAlCarrito = (item, cantidad) => {
    const itemExistente = carrito.find((carritoItem) => carritoItem.item.id === item.id);
  
    if (itemExistente) {
      const nuevoCarrito = carrito.map((carritoItem) =>
        carritoItem.item.id === item.id
          ? {
              ...carritoItem,
              cantidad: carritoItem.cantidad + cantidad,
              precioTotal: (carritoItem.cantidad + cantidad) * carritoItem.item.price,
            }
          : carritoItem
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { item, cantidad, precioTotal: cantidad * item.price }]);
    }
  };

  const eliminarDelCarrito = (itemId) => {
    const nuevoCarrito = carrito.filter((carritoItem) => carritoItem.item.id !== itemId);
    setCarrito(nuevoCarrito);
  };

  const eliminarCarrito = () => {
    setCarrito([]);
  };

  return (
    <ItemsContext.Provider value={{ itemsData, getItems, getItemsCategory, getItem, cantidad, validarCantidad, handleIncremento, handleDecremento, onCantidadChange, carrito, agregarAlCarrito, eliminarDelCarrito, eliminarCarrito, getCompras, compras}}>
      {children}
    </ItemsContext.Provider>
  )
}