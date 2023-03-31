import "./App.css";

import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
} from "react-router-dom";

import RegularMems from "./components/common/RegularMems";
import MainLayout from "./components/layout/MainLayout";

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Navigate to="/hot" />} />
            <Route
               path="/hot"
               element={
                  <MainLayout content={<div className="pt-20">hot</div>} />
               }
            />
            <Route
               path="/regular"
               element={<MainLayout content={<RegularMems />} />}
            />
         </Routes>
      </Router>
   );
}

export default App;
