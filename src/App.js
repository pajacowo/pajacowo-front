import { useState, useEffect } from "react";

import "./App.css";

import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
} from "react-router-dom";

import MemList from "./components/common/MemList";
import MainLayout from "./components/layout/MainLayout";

const MEMS = [
   {
      id: 1,
      title: "Kiedy zbliża się Wielkanoc",
      upvotes: 9,
      downvotes: 1,
      img: "../img/mems/mem-1.jpg",
   },
   {
      id: 2,
      title: "Oczekiwania a rzeczywistość",
      upvotes: 6,
      downvotes: 2,
      img: "../img/mems/mem-2.jpg",
   },
   {
      id: 3,
      title: "Architektura IT",
      upvotes: 15,
      downvotes: 4,
      img: "../img/mems/mem-3.png",
   },
   {
      id: 4,
      title: "Gdy nieubłaganie zbliża się deadline",
      upvotes: 6,
      downvotes: 2,
      img: "../img/mems/mem-4.jpg",
   },
];

function App() {
   const [mems, setMems] = useState([]);

   useEffect(() => {
      setMems(MEMS);
   }, []);

   const handleUpClick = (id) => {
      setMems((prevMem) => {
         const upVotedMem = prevMem.map((mem) => {
            if (mem.id === id) mem.upvotes++;
            return mem;
         });

         return upVotedMem;
      });
   };

   const handleDownClick = (id) => {
      setMems((prevMem) => {
         const downVotedMem = prevMem.map((mem) => {
            if (mem.id === id) mem.downvotes++;
            return mem;
         });

         return downVotedMem;
      });
   };

   return (
      <Router>
         <Routes>
            <Route exact path="/" element={<Navigate to="/hot" />} />
            <Route
               path="/hot"
               element={
                  <MainLayout
                     content={
                        <MemList
                           mems={mems}
                           onUpClick={handleUpClick}
                           onDownClick={handleDownClick}
                           hot={true}
                        />
                     }
                  />
               }
            />
            <Route
               path="/regular"
               element={
                  <MainLayout
                     content={
                        <MemList
                           mems={mems}
                           onUpClick={handleUpClick}
                           onDownClick={handleDownClick}
                           hot={false}
                        />
                     }
                  />
               }
            />
         </Routes>
      </Router>
   );
}

export default App;
