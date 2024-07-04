import { Character } from "../types/Character";

export const getSortedCharacters = (characters: Character[], sortOption: string|undefined) => {
    if (!sortOption || !characters.length) {
        return characters
    }

    return [...characters].sort((a, b) => {
        if (sortOption === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortOption === 'created') {
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        }
        return 0;
      });
}