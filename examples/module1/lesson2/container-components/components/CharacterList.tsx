import { useGetCharacters } from '../containers/characterContext';
import { CharacterItem } from './CharacterItem';

function CharacterList() {
  const {data, error, loading} = useGetCharacters();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error("Error fetching data...", error)
    return <div>Something went wrong...</div>
  }
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.characters.map((character) => (
        <CharacterItem character={character} />
      ))}
    </ol>
  );
}

export default CharacterList;
