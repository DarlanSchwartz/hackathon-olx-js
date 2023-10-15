import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncePage from './Pages/Announce.page.jsx'
import ApplicationContext from './AppContext.js';
import Header from './Components/Header.component.jsx';
import BuyerStatus from './Pages/BuyerStatus.page.jsx';
import RegisterVehiclePage from './Pages/RegisterVehicle.page.jsx';
import Home from './Pages/Home.jsx';
import MyAnnouncesPage from './Pages/MyAnnounces.page.jsx';
import SaleStatusSeller from './Pages/SaleStatusSeller.jsx';
import QRCodePage from './Pages/QRCode.page.jsx';
import Compliance from './Pages/Compliance.page.jsx';

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
        "/PhotoTips/tip-photo-1 (3).png",
        "/PhotoTips/tip-photo-1 (5).png",
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
          <Route path="/status-buyer" element={<BuyerStatus />} />
          <Route path="/register" element={<RegisterVehiclePage />} />
          <Route path="/my-announces" element={<MyAnnouncesPage />} />
          <Route path="/status-seller" element={<SaleStatusSeller />} />
          <Route path="/qr-code-pay" element={<QRCodePage />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </BrowserRouter>
    </ApplicationContext.Provider>

  )
}

