import "./application.scss";
const applicationsArea = [
  {
    area: "Атомная промышленность",
  },
  {
    area: "Газовая промышленность",
  },
  {
    area: "Сельско-хозяйственная промышленность",
  },
  {
    area: "Угольная промышленность",
  },
  {
    area: "Нефтяная промышленность",
  },
  {
    area: "Производство стройматериалов",
  },
  {
    area: "Медицинская промышленность",
  },
  {
    area: "Фарфоро-фаянсовая промышленность",
  },
  {
    area: "Химическая промышленность",
  },
  {
    area: "Строительная промышленность",
  },
  {
    area: "Металлургическая промышленность",
  },
  {
    area: "Горнодобывающая промышленность",
  },
  {
    area: "Лесная промышленность",
  },
  {
    area: "Пищевая промышленность",
  },
  {
    area: "Электроэнергетика",
  },
  {
    area: "Целлюлозно-бумажная промышленность",
  },
  {
    area: "Лёгкая промышленность",
  },
  {
    area: "Автомобильная промышленность",
  },
  {
    area: "Деревообрабатывающая промышленность",
  },
  {
    area: "Перерабатывающая промышленность",
  },
  {
    area: "Машиностроение и металлообработка",
  },
  {
    area: "Стекольная промышленность",
  },
  {
    area: "Микробиологическая промышленность",
  },
  {
    area: "Полиграфическая промышленность",
  },
  {
    area: "Сборочное производство",
  },
];

function Application() {
  return (
    <section className="application" id="application">
      <h2 className="application__title">Области применения продукции</h2>
      <ul className="application__list">
        {applicationsArea.map((item) => (
          <li className="application__item">{item.area}</li>
        ))}
      </ul>
    </section>
  );
}

export default Application;
