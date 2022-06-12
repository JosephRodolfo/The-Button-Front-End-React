import HomePage from "./components/HomePage";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
function App() {
  return (
      <AppRouter>
    <div className="App">

      <HomePage />
    </div>
    </AppRouter>
  );
}

export default App;
