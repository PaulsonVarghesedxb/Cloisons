
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbarhead } from "../components/Navbarhead";


function Home() {
  return (
    <>
      <div className="px-5 py-3 flex-container">
        <div>
          <img
            alt="logo"
            src="logo.jpg"
            style={{
              height: 110,
              width: 190
            }}
          />
        </div>
        <div >
          <ul className='Footetli px-5 py-3'><li className='lihead'>
            Email: contact@thecloisons.com</li>
            <li className='lihead'>
              Tel: +971 5643 88933
            </li>
            {/* <li className='lihead'>
              Tel: 00971 506 562 400
            </li> */}
          </ul>
        </div>
      </div>
      <Navbarhead />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
