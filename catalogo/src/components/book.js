import { Link } from "react-router-dom";

export default function Book({ item }) {

  const bookContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "black",
    textDecoration: "none",
  };

   const imgStyle = {
    borderRadius: "10px",
  };

  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="200" alt="item.title" style={imgStyle} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
