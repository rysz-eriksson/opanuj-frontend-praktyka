import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import { CharactersProvider } from './characterContext';
import SearchFormContainer from '../components/SearchFormContainer';

const TITLE_TEXT = "Wyszukiwarka postaci Rick and Morty"

function CharacterSearchContainer() {
  return (
    <>
      <div className="pt-20" />
      <SearchTitle titleText={TITLE_TEXT} />
      <div className="pt-8" />
      <CharactersProvider>
        <SearchFormContainer />
        <div className="pt-12" />
        <CharacterList />
      </CharactersProvider>
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
