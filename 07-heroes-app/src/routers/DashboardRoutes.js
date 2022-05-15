import React from 'react'
import { Route, Router, Routes ,  Navigate} from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from '../components/hero/HeroScreen';

const DashboardRoutes = () => {
  return (
    <>

        <Navbar />
          <Routes>
            
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="hero" element={<HeroScreen />} />
            <Route path="/" element={<MarvelScreen />} />
          </Routes>

    </>
  )
}

export default DashboardRoutes