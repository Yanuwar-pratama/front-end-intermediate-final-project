const getGenres = (arr) => {
  let genre = "";
  for (a of arr) {
    genre += a.name;
    genre += ", ";
  }
  return genre;
};

export default getGenres;
