import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncePage from './Pages/Announce.page.jsx'
import ApplicationContext from './AppContext.js';
import Header from './Components/Header.component.jsx';
import SellerStatus from './Pages/SellerStatus.page.jsx';
import RegisterVehiclePage from './Pages/RegisterVehiclePage.jsx';
import Home from './Pages/Home.jsx';

export default function App() {
  const [cars, setCars] = useState([
    {
      name: "Fiat Uno",
      price: 15000,
      location: "São Paulo - SP",
      createdAt: "Hoje, 21:33",
      description: "Carro em bom estado de conservação, com 4 pneus novos, motor 1.0, 2 portas, com 100.000 km rodados",
      images: [
        "/PhotoTips/tip-photo-1 (4).png",
      ],
    },
  ]);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [showAnnouceButton, setShowAnnounceButton] = useState(true);
  const [showHeaderItems, setShowHeaderItems] = useState(true);

  return (
    <ApplicationContext.Provider value={
      {
        products: cars,
        setProducts: setCars,
        showSearchBar,
        setShowSearchBar,
        setShowHeaderItems,
        setShowAnnounceButton
      }
    }>

      <BrowserRouter>
        <Header show_sb={showSearchBar} show_items={showHeaderItems} show_announce_btn={showAnnouceButton} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<AnnouncePage />} />
          <Route path="/status" element={<SellerStatus />} />
          <Route path="/register" element={<RegisterVehiclePage />} />
        </Routes>
      </BrowserRouter>
    </ApplicationContext.Provider>
  )
}
