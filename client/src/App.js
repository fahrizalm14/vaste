import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import ButtonTutorial from "./Components/ButtonTutorial";

function App() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 980,
        padding: "1rem",
      }}
      className="App"
    >
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
      <ButtonTutorial></ButtonTutorial>
    </div>
  );
}

export default App;
