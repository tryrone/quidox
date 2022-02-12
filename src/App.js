import { BookProvider } from "./context/BookContext";
import Content from "./pages/Content";

function App() {
  return (
    <BookProvider>
      <Content />
    </BookProvider>
  );
}

export default App;
