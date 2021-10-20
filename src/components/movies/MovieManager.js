const remoteURL = "http://localhost:8088"

export const getAllMovies = () => {
    return fetch(`${remoteURL}/movies`)
    .then(res => res.json())
  }

  export const getMovieById = (movieId) => {
    return fetch(`${remoteURL}/Movies/${movieId}`)
    .then(res => res.json())
}