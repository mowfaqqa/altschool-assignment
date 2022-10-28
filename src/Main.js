import Services from "./pages/Service__Page";
import Home from "./pages/HomePage";
import NotFound from "./pages/Not_found";
import Users from "./pages/Userspage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/LayoutComponent"


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="services" element={<Services />} />
          <Route path="community" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
