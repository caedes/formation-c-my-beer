const responseToJson = (response) => response.json();

const apiUri = "//my-json-server.typicode.com/caedes/formation-c-my-beer";
// const apiUri = "//localhost:3001";

export default function cMyBeersFetch(route) {
  return () => fetch(`${apiUri}${route}`).then(responseToJson);
}
