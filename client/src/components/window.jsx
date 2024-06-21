import { useState } from "react";
import axios from "axios";

export default function Window({ toggleWindow }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [metaScore, setMetaScore] = useState("");
  const [img, setImg] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  

  var newFilm = {
    _id: String,
    Title: String,
    Year: String,
    Director: String,
    Images: Array,
    Metascore: String,
  };
  const handleOnchange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (loadEvent) {
      setFile(changeEvent.target.files[0]);
      setImageSrc(loadEvent.target.result);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newFilm.Title = title;
    newFilm.Year = year;
    newFilm.Director = director;
    newFilm.Metascore = metaScore;
    newFilm.Images = ["1"];
    newFilm._id = title;

    //IMAGE CREATION
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "food-ordering");
    axios
      .post("https://api.cloudinary.com/v1_1/dp5whpvw0/image/upload", formData)
      .then((res) => {
        setImageUrl(res.data.url);

        console.log("res.data.url", res.data.url);

        newFilm.Images[0] = res.data.url;
        console.log(newFilm.Images[0]);
        axios
          .post("http://localhost:5000/films", newFilm)
          .then((res) => {
            console.log(res.data)
            toggleWindow()
          })
          .catch(() => console.log("Data not posted"));
      })
      .catch(() => console.log("Error in Post"));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 h-[600px] w-[600px] rounded-lg relative shadow-lg">
        <button
          onClick={toggleWindow}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">Create a New Film</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name:</label>
              <input
                type="text"
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="releaseDate" className="block font-medium mb-1">Release Date:</label>
              <input
                type="text"
                id="releaseDate"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="director" className="block font-medium mb-1">Director:</label>
              <input
                type="text"
                id="director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="metaScore" className="block font-medium mb-1">MetaScore:</label>
              <input
                type="text"
                id="metaScore"
                value={metaScore}
                onChange={(e) => setMetaScore(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
  
            <div>
              <label htmlFor="image" className="block font-medium mb-1">Image:</label>
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  setImg(e.target.value);
                  handleOnchange(e);
                }}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
              {/* {imageSrc && <img src={imageSrc} alt="Film preview" className="mt-4" />} */}
            </div>
  
            <button
              type="submit"
              className="self-start bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  ); }
  

