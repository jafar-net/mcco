const remoteURL = "http://localhost:8088"

export const getComicById = (movieId) => {
  return fetch(`${remoteURL}/comics/${movieId}`)
  .then(res => res.json())
}

export const getAllComics = () => {
  return fetch(`${remoteURL}/comics`)
  .then(res => res.json())
}