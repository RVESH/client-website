import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as pages from './../pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<pages.Landing />} />

     </Routes>
    </BrowserRouter>
  );
}

export default App;
