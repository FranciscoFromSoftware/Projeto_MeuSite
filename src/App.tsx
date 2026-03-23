import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Certifications } from './pages/Certifications';
import { Projects } from './pages/Projects';
import { Templates } from './pages/Templates';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/certificacoes" element={<Certifications />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/modelos" element={<Templates />} />
        </Routes>
      </Layout>
    </Router>
  );
}
