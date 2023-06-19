import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reportWebVitals from 'reportWebVitals';
import { MainPageView } from 'pages';
import App from 'App';
import { TableControllerProvider } from 'context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App>
        <TableControllerProvider>
          <MainPageView />
        </TableControllerProvider>
      </App>
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
