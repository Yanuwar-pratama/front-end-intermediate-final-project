const showcard = (m) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  function getRating(m) {
    return Math.round(m * 100) / 100;
  }
  return `<div class="card">
                  <div class="img-container">
                      <img src="${imagePath + m.poster_path}" alt="">
                  </div>
                  <h3>${m.title}</h3>
                  <div class="rating-wrapper">
                      <p>${m.release_date.slice(0, 4)}</p>
                      <p><i class="fi fi-ss-star"></i> ${getRating(
                        m.vote_average
                      )}</p>
                  </div>
                  <button class="detail-btn" value="${
                    m.id
                  }">Movie Detail</button>
              </div>`;
};

export default showcard;
