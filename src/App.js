import "./App.css";

import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
} from "react-router-dom";

import RegularMems from "./components/common/RegularMems";
import MainLayout from "./components/layout/MainLayout";

const MEMS = [
   {
      title: "Kiedy zbliża się Wielkanoc",
      upvotes: 9,
      downvotes: 1,
      img: "../img/mems/mem-1.jpg",
   },
   {
      title: "Oczekiwania a rzeczywistość",
      upvotes: 6,
      downvotes: 2,
      img: "../img/mems/mem-2.jpg",
   },
   {
      title: "Architektura IT",
      upvotes: 6,
      downvotes: 2,
      img: "../img/mems/mem-3.png",
   },
   {
      title: "Gdy nieubłaganie zbliża się deadline",
      upvotes: 6,
      downvotes: 2,
      img: "../img/mems/mem-4.jpg",
   },
];

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
               element={<MainLayout content={<RegularMems mems={MEMS}/>} />}
            />
         </Routes>
      </Router>
   );
}

export default App;
