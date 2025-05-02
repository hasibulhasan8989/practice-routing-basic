import { Outlet,  useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { ClipLoader } from "react-spinners";




const Home = () => {
  const navigation=useNavigation()
  
  console.log(location)
  
    return (
        <div className=" flex flex-col justify-center items-center space-y-6">
          <Nav></Nav> 
          {
             navigation.state === "loading" ?<div>
              <ClipLoader
             color={'#D84040'}
             size={150}
             aria-label="Loading Spinner"
             data-testid="loader"
           />
             </div> : <Outlet></Outlet>
          }
          
          <Footer></Footer>  
        </div>
    );
};

export default Home;