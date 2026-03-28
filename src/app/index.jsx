import { HashRouter, Routes, Route } from "react-router-dom";
import * as pages from './../pages';
import { Data } from "../data/data.jsx";
function App() {
  return (
    <HashRouter>
      <Routes>
              <Route path="/" element={<pages.Landing />} />
              <Route path="/data" element={<Data/>}/>
     </Routes>
    </HashRouter>
  );
}

export default App;
