import { Route, Routes, Link } from 'react-router-dom';

import {
  Screen0,
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
  Screen14,
  Screen15,
  Screen16,
  Screen17,
  Screen18,
  Screen19,
  Screen20,
  Screen21,
  Screen22,
  Screen23,
  Screen24,
  Screen25,
  Screen26,
  Screen27,
  Screen28,
  Screen29,
  Screen30,
  Screen31,
  Screen32,
  Screen33,
  Screen34,
  Screen35,
  Screen36,
  Screen37,
  Screen38,
  Screen39,
  Screen40,
  Screen41,
  Screen42,
  Screen43,
  Screen44,
  Screen45,
  Screen46,
  Screen47,
  Screen48,
  Screen49,
} from '@mf-benchmark/lib0';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lib1">Lib1</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/lib0"
          element={
            <div>
              <Screen0 />
              <Screen1 />
              <Screen2 />
              <Screen3 />
              <Screen4 />
              <Screen5 />
              <Screen6 />
              <Screen7 />
              <Screen8 />
              <Screen9 />
              <Screen10 />
              <Screen11 />
              <Screen12 />
              <Screen13 />
              <Screen14 />
              <Screen15 />
              <Screen16 />
              <Screen17 />
              <Screen18 />
              <Screen19 />
              <Screen20 />
              <Screen21 />
              <Screen22 />
              <Screen23 />
              <Screen24 />
              <Screen25 />
              <Screen26 />
              <Screen27 />
              <Screen28 />
              <Screen29 />
              <Screen30 />
              <Screen31 />
              <Screen32 />
              <Screen33 />
              <Screen34 />
              <Screen35 />
              <Screen36 />
              <Screen37 />
              <Screen38 />
              <Screen39 />
              <Screen40 />
              <Screen41 />
              <Screen42 />
              <Screen43 />
              <Screen44 />
              <Screen45 />
              <Screen46 />
              <Screen47 />
              <Screen48 />
              <Screen49 />
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
