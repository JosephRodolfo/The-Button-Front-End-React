import CountdownBar from "./components/CountdownBar";
import Header from "./components/Header";
import Form from "./components/Button";
import "./styles/styles.scss";

function App() {
  //refresh passes the button click up from the button back down to countdown bar to rerender button with reset timer



  return (
    <div className="App">
      <Header />
      <CountdownBar array={[1, 1, 1, 1, 1, 1]} />
      <Form />
    </div>
  );
}

export default App;
