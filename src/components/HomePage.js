
import CountdownBar from "./CountdownBar";
import Header from "./Header"
import Form from "./Button";
import HighScores from "./HighScores";
import "../styles/styles.scss"

function HomePage() {



  return (
    <div className="home-page">
      <Header />
      <CountdownBar />
      <Form />
      <HighScores />
    </div>
  );
}

export default HomePage;
