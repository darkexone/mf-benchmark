import { Triangle as Triangle0 } from '@mf-benchmark/lib0';
import { Triangle as Triangle1 } from '@mf-benchmark/lib1';
import { Triangle as Triangle2 } from '@mf-benchmark/lib2';
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
          <li>
            <Link to="/lib1">Lib1</Link>
          </li>
          <li>
            <Link to="/lib2">Lib2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={<div>This is the generated root route.</div>}
        />
        <Route
          path="/lib0"
          element={
            <Triangle>
              <Triangle0 style={{ fill: 'white' }} />
            </Triangle>
          }
        />
        <Route
          path="/lib1"
          element={
            <Triangle>
              <Triangle1 style={{ fill: 'white' }} />
            </Triangle>
          }
        />
        <Route
          path="/lib2"
          element={
            <Triangle>
              <Triangle2 style={{ fill: 'white' }} />
            </Triangle>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

const Triangle = ({ children }: React.PropsWithChildren) => {
  return (
    <svg
      height="100%"
      viewBox="-5 -4.33 10 8.66"
      style={{ backgroundColor: 'black' }}
    >
      {children}
    </svg>
  );
};
