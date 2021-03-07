export default async function getPersonajes( { keyword } = { keyword: '' } ) {
  const apiUrl      = `https://rickandmortyapi.com/api/character/?name=${keyword}`;
  const res         = await fetch(apiUrl);
  const response    = await res.json();
  const { results } = response;
  const personajes  = results
  return personajes;
}
