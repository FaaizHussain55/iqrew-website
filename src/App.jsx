import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import CheckoutNew from "./pages/CheckoutNew";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-new" element={<CheckoutNew />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
