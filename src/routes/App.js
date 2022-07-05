import "../sass/App.css";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function App() {
  return (
    <main>
      <section>
        <Header />
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default App;
