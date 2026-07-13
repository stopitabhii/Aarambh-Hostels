import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar          from './components/Navbar';
import Footer          from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home            from './pages/Home';
import BranchPage      from './pages/BranchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/hostels/:id" element={<BranchPage type="hostel" />} />
        <Route path="/pgs/:id"     element={<BranchPage type="pg"     />} />
        <Route path="/cafes/:id"   element={<BranchPage type="cafe"   />} />
      </Routes>
      <Footer />
      <FloatingActions />
      <div className="h-16 md:hidden" aria-hidden="true" />
    </BrowserRouter>
  );
}