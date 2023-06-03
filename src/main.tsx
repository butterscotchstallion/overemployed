import App from './App.tsx';
import { createRoot } from 'react-dom/client';
const container: HTMLElement | null = document.getElementById('root');
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}
