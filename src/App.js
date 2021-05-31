import Application from "./components/application/application";
import Assortment from "./components/assortiment/assortiment";
import Clients from "./components/clients/clients";
import Contacts from "./components/contacts/contacts";
import Header from "./components/header/header";
import OurProcess from "./components/our-process/our-process";
import WhyUs from "./components/why-us/why-us";

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
