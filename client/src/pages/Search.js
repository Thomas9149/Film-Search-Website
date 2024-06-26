import axios from "axios";
import { useEffect, useState } from "react";
import "../index.css";
import React from "react";
import Window from "../components/window";
import Header from "../components/Header";
export default function Search() {
  const [films, setFilms] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchCategory, setSearchCategory] = useState("Title");
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const [isBeingEdited, setIsBeingEdited] = useState("");
  const [title, setTitle] = useState("");
  const [metascore, setMetascore] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [reloader, setReloader] = useState("");
  const pageBackground = "bg-gray-700";
  var film = {
    title,
    year,
    director,
    metascore,
  };
  function renderData() {
    return films.map((product) => (
      // <div
      //   onMouseEnter={() => {
      //     setIsHovered(product.Title);
      //     setTitle(product.Title);
      //     setMetascore(product.Metascore);
      //     setDirector(product.Director);
      //     setYear(product.Year);
      //   }}
      //   onMouseLeave={() => {
      //     setIsHovered("");
      //     setIsBeingEdited("");
      //   }}
      //   key={product.Title}
      //   className="min-w-[450px] min-h-[300px] border border-black rounded-md m-2 bg-orange-300 p-4 flex flex-col relative"
      // >
      //   <div className="max-w-[400px] mb-4">
      //     <img
      //       className="w-full h-[200px] object-cover rounded-lg shadow-md"
      //       src={product.Images[0]}
      //       alt={product.Title}
      //     />
      //   </div>
      //   <div className="text-gray-800 flex-1">
      //     <div>
      //       <strong>Name:</strong>{" "}
      //       {isBeingEdited === product.Title ? (
      //         <input
      //           type="text"
      //           className="border border-gray-400 text-sm outline-none rounded-md mr-4"
      //           value={title}
      //           onChange={(e) => setTitle(e.target.value)}
      //         />
      //       ) : (
      //         product.Title
      //       )}
      //     </div>
      //     <div>
      //       <strong>Release Date:</strong>{" "}
      //       {isBeingEdited === product.Title ? (
      //         <input
      //           type="text"
      //           className="border border-gray-400 text-sm outline-none rounded-md mr-4"
      //           value={year}
      //           onChange={(e) => setYear(e.target.value)}
      //         />
      //       ) : (
      //         product.Year
      //       )}
      //     </div>
      //     <div>
      //       <strong>MetaScore:</strong>{" "}
      //       {isBeingEdited === product.Title ? (
      //         <input
      //           type="text"
      //           className="border border-gray-400 text-sm outline-none rounded-md mr-4"
      //           value={metascore}
      //           onChange={(e) => setMetascore(e.target.value)}
      //         />
      //       ) : (
      //         product.Metascore
      //       )}
      //     </div>
      //     <div>
      //       <strong>Director:</strong>{" "}
      //       {isBeingEdited === product.Title ? (
      //         <input
      //           type="text"
      //           className="border border-gray-400 text-sm outline-none rounded-md mr-4"
      //           value={director}
      //           onChange={(e) => setDirector(e.target.value)}
      //         />
      //       ) : (
      //         product.Director
      //       )}
      //     </div>
      //   </div>

      //   {isBeingEdited === product.Title ? (
      //     <div>
      //       <div
      //         onClick={() => setIsBeingEdited("")}
      //         className="hover:bg-red-800 cursor-pointer font-bold font-sans absolute bottom-0 right-0 mb-2 mr-2 bg-red-500 h-8 w-20 flex items-center justify-center"
      //       >
      //         Cancel
      //       </div>
      //       <div
      //         onClick={() => axiosUpdate(product.Title)}
      //         className="hover:bg-green-800 cursor-pointer font-bold font-sans absolute bottom-0 right-0 mb-2 mr-24 bg-green-500 h-8 w-20 flex items-center justify-center"
      //       >
      //         Confirm
      //       </div>
      //     </div>
      //   ) : (
      //     isHovered === product.Title && (
      //       <div>
      //         <div
      //           onClick={() => axiosDelete(product.Title)}
      //           className="hover:bg-red-800 cursor-pointer font-bold font-sans absolute bottom-0 right-0 mb-2 mr-2 bg-red-500 h-8 w-20 flex items-center justify-center"
      //         >
      //           Remove
      //         </div>
      //         <div
      //           onClick={() => setIsBeingEdited(product.Title)}
      //           className="hover:bg-green-800 cursor-pointer font-bold font-sans absolute bottom-0 right-0 mb-2 mr-24 bg-green-500 h-8 w-12 flex items-center justify-center"
      //         >
      //           Edit
      //         </div>
      //       </div>
      //     )
      //   )}
      // </div>
      <div
        onMouseEnter={() => {
          setIsHovered(product.Title);
          setTitle(product.Title);
          setMetascore(product.Metascore);
          setDirector(product.Director);
          setYear(product.Year);
        }}
        onMouseLeave={() => {
          setIsHovered("");
          setIsBeingEdited("");
        }}
        key={product.Title}
        className="w-80 bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
            src={product.Images[0]}
            alt={product.Title}
          />
        </div>
        <div className="p-6 text-gray-800">
          <h3 className="text-xl font-semibold mb-2">
            {isBeingEdited === product.Title ? (
              <input
                type="text"
                className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              product.Title
            )}
          </h3>
          <div className="mb-1">
            <strong className="text-gray-600">Release Date:</strong>{" "}
            {isBeingEdited === product.Title ? (
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            ) : (
              product.Year
            )}
          </div>
          <div className="mb-1">
            <strong className="text-gray-600">MetaScore:</strong>{" "}
            {isBeingEdited === product.Title ? (
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={metascore}
                onChange={(e) => setMetascore(e.target.value)}
              />
            ) : (
              product.Metascore
            )}
          </div>
          <div className="mb-4">
            <strong className="text-gray-600">Director:</strong>{" "}
            {isBeingEdited === product.Title ? (
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            ) : (
              product.Director
            )}
          </div>
          {isBeingEdited === product.Title ? (
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsBeingEdited("")}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => axiosUpdate(product.Title)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Confirm
              </button>
            </div>
          ) : (
            isHovered === product.Title && (
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => axiosDelete(product.Title)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
                <button
                  onClick={() => setIsBeingEdited(product.Title)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                >
                  Edit
                </button>
              </div>
            )
          )}
        </div>
      </div>
    ));
  }
  function axiosDelete(title) {
    axios
      .delete(`http://localhost:5000/films/${title}`)
      .then((res) => {
        console.log(res);
        setReloader("New");
      })
      .catch(() => console.log("error occured"));
  }
  function axiosUpdate(title) {
    axios
      .patch(`http://localhost:5000/films/${title}`, film)
      .then(() => setIsBeingEdited(""))
      .catch(() => console.log("Error Patching Data"));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/films`, {
        params: { searchCategory, searchBar: inputValue },
      })
      .then((res) => {
        setFilms(res.data.films);
      })
      .catch((err) => console.log(err));
  }, [inputValue, searchCategory, isBeingEdited, isWindowOpen, reloader]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleCategoryChange(event) {
    setSearchCategory(event.target.value);
  }

  function toggleWindow() {
    if (isWindowOpen) {
      setIsWindowOpen(false);
      console.log("window open - closing it");
    } else {
      console.log("window closed - opening it");
      setIsWindowOpen(true);
    }
  }

  return (
    // <>
    //   {isWindowOpen && <Window toggleWindow={toggleWindow} />}
    //   <Header pageBackground={pageBackground} />

    //   <div
    //     className={`${pageBackground} p-8 min-h-screen flex flex-col items-center`}
    //   >
    //     <div className="mb-8 flex justify-center w-full">
    //       <input
    //         type="text"
    //         className="border border-gray-400 h-10 p-3 text-sm outline-none rounded-md mr-4"
    //         placeholder="Enter a search"
    //         onChange={handleChange}
    //       />
    //       <select
    //         id="options"
    //         value={searchCategory}
    //         onChange={handleCategoryChange}
    //         className="border border-gray-400 h-10 p-2 text-sm outline-none rounded-md"
    //       >
    //         <option key="1" value="Title">
    //           Name
    //         </option>
    //         <option key="2" value="Year">
    //           Release Date
    //         </option>
    //         <option key="3" value="Metascore">
    //           MetaScore
    //         </option>
    //         <option key="4" value="Director">
    //           Director
    //         </option>
    //       </select>
    //       <button
    //         onClick={toggleWindow}
    //         className="bg-orange-300 rounded-full p-2 ml-5"
    //       >
    //         +
    //       </button>
    //     </div>
    //     <div className="flex justify-center flex-wrap w-full">
    //       {renderData()}
    //     </div>
    //   </div>
    // </>
    <div className="bg-gray-700">
      {isWindowOpen && <Window toggleWindow={toggleWindow} />}
      <Header pageBackground={pageBackground} />
      <div
        className={`${pageBackground} p-8 min-h-screen flex flex-col items-center`}
      >
        <div className="mb-12 flex justify-center w-full max-w-3xl">
          <input
            type="text"
            className="border border-gray-300 h-12 px-4 text-lg outline-none rounded-l-lg w-2/3 focus:ring-2 focus:ring-orange-300 transition duration-300"
            placeholder="Enter a search"
            onChange={handleChange}
          />
          <select
            id="options"
            value={searchCategory}
            onChange={handleCategoryChange}
            className="border-t border-b border-r border-gray-300 h-12 px-4 text-lg outline-none bg-white text-gray-700 focus:ring-2 focus:ring-orange-300 transition duration-300"
          >
            <option key="1" value="Title">
              Name
            </option>
            <option key="2" value="Year">
              Release Date
            </option>
            <option key="3" value="Metascore">
              MetaScore
            </option>
            <option key="4" value="Director">
              Director
            </option>
          </select>
          <button
            onClick={toggleWindow}
            className="bg-orange-400 hover:bg-orange-500 text-white rounded-r-lg px-6 ml-0 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            +
          </button>
        </div>
        <div className="flex justify-center flex-wrap w-full max-w-7xl gap-6">
          {renderData()}
        </div>
      </div>
    </div>
  );
}
