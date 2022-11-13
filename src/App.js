import { LandingImage, Story, List, Bonus, Footer } from "./comtainers";
import { NavBar } from "./components";

function App() {
  console.log("app");
  return (
    <>
      <NavBar />
      <LandingImage />
      <Story />
      <List />
      <Bonus />
      <Footer />
    </>
  );
}

export default App;
