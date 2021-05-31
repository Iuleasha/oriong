import "./contacts.scss";
import AddressPoUp from "../address-pop-up/address-pop-up";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Контакты</h2>

      <div className="contacts__map-holder">
        <AddressPoUp />
        <iframe
          className="contacts__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6141158220394!2d37.85126811568048!3d55.67831018053349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab66c483abb85%3A0x494f4e20cbd20469!2z0J_RgNC40LLQvtC70YzQvdCw0Y8g0YPQuy4sIDcwLCDQnNC-0YHQutCy0LAsIDEwOTQzMQ!5e0!3m2!1sru!2sru!4v1622451415318!5m2!1sru!2sru"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Contacts;
