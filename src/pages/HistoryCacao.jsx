import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import historyCacao from "/images/dibujo_cacao-removebg.png";

const HistoryCacao = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-4/5 h-full flex flex-col justify-around items-center text-center bg-white m-4 border-[1px] border-gray-200 rounded-md p-2">
          <h2 className="text-2xl lg:text-4xl lg:font-bold my-4">
            Historia del cacao
          </h2>
          <p className="mb-4 lg:w-3/5">
            Desde la Conquista y la Colonia española ha existido la idea
            generalizada de que el cacao es oriundo de Méjico y que fue de allí
            donde se desperdigó hacia el sur del continente; incluso era parte
            de la narrativa, que los españoles lo habían dispersado para su
            cultivo en Suramérica.
          </p>
          <p className="mb-4 lg:w-3/5">
            los españoles lo habían dispersado para su cultivo en Suramérica.
            Pero desde mediados del siglo XX, gracias a la investigación
            botánica en la región amazónica, comienza a ponerse en duda tal
            premisa. Y, es que, cuando se planteaba el centro de origen del
            cacao, en la Amazonía se encontraba mayor diversidad genética, en
            torno a él.
          </p>
          <img className="w-1/2 lg:w-1/3" src={historyCacao} alt="" />
          <p className="mb-4 lg:w-3/5">
            Hasta que, en el 2012, un grupo de arqueólogos franco-ecuatorianos,
            que trabajan desde comienzos del nuevo siglo en el sitio Santa
            Ana-La Florida, ubicado en el cantón Palanda, en la provincia de
            Zamora Chinchipe, en Ecuador, cambiaron la historia.
          </p>
          <p className="mb-4 lg:w-3/5">
            En tal yacimiento arqueológico se obtiene evidencia de basureros
            domésticos y de ofrendas funerarias, de donde se obtuvieron semillas
            y residuos de bebidas de uso cotidiano, con varias fechas de Carbono
            14, entre los 5.500 y 4.400 años de antigüedad.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryCacao;
