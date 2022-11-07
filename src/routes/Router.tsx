import BaseLayout from '$components/layout/BaseLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '$routes/Home';
import About from '$routes/About';
import Blog from '$routes/Blog';
import Contact from '$routes/Contact';
import NotFound from '$routes/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
