import { LandingImage, Story } from "./comtainers";
import { NavBar } from "./components";

function App() {
  console.log("app");
  return (
    <>
      <NavBar />
      <LandingImage />
      <Story />
    </>
  );
}

export default App;
