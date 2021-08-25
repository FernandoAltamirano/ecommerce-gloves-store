import Header from "../components/Header";
import {
  Hero,
  WrapperAbout,
  VisionMision,
  CardsWrapper,
  Card,
  MessageWrapper,
} from "./styles/home";
import bg from "../images/bg.png";
import about from "../images/about.png";
import { Wrapper } from "../globalStyles";
import Footer from "../components/Footer";
import Returnup from "../components/Returnup";
import { useHistory } from "react-router-dom";
import gloves from "../images/protection-gloves.png";
function HomePage() {
  const history = useHistory();
  return (
    <div>
      <Header />

      <Hero>
        <img src={bg} alt="" />
        <div>
          <p>
            BREVE DESCRIPCION <br /> DE TRES LINEAS
          </p>
          <button onClick={() => history.push("/products")}>
            Adquiere tus guantes ya
          </button>
        </div>
      </Hero>
      <WrapperAbout>
        <div>
          <h1>Quienes somos?</h1>
          <p>
            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es
            reproducido debajo para aquellos interesados. Las secciones 1.10.32
            y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también
            reproducidas en su forma original exacta, acompañadas por versiones
            en Inglés de la traducción realizada en 1914 por H. Rackham.
          </p>
        </div>
        <div>
          <img src={about} alt="" />
        </div>
      </WrapperAbout>
      <VisionMision style={{ background: "#F8F8F8", marginTop: "4em" }}>
        <Wrapper>
          <h1>Visión</h1>
          <p>
            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es
            reproducido debajo para aquellos interesados. Las secciones 1.10.32
            y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también
          </p>
        </Wrapper>
      </VisionMision>
      <VisionMision>
        <Wrapper>
          <h1>Misión</h1>
          <p>
            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es
            reproducido debajo para aquellos interesados. Las secciones 1.10.32
            y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también
          </p>
        </Wrapper>
      </VisionMision>
      <hr color="#F8F8F8" />
      <Wrapper>
        <h1>Conocenos más</h1>
        <CardsWrapper>
          <Card>
            <h2>Curtiembre</h2>
            <p>
              {" "}
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados. Las secciones
              1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero
              son también
            </p>
          </Card>
          <Card>
            <h2>Curtiembre</h2>
            <p>
              {" "}
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados. Las secciones
              1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero
              son también
            </p>
          </Card>
          <Card>
            <h2>Curtiembre</h2>
            <p>
              {" "}
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados. Las secciones
              1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero
              son también
            </p>
          </Card>
          <Card>
            <h2>Curtiembre</h2>
            <p>
              {" "}
              El trozo de texto estándar de Lorem Ipsum usado desde el año 1500
              es reproducido debajo para aquellos interesados. Las secciones
              1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero
              son también
            </p>
          </Card>
        </CardsWrapper>
      </Wrapper>
      <MessageWrapper>
        <p>
          Productos de calidad
          <br /> al mejor precio
        </p>
        <div>
          <img src={gloves} alt="gloves" />
        </div>
      </MessageWrapper>
      <Footer />
      <Returnup />
    </div>
  );
}

export default HomePage;
