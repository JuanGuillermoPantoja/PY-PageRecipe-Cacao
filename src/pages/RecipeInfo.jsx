import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import backArrow from "/images/volver-flecha.png";

const RecipeInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [showPreparation, setShowPreparation] = useState(false);
  const [animatePreparation, setAnimatePreparation] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [animateIngredients, setAnimateIngredients] = useState(false);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error al cargar las recetas", error));
  }, [id]);

  if (!recipe) {
    return <p>Cargando receta...</p>;
  }

  const togglePreparation = () => {
    setShowPreparation((prev) => !prev);
    setAnimatePreparation(false);
    setTimeout(() => setAnimatePreparation(true), 10); // Activar la animación tras un pequeño retraso
  };

  const toggleIngredients = () => {
    setShowIngredients((prev) => !prev);
    setAnimateIngredients(false);
    setTimeout(() => setAnimateIngredients(true), 10);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <button className="z-10" onClick={() => navigate(-1)}>
          <img className="w-12 m-2" src={backArrow} alt="" />
        </button>
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl w-full text-center font-bold text-amber-700 sm:text-2xl sm:font-normal lg:text-4xl">
              {recipe.title}
            </h2>
            <p className="font-bold text-sm lg:text-xl">Autor</p>
            <p className="w-[60%] text-sm text-center mb-2 sm:text-lg">
              {recipe.author}
            </p>
            <p className="font-bold text-sm lg:text-xl">Tiempo de preparacion</p>
            <p className="w-[60%] text-sm text-center mb-2 sm:text-lg">
              {recipe.time}
            </p>
            <p className="font-bold text-sm lg:text-xl">Descripción:</p>
            <p className="w-[60%] text-sm text-center mb-2 sm:text-lg">
              {recipe.description}
            </p>
          </div>
          <div className="flex flex-col items-center w-[90%]">
            <div className="mb-2">
              <button
                onClick={togglePreparation}
                className="bg-[#41b93b] shadow-sm shadow-green-950 text-white rounded-sm p-2 mr-2 hover:bg-[#2c7728] duration-300"
              >
                Preparación
              </button>
              <button
                onClick={toggleIngredients}
                className="bg-[#41b93b] shadow-sm shadow-green-950 text-white rounded-sm p-2 hover:bg-[#2c7728] duration-300"
              >
                Ingredientes
              </button>
            </div>

            <div
              className={`w-[90%] bg-[#41b93b] rounded-md p-2 text-sm text-justify mb-2 sm:text-lg text-white transition-all duration-500 ease-in-out overflow-hidden lg:w-[60%]
                ${
                  showPreparation
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }
                ${animatePreparation ? "h-auto" : ""}`}
            >
              {showPreparation && recipe.preparation}
            </div>

            <ul
              className={`w-[90%] bg-[#41b93b] rounded-md p-2 text-sm text-center mb-2 sm:text-lg text-white transition-all duration-500 ease-in-out overflow-hidden lg:w-[60%]
                ${
                  showIngredients
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }
                ${animateIngredients ? "h-auto" : ""}`}
            >
              {showIngredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <li className="text-left" key={index}>
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="bg-black w-[250px] h-[250px] rounded-md my-2 shadow-lg shadow-green-950 sm:w-[450px] sm:h-[450px]"
            src={recipe.images[0]}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeInfo;
