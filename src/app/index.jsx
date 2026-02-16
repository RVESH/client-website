import { HashRouter, Routes, Route } from "react-router-dom";
import * as pages from './../pages';

function App() {
  return (
    <HashRouter>
      <Routes>
              <Route path="/" element={<pages.Landing />} />

     </Routes>
    </HashRouter>
  );
}

export default App;
