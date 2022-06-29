import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import Create from "./pages/create";
import View from "./pages/view";
import Store from "./store/store";

//llamamos a store en el primer nivel para que toda la app tenga acceso a ese componente, store debe estar disponible sin importar en que pagina nos encontremos

function App() {
  return (
    <div>
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="create" element={<Create />} />
            <Route path="view/:bookId" element={<View />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </div>
  );
}

export default App;
