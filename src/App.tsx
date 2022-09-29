import Home from '$components/routes/Home';
import BaseLayout from '$layout/BaseLayout';
import { Route, Routes } from 'react-router-dom';
import NotFound from '$components/routes/NotFound';
import About from '$components/routes/About';
import Blog from '$components/routes/Blog';
import Contact from '$components/routes/Contact';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
