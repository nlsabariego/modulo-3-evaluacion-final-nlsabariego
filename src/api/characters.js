export default () => {
  return fetch("https://rickandmortyapi.com/api/character/").then(response => response.json().then(responseData => responseData.results));
};
