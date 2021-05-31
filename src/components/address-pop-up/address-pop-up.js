import { useState } from "react";
import Form from "../form/form";
import SendForm from "../send-form-button/send-form-button";
import "./address-pop-up.scss";

function AddressPoUp() {
  const [showFormStatus, showForm] = useState(false);
  const clickHandler = () => {
    showForm(!showFormStatus);
  };
  return (
    <section className="pop-up">
      <h2 className="visually-hidden">Адрес производства</h2>

      <div className="pop-up__container">
        {showFormStatus && (
          <>
            <div className="pop-up__close" onClick={clickHandler} />
            <h3 className="pop-up__title pop-up__title-form">Получить цены</h3>
            <Form />
          </>
        )}
        {!showFormStatus && (
          <div>
            <h3 className="pop-up__title">ООО «Орион Групп»</h3>
            <div className="pop-up__information">
              <p className="pop-up__text-title">
                Юридический/фактический адрес:
              </p>
              <p className="pop-up__text">
                109431, г. Москва, ул. Привольная, дом 70, корпус 1, этаж 2,
                помещение XII, комната 3
              </p>
            </div>
            <div className="pop-up__information">
              <p className="pop-up__text-title">Телефон: </p>
              <p className="pop-up__text"> +79917039870</p>
            </div>
            <div className="pop-up__information">
              <p className="pop-up__text-title">Email:</p>
              <p className="pop-up__text">orion.gloves@gmail.com</p>
            </div>
            <div className="pop-up__information">
              <p className="pop-up__text-title">ИНН: </p>
              <p className="pop-up__text"> 9721104203</p>
            </div>
            <div className="pop-up__information">
              <p className="pop-up__text-title">КПП: </p>
              <p className="pop-up__text">772101001</p>
            </div>
            <div className="pop-up__information pop-up__information--socials">
              <p className="pop-up__text-title">Социальные сети: </p>
              <div className="pop-up__icons">
                <a
                  className="pop-up__icons-social"
                  href="https://api.whatsapp.com/send?phone=79917039870"
                >
                  <svg
                    height="20px"
                    viewBox="0 0 512 512"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531 0 45.105469 11.835938 89.230469 34.285156 128.039062l-34.285156 127.960938 127.960938-34.285156c38.808593 22.449218 82.933593 34.285156 128.039062 34.285156 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-21.214843 340.824219c-42.683594 42.6875-99.4375 66.195312-159.804688 66.195312-39.722656 0-78.804688-10.460938-113.019531-30.253906l-10.769531-6.230469-89.785157 24.058594 24.058594-89.785157-6.230469-10.769531c-19.792968-34.214843-30.253906-73.296875-30.253906-113.019531 0-60.367188 23.507812-117.121094 66.195312-159.804688 42.683594-42.6875 99.4375-66.195312 159.804688-66.195312s117.121094 23.507812 159.808594 66.195312c42.683594 42.6875 66.191406 99.4375 66.191406 159.804688s-23.507812 117.121094-66.195312 159.804688zm0 0" />
                    <path d="m288.023438 310.246094-86.265626-86.269532 21.210938-21.210937-31.820312-31.820313-4.242188 4.242188c-11.433594 11.433594-15.285156 29.707031-10.847656 51.457031 4.894531 23.992188 19.042968 48.660157 39.839844 69.457031 26.0625 26.0625 58.292968 41.621094 86.226562 41.621094 10.0625 0 24.253906-2.191406 34.6875-12.628906l4.242188-4.242188-31.820313-31.820312zm0 0" />
                    <path d="m394.59375 117.40625c-37.019531-37.019531-86.238281-57.40625-138.59375-57.40625s-101.574219 20.386719-138.59375 57.40625-57.40625 86.242188-57.40625 138.59375c0 34.453125 9.066406 68.34375 26.222656 97.996094l12.460938 21.539062-13.832032 51.613282 51.613282-13.832032 21.539062 12.460938c29.652344 17.15625 63.539063 26.222656 97.996094 26.222656 52.355469 0 101.574219-20.386719 138.59375-57.40625s57.40625-86.242188 57.40625-138.59375-20.386719-101.574219-57.40625-138.59375zm-36.566406 228.902344c-14.007813 14.007812-33.339844 21.414062-55.898438 21.414062-35.71875 0-75.882812-18.84375-107.441406-50.40625-24.910156-24.910156-41.964844-54.984375-48.023438-84.675781-6.515624-31.941406.242188-59.878906 19.03125-78.667969l25.457032-25.453125 74.242187 74.246094-21.210937 21.210937 43.839844 43.839844 21.214843-21.210937 74.246094 74.246093zm0 0" />
                  </svg>
                </a>
                <a
                  className="pop-up__icons-social"
                  href="https://instagram.com/orion.gloves?r=nametag"
                >
                  <svg
                    height="20px"
                    viewBox="0 0 512 512"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
                    <path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
                    <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
                  </svg>
                </a>
                <a
                  className="pop-up__icons-social"
                  href="https://telegram.me/oriongloves"
                >
                  <svg
                    id="Bold"
                    enableBackground="new 0 0 24 24"
                    height="20px"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
                  </svg>
                </a>
              </div>
            </div>
            <SendForm clickHandler={clickHandler} />
          </div>
        )}
      </div>
    </section>
  );
}

export default AddressPoUp;
