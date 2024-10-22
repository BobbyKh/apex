import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./pages/home/Welcome";
import Hero from "./pages/home/Hero";
import Events from "./pages/home/Events";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Form from "./pages/booking/Form";
import Tournament from "./pages/tournament/Tournament";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/affiliate/Store";
import Suscribe from "./pages/auth/Suscribe";
import About from "./pages/about/About";
import Team from "./pages/about/Team";
import Footer from "./pages/Footer";
import Live from "./pages/live/Live";
import Topgamer from "./pages/live/Topgamer";
import Product from "./pages/affiliate/Product";
import BrandDetail from "./pages/affiliate/BrandDetail";
import ProductDetail from "./pages/affiliate/ProductDetail";
import SubscriptionForm from "./pages/suscribe/SubscriptionForm";
import Services from "./pages/home/Services";
import Success from "./pages/Success";
import Profile from "./pages/user/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <Hero />
              <Services />
              <Events />
            </>
          }
        />
        <Route path="/hero" element={<Hero />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscribe" element={<Suscribe />} />
        <Route
          path="/profile"
          element={
            <>

              <Profile />
            </>
          }
        />
        <Route path="/brand/:id" element={<BrandDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/form/:planId/:planName" element={<SubscriptionForm />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/live"
          element={
            <>
              <Live />
              <Topgamer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Team />
            </>
          }
        />
        <Route path="/entryform" element={<Form />} />
        <Route
          path="/affiliate"
          element={
            <>
              <Store />
              <Product />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
