import imgMazorcaCacao from '/images/grano-cacao.jpg'

const sectionHome = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center min-h-screen">
        <div className="w-[80%] py-2 flex justify-center items-center flex-col bg-white m-2 border-[1px] border-gray-200 rounded-md gap-10">
          <h1 className="w-full text-center text-4xl font-bold md:text-5xl">
            Coqui<span id='spanTitle' className="text-[#41b93b] font-bold">Cacao</span>
          </h1>
          <p className="w-[80%] text-center md:w-3/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            laboriosam unde nesciunt veritatis perferendis vel nihil assumenda
            corrupti nam esse vitae reprehenderit, reiciendis iste ipsum,
            voluptates harum, consequuntur dignissimos! Fugiat.
          </p>
          <img className='w-3/5 border-2 border-gray-100 rounded-full md:w-1/4' src={imgMazorcaCacao} alt="" />
        </div>
      </section>
    </>
  );
};

export default sectionHome;
