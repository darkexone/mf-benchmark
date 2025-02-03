import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { loadRemote } from '@module-federation/enhanced/runtime';

const App0 = React.lazy(
  () => loadRemote('app0/Module') as Promise<{ default: React.ComponentType }>
);
const App1 = React.lazy(
  () => loadRemote('app1/Module') as Promise<{ default: React.ComponentType }>
);
const App2 = React.lazy(
  () => loadRemote('app2/Module') as Promise<{ default: React.ComponentType }>
);

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
