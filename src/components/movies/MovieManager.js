const remoteURL = "http://localhost:8088"

export const getMovieById = (movieId) => {
  return fetch(`${remoteURL}/movies/${movieId}?_expand=comic`)
    .then(res => res.json())
}

export const getAllMovies = () => {
    return fetch(`${remoteURL}/movies`)
    .then(res => res.json())
  }

  export const getAllMovies2 = () => {
    return fetch(`${remoteURL}/movies2`)
    .then(res => res.json())
  }