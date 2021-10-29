const remoteURL = "http://localhost:8088"
const userId=sessionStorage.getItem("mcco_user")

export const getAllReads = () => {

  return fetch(`${remoteURL}/reads?userId=${userId}&_expand=comic`)
  .then(res => res.json())
}

export const getReadById = (readId) => {
  //be sure your reads have good data and related to a location and customer
  return fetch(`${remoteURL}/reads/${readId}?_expand=comic&_expand=movie`)
  .then(res => res.json())
}

export const deleteRead = (id) => {
  console.log(id)
  return fetch(`${remoteURL}/reads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isDeleted: true})
  }).then(res => res.json())
}
export const deleteMustRead = (id) => {
  console.log(id)
  return fetch(`${remoteURL}/category1/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isDeleted: true})
  }).then(res => res.json())
}

export const getAllCategories= () => {

  return fetch(`${remoteURL}/category1?userId=${userId}&_expand=comic`)
  .then(res => res.json())}

export const getAllComplete= () => {

    return fetch(`${remoteURL}/complete?userId=${userId}&_expand=comic`)
    .then(res => res.json())}

export const deleteComplete = (id) => {
      console.log(id)
      return fetch(`${remoteURL}/complete/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({isDeleted: true})
      }).then(res => res.json())
    }