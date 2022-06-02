import CountdownBar from "./components/CountdownBar";
import Header from "./components/Header";
import Form from "./components/Button";
import "./styles/styles.scss";
import { useState } from "react";

function App() {
  //refresh passes the button click up from the button back down to countdown bar to rerender button with reset timer
  const [refresh, refreshEndDate] = useState(false);

  const parentCallback = () => {
    let newRefresh = !refresh;
    refreshEndDate(newRefresh);
  };

  return (
    <div className="App">
      <Header />
      <CountdownBar refreshEndDate={refresh} array={[1, 1, 1, 1, 1, 1]} />
      <Form parentCallback={parentCallback} />
    </div>
  );
}

export default App;
