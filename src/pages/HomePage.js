import Header from "../components/Header";
import {
  Hero,
  WrapperAbout,
  VisionMision,
  CardsWrapper,
  Card,
  PrincipalText,
} from "./styles/home";
import about from "../images/about.png";
import { Wrapper } from "../globalStyles";
import Footer from "../components/Footer";
import Returnup from "../components/Returnup";
import { useHistory } from "react-router-dom";
import goalImage from "../images/goal.png";
import ideaImage from "../images/idea.png";

function HomePage() {
  const history = useHistory();
  return (
    <>
      <Hero>
        <Wrapper>
          <Header transparent={true} />
          <PrincipalText>
            <p>
              Empresa especializada
              <br /> en curtido, adobo y teñido de pieles
              <br /> desde 1993
            </p>
            <div>
              <button onClick={() => history.push("/products")}>
                Adquiere tus guantes ya
              </button>
            </div>
          </PrincipalText>
        </Wrapper>
      </Hero>
      <WrapperAbout>
        <div>
          <h1>Quienes somos?</h1>
          <p>
            Somos fabricantes, importadores y comercializadores de soluciones de
            clase mundial para la protección de las manos de los trabajadores
            del Perú. Construimos relaciones duraderas y de confianza con
            nuestros clientes y estamos comprometidos con la mejora continua de
            nuestros productos, procesos y sistemas. Satisfacemos las
            aspiraciones de nuestros trabajadores, proveedores y accionistas.
            Cumplimos con nuestras obligaciones con la sociedad y contribuimos
            con el fortalecimiento económico de nuestra nación.
          </p>
        </div>
        <div>
          <img src={about} alt="about" />
        </div>
      </WrapperAbout>
      <VisionMision
        style={{
          background: "#F8F8F8",
          marginTop: "4em",
          paddingBottom: "1em",
        }}
      >
        <Wrapper>
          <div>
            <h1>Visión</h1>
            <p>
              Consolidarnos como la mejor opción en calidad y servicio integral
              con valor agregado en el área de equipo de protección personal en
              todo el país.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={ideaImage}
              alt="idea"
              width="45"
              style={{ padding: ".5em" }}
            />
          </div>
        </Wrapper>
      </VisionMision>
      <VisionMision>
        <Wrapper>
          <div>
            <h1>Misión</h1>
            <p>
              Ofrecer soluciones integrales y de excelente calidad y servicio a
              la industria en lo relativo a equipo de protección personal. A
              través de su equipo de trabajo profesional y altamente integrado
              con los productos más competitivos y adecuados a la problemática
              específica de nuestros clientes.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={goalImage}
              alt="goal"
              width="45"
              style={{ padding: ".5em" }}
            />
          </div>
        </Wrapper>
      </VisionMision>
      <hr color="#F8F8F8" />
      <Wrapper style={{ marginTop: "4em" }}>
        <h1>Conocenos más</h1>
        <CardsWrapper>
          <Card>
            <h2>Curtiembre</h2>
            <p>
              {" "}
              En esta área se procesarán las pieles saladas que pasarán por
              diversos subprocesos (ribera, piquelado, curtido, post curtido,
              secado y terminación) para finalmente convertirse en cuero.
            </p>
          </Card>
          <Card>
            <h2>Confeccion</h2>
            <p>
              {" "}
              En esta área se manipulará el cuero ya terminado mediante diversas
              actividades para convertirlo en guantes de cuero según las
              especificaciones del pedido.
            </p>
          </Card>
          <Card>
            <h2>Empaquetado</h2>
            <p>
              {" "}
              En esta área se empaquetará los guantes que se pidieron para
              pasarlos al área de distribución y entregarlo al cliente.
            </p>
          </Card>
          <Card>
            <h2>Distribución</h2>
            <p>
              {" "}
              En esta área de designará a un empleado del área de distribución
              para que lleve el paquete al cliente con su respectivo
              comprobante.
            </p>
          </Card>
        </CardsWrapper>
      </Wrapper>

      <Footer />
      <Returnup />
    </>
  );
}

export default HomePage;
