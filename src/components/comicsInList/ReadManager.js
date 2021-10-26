// import { useHistory } from "react-router-dom";
// import React, { useState, useEffect } from 'react';

const remoteURL = "http://localhost:8088"

export const getAllReads = () => {
  return fetch(`${remoteURL}/reads`)
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
