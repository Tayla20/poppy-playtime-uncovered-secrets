
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Factory from "./pages/Factory";
import Contact from "./pages/Contact";
import Documents from "./pages/Documents";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Orphanage from "./pages/Orphanage";
import Prison from "./pages/Prison";
import Departments from "./pages/Departments";
import ExecutivePortal from "./pages/ExecutivePortal";
import GameStation from "./pages/GameStation";
import Playcare from "./pages/Playcare";
import SchoolSector from "./pages/SchoolSector";
import PrototypeConversations from "./pages/PrototypeConversations";
import MakeAFriend from "./pages/MakeAFriend";
import ElliotLudwig from "./pages/ElliotLudwig";
import TheDoctor from "./pages/TheDoctor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/executive-portal" element={<ExecutivePortal />} />
          <Route path="/orphanage" element={<Orphanage />} />
          <Route path="/prison" element={<Prison />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/game-station" element={<GameStation />} />
          <Route path="/playcare" element={<Playcare />} />
          <Route path="/school-sector" element={<SchoolSector />} />
          <Route path="/prototype-conversations" element={<PrototypeConversations />} />
          <Route path="/make-a-friend" element={<MakeAFriend />} />
          <Route path="/elliot-ludwig" element={<ElliotLudwig />} />
          <Route path="/the-doctor" element={<TheDoctor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
