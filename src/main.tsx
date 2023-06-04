import { Provider } from 'react-redux';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { store } from './store.ts';
const container: HTMLElement | null = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
