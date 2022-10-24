import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import MakeRoutes from "./routes";
import GlobalStyle from './styles/global';
import { ContextProvider } from './context/authContext';

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <ToastContainer theme="dark" autoClose={2000} />
      <MakeRoutes />
    </ContextProvider>
  );
}