
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbarhead } from "../components/Navbarhead";


function Home() {
  return (
    <>
      <Navbarhead />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
