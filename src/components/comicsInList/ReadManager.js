// import { useHistory } from "react-router-dom";
// import React, { useState, useEffect } from 'react';

const remoteURL = "http://localhost:8088"
const userId=sessionStorage.getItem("mcco_user")

export const getAllReads = () => {

  return fetch(`${remoteURL}/reads?userId=${userId}&?_embed=comic`)
  .then(res => res.json())
}

export const getReadById = (readId) => {
  //be sure your reads have good data and related to a location and customer
  return fetch(`${remoteURL}/reads/${readId}?_expand=comic&_expand=movie`)
  .then(res => res.json())
}

// const addcomic = (newComic) => {
//     return fetch(`${remoteURL}/comics`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newComic)
//     }).then(response => response.json())
// }

// export const addNewComic = event => {
//     const history = useHistory();  
//     addcomic(comic)
//     .then(() => history.push("/reading_list"))
// };
