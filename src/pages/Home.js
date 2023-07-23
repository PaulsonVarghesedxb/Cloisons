
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbarhead } from "../components/Navbarhead";


function Home() {
  return (
    <>
      <div className="px-5 py-3">
        <img
          alt="logo"
          src="logo.jpg"
          style={{
            height: 110,
            width: 190
          }}
        />
      </div>
      <Navbarhead />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
