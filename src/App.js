import { useState, useEffect } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MemList from "./components/MemList";
import MainLayout from "./components/MainLayout";
import { getMems, updateMem } from "./database/dbManager";
import Loading from "./components/Loading";

function App() {
  const [mems, setMems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    reloadMems();
  }, []);

  const reloadMems = () => {
    setIsLoading(true);
    getMems().then((mems) => {
      setMems(mems);
      setIsLoading(false);
    });
  };

  const handleUpClick = (id) => {
    setMems((prevMem) => {
      const upVotedMem = prevMem.map((mem) => {
        if (mem.id === id) {
          mem.upvotes++;
          updateMem(mem);
        }
        return mem;
      });

      return upVotedMem;
    });
  };

  const handleDownClick = (id) => {
    setMems((prevMem) => {
      const downVotedMem = prevMem.map((mem) => {
        if (mem.id === id) {
          mem.downvotes++;
          updateMem(mem);
        }
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
              reload={reloadMems}
              content={
                isLoading ? (
                  <Loading />
                ) : (
                  <MemList
                    mems={mems}
                    onUpClick={handleUpClick}
                    onDownClick={handleDownClick}
                    hot={true}
                  />
                )
              }
            />
          }
        />
        <Route
          path="/regular"
          element={
            <MainLayout
              reload={reloadMems}
              content={
                isLoading ? (
                  <Loading />
                ) : (
                  <MemList
                    mems={mems}
                    onUpClick={handleUpClick}
                    onDownClick={handleDownClick}
                    hot={false}
                  />
                )
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
