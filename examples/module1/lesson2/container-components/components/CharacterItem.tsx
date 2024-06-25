import { FC } from "react";
import { Character } from "../types/Character";

export const CharacterItem: FC<{character: Character}> = ({character}) => {
    return (
        <li key={character.id} className="flex flex-col items-center">
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
        </li>
    )
}