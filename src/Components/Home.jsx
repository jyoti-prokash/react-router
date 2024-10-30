import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "../footer";

const Home = () => {
    return (
        <div>
                <Header></Header>
                <h1>This is Home Section</h1>
                <Outlet></Outlet>
                <Footer></Footer>
                
        </div>
    );
};

export default Home;