import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "components/MainPage";
import BookingPage from "components/BookingPage";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
