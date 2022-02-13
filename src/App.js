import { BookProvider } from "./context/BookContext";
import Pages from './pages';


function App() {
  return (
   
      <BookProvider>
        <Pages />
      </BookProvider>
  );
}

export default App;
