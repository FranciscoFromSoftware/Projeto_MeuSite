import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Certifications } from './pages/Certifications';
import { Projects } from './pages/Projects';
import { Templates } from './pages/Templates';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Certifications />} />
          <Route path="/logs" element={<Projects />} />
          <Route path="/sensors" element={<Templates />} />
        </Routes>
      </Layout>
    </Router>
  );
}
