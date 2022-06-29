import { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
//componente que nos permite generar hipervinculos para navegar entre rutas
import { Link } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [category, setCategory] = useState("");

  //de esta forma podemos acceder a las funciones del contexto para ya sea almacenar los datos, actualizarlos u obtenerlos
  const store = useAppContext();
  const navigate = useNavigate();

  //estilos
  const inputStyle = {
    formContainer: {
      width: "400px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "0px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  const buttonStyle = {
    padding: "15px 20px",
    minWidth: "200px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#009296",
    color: "white",
    fontWeigth: "bolder",
    fontSize: "18px",
  };

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "category":
        setCategory(value);
        break;

      case "completed":
        setCompleted(e.target.checked);
        break;

      default:
    }
  }
  //procesar una imagen desde el front. guardamos de forma local la información
  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    //Api para manipular archivos desde el navegador
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      category,
    };

    //registrar libro utilizando el hook de useContext
    store.createItem(newBook);
    //vovler al inicio despues de crear el libro correctamente
    navigate("/");
  }

  return (
    <div>
      <Layout>
        <form onSubmit={handleSubmit} style={inputStyle.formContainer}>
          <div style={inputStyle.container}>
            <div style={inputStyle.title}>Titulo</div>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
              style={inputStyle.input}
            />
          </div>

          <div style={inputStyle.container}>
            <div style={inputStyle.title}>Autor</div>
            <input
              type="text"
              name="author"
              onChange={handleChange}
              value={author}
              style={inputStyle.input}
            />
          </div>

          <div style={inputStyle.container}>
            <div style={inputStyle.title}>Portada</div>
            <input
              type="file"
              name="cover"
              onChange={handleOnChangeFile}
              style={inputStyle.input}
            />
            <div>
              {!!cover ? (
                <img src={cover} width="200" alt="vista previa" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div style={inputStyle.container}>
            <div style={inputStyle.title}>Introducción</div>
            <input
              type="text"
              name="intro"
              onChange={handleChange}
              value={intro}
              style={inputStyle.input}
            />
          </div>

          <div style={inputStyle.container}>
            <div style={inputStyle.title}>Categoria</div>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              value={category}
              style={inputStyle.input}
            />
          </div>
          <div>
            <div style={inputStyle.title}>Publicado</div>
            <input
              type="checkbox"
              name="completed"
              onChange={handleChange}
              value={completed}
            />
          </div>
          <input type="submit" value="Registrar libro" style={buttonStyle} />
        </form>
      </Layout>
    </div>
  );
}
