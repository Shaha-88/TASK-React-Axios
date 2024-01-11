import { Link, NavLink, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()



function App() {
  return (
    <QueryClientProvider client={queryClient}>
   
 
    <div className="font-mono">
      <Navbar />
      <Outlet />
    </div>
    </QueryClientProvider>
  );
}

export default App;
