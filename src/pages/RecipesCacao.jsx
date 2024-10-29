import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipesCacao = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error al cargar las recetas", error));
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="w-full min-h-[70vh] flex justify-center text-center">
        <div className=" w-[90%]">
          <h2 className="text-2xl my-2 text-black sm:text-3xl sm:font-bold md:text-4xl">
            Recetas de cacao
          </h2>
          <div className="lg:flex lg:flex-wrap lg:justify-around">
            {recipes.map((recipe) => (
              <div className="mb-2 rounded-tl-2xl rounded-br-2xl hover:bg-black md:h-48 lg:w-[49%] lg:flex lg:items-center lg:h-36" key={recipe.id}>
                <Link
                  className="shadow-md shadow-green-800 bg-gradient-to-r from-[#41b93b] to-green-700 h-full w-full text-start flex justify-between items-center p-2 rounded-tl-2xl rounded-br-2xl my-3 hover:opacity-85 hover:duration-300 sm:h-40 sm:items-start md:h-full"
                  to={`/recipe-info/${recipe.id}`}
                >
                  <div className="w-[60%] line-clamp-4">
                    <h3 className="text-lg font-bold text-white md:text-xl md:mb-2">{recipe.title}</h3>
                    <p className="w-full text-xs text-white sm:text-sm md:text-base">{recipe.description}</p>
                  </div>
                  <img
                    className="w-[30%] h-[110px] rounded-tl-3xl rounded-br-3xl sm:h-full lg:w-[25%] shadow-lg shadow-green-950"
                    src={recipe.images[0]}
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RecipesCacao;
