import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/shared/ErrorBoundary';
import BaseLayout from './layouts/BaseLayout';
import IndexPage from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
    ],
  },
]);

export default router;
