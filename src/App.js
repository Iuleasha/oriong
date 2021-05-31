import "./App.scss";
import Header from "./components/header/header";
import WhyUs from "./components/why-us/why-us";
import Assortment from "./components/assortiment/assortiment";
import OurProcess from "./components/our-process/our-process";
import Clients from "./components/clients/clients";
import Application from "./components/application/application";
import Contacts from "./components/contacts/contacts";

function App() {
  return (
    <>
      <Header />
      <WhyUs />
      <Assortment />
      <OurProcess />
      <Clients />
      <Application />
      <Contacts />
    </>
  );
}

export default App;
