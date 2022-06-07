
import CountdownBar from "./CountdownBar";
import Header from "./Header"
import Form from "./Button";
import "../styles/styles.scss"

function HomePage() {



  return (
    <div className="home-page">
      <Header />
      <CountdownBar />
      <Form />
    </div>
  );
}

export default HomePage;
