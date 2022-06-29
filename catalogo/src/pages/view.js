import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/store";
import { useState, useEffect } from "react";

export default function View() {
  const [item, setItem] = useState({});
  //obtenemos el id que estamos usando
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  const itemStyles = {
    container: {
      display: "flex",
      gap: "20px",
      color: "black",
      width: "800px",
      margin: "0 auto",
    },
    image:{
        borderRadius: "20px",
    }
  };

  if (!item) {
    return <Layout> Libro no encontrado </Layout>;
  }

  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          <div>{item?.cover ? <img style={itemStyles.image} src={item?.cover} width="300" /> : ""}</div>
        </div>
        <div>
          <h2>{item?.title}</h2>
          <div>Autores: {item?.author}</div>
          <div>Descripción: {item?.intro}</div>
          <div>Estado: {item?.completed ? "Publicado" : "No publicado"}</div>
          <div>Categoria {item?.category}</div>
        </div>
      </div>
    </Layout>
  );
}
