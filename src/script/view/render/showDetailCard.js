const showMovieDetail = (m) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  function getGenres(arr) {
    let genre = "";
    for (let a of arr) {
      genre += a.name;
      genre += ", ";
    }
    return genre;
  }
  function getRating(m) {
    return Math.round(m * 100) / 100;
  }
  return `<div class="flex">
              <h3>Movie Details</h3>
              <i class="fi fi-ss-cross-circle close-btn"></i>
            </div>
            <div class="movie-detail">
              <div class="image-detail">
                  <img src="${imagePath + m.poster_path}" alt="">
              </div>
              <div class="text-detail">
                  <p>${getGenres(m.genres)}</p>
                  <h1>${m.title}</h1>
                  <p>release date : ${m.release_date}</p>
                  <h3>Overview</h3>
                  <p>${m.overview}</p>
                  <div class="flex">
                      <div class="duration-rating">
                          <i class="fi fi-ss-clock"></i>
                          <p>${m.runtime} min</p>
                      </div>
                      <div class="duration-rating">
                          <i class="fi fi-ss-star"></i>
                          <p>${getRating(m.vote_average)}</p>
                      </div>
                  </div>
              </div>
            </div>`;
};

export default showMovieDetail;
