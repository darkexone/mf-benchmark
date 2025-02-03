import { Triangle as Triangle0 } from 'lib0';

export function App() {
  return (
    <Triangle>
      <Triangle0 style={{ fill: 'white' }} />
    </Triangle>
  );
}

export default App;

const Triangle = ({ children }: { children: React.ReactNode }) => {
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
