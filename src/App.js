import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MemList from "./components/MemList";
import MainLayout from "./components/MainLayout";
import { useMems } from './hooks/useMems';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import EmptyList from "./components/EmptyList";
import { memsCategory } from "./react-query/consts";


function App() {
  const regularMems = useMems(memsCategory.REGULAR);
  const hotMems = useMems(memsCategory.HOT);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/hot" />} />
        <Route
          path="/hot"
          element={
            <MainLayout
              content={
                hotMems.length === 0 ? (
                  <EmptyList text="" />
                ) : (
                  <MemList
                    mems={hotMems}
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
              content={
                regularMems.length === 0 ? (
                  <EmptyList text="" />
                ) : (
                  <MemList
                    mems={regularMems}
                    hot={false}
                  />
                )
              }
            />
          }
        />
      </Routes>
      <ReactQueryDevtools />
    </Router>
  );
}

export default App;
