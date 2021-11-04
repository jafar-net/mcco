const remoteURL = "http://localhost:8088"


export const getAllReads = (id) => {

  return fetch(`${remoteURL}/reads?userId=${id}&?isCompleted=false&_expand=comic`)
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

export const getAllCategories= (id) => {

  return fetch(`${remoteURL}/category1?userId=${id}&_expand=comic`)
  .then(res => res.json())}

    export const Completes = (id) => {
      return fetch(`${remoteURL}/reads/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
              isCompleted: true
          }),
          headers: {
              "Content-type": "application/json"
          }
      }).then(res => res.json())
  }
