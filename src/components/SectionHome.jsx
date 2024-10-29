import imgMazorcaCacao from '/images/grano-cacao.jpg'

const sectionHome = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="w-[90%] flex justify-center items-center flex-col">
          <h1 className="text-3xl my-4 font-bold md:text-5xl">
            Coqui<span id='spanTitle' className="text-[#41b93b] font-bold">Cacao</span>
          </h1>
          <p className="w-[80%] text-center md:w-3/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            laboriosam unde nesciunt veritatis perferendis vel nihil assumenda
            corrupti nam esse vitae reprehenderit, reiciendis iste ipsum,
            voluptates harum, consequuntur dignissimos! Fugiat.
          </p>
          <img className='w-1/2 mt-4 border-2 border-gray-100 rounded-full md:w-1/4' src={imgMazorcaCacao} alt="" />
        </div>
      </section>
    </>
  );
};

export default sectionHome;
