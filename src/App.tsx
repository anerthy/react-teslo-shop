import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';

// TesloShopApp
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
