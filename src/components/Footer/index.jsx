import "./style.css";

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>
            Hotel Stříbrava <br></br>
            Ke kamenné lávce 12 <br></br>
            317 24 Líbnice nad Stříbranou
            <br></br>
            <br></br>
            <a href="mailto:recepce@hotelstribrava.cz">
              recepce@hotelstribrava.cz
            </a>
          </p>
        </div>
        <img src="../img/mapa.png" />
      </div>
    </section>
  );
};
