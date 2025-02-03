import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const App0 = React.lazy(() => import('../modules/app0'));
const App1 = React.lazy(() => import('../modules/app1'));
const App2 = React.lazy(() => import('../modules/app2'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app0">App0</Link>
        </li>
        <li>
          <Link to="/app1">App1</Link>
        </li>
        <li>
          <Link to="/app2">App2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/app0" element={<App0 />} />
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
