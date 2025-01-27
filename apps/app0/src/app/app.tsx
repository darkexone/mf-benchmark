import { Triangle0 } from '@mf-benchmark/lib0';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lib0">Lib0</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.
            </div>
          }
        />
        <Route
          path="/lib0"
          element={
            <svg
              height="100%"
              viewBox="-5 -4.33 10 8.66"
              style={{ backgroundColor: 'black' }}
            >
              <Triangle0 style={{ fill: 'white' }} />
            </svg>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
