import Link from 'next/link'

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Mi App de Pokemones</p>
      <ul>
          {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
      </ul>
    </div>
    
  )
}
// Funcion para indicarle a Next que esta pagina tendrá un renderizado estatico a la hora de computar el comando "NPM RUN BUILD"
export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return{
    props: { pokemones: data.results }
  }
}
