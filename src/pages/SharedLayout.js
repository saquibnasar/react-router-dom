import { Outlet } from "react-router-dom";
// import Navbar from "../component/Navbar";
import StyledNavbar from "../component/StyledNavbar";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default Home;
