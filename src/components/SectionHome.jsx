import imgMazorcaCacao from "/images/grano-cacao.jpg";

const sectionHome = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center min-h-screen">
        <div className="w-[80%] py-2 flex justify-center items-center flex-col bg-white m-2 border-[1px] border-gray-200 rounded-md gap-10">
          <h1 className="w-full text-center text-4xl font-bold md:text-5xl">
            Coqui
            <span id="spanTitle" className="text-[#41b93b] font-bold">
              Cacao
            </span>
          </h1>
          <div
            id="welcomeHome"
            className="bg-black h-[300px] w-[60%] flex justify-center items-center rounded-md shadow-lg shadow-black "
          >
            <h2 className="text-2xl text-center absolute z-10 w-[40%] md:text-4xl">
              ¡Bienvenidos a nuestro recetario web dedicado a preparaciones con
              cacao!
            </h2>
            <div className="z-0 bg-white h-full w-full opacity-25 flex justify-center items-center"></div>
          </div>
          <p className="w-[80%] text-center md:w-3/5">
            Si usted es un amante del chocolate o simplemente disfruta de los
            sabores intensos y únicos que el cacao puede ofrecer, ha llegado al
            lugar indicado. Aquí encontrará una variedad de recetas que resaltan
            la versatilidad de este producto, iniciando con postres hasta llegar
            a bebidas reconfortantes y salsas saladas sorprendentes. En este
            recetario, hemos recopilado una selección de preparaciones que son
            una invitación a experimentar en la cocina. Desde brownies de cacao
            y natilla de chocolate hasta bebidas calientes o salsas exquisitas,
            cada receta está diseñada para resaltar el sabor profundo del cacao.
            Le invitamos a explorar estas recetas y dejarse llevar por la
            creatividad, estamos seguros de que encontrarás algo que deleitará
            tu paladar y sorprenderá a tus seres queridos. ¡Prepárate para
            disfrutar del fascinante mundo del cacao y hacer de cada preparación
            una experiencia inolvidable!
          </p>
          <img
            className="w-3/5 border-2 border-gray-100 rounded-full md:w-1/3 lg:w-1/4"
            src={imgMazorcaCacao}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default sectionHome;
