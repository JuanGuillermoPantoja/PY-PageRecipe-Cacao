import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import historyCacao from "/images/grano-cacao-removebg.png"

const HistoryCacao = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-4/5 h-full flex flex-col justify-around items-center text-center bg-white m-4 border-[1px] border-gray-200 rounded-md p-2">
          <h2 className="text-2xl lg:text-4xl lg:font-bold my-4">Historia del cacao</h2>
          <p className="mb-4 lg:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            aperiam, ipsum laborum culpa ducimus illum pariatur natus, ipsam
            temporibus blanditiis distinctio obcaecati a maxime sapiente optio
            inventore. Assumenda, beatae accusantium?
          </p>
            <img className="w-1/2 lg:w-1/5" src={historyCacao} alt="" />
          <p className="mb-4 lg:w-3/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            pariatur, assumenda maiores nobis labore fugiat veniam illum eos
            perferendis sint quis nulla quisquam nihil delectus enim expedita
            cum maxime asperiores.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryCacao;
