import "./App.css";
import { Header, Footer } from "./layouts/";
import { Router } from "./components/";
import { VideoListing } from "./pages/";

function App() {
  return (
    <>
      <Header />
      <Router />
      {/* <Footer /> */}
    </>
  );
}

export default App;
