import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
  <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  </>
  );
}