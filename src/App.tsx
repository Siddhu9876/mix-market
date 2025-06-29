
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import LoginSignup from "./pages/LoginSignup";
import Admin from "./pages/Admin/Admin";
import AddProduct from "./pages/Admin/Addproduct";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-black">
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/search" element={<Shopping />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LoginSignup />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Addproduct" element={<AddProduct />} />
          </Routes>
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
