import { useEffect, useState } from "react";
import { Character } from "../types/Character";

export const useGetCharactersList = (name: string, gender: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<undefined| Error>(undefined);
    const [data, setData] = useState<{characters: Character[]}>({characters: []})
    useEffect(() => {
      console.log("called")
        setLoading(true)
        if (name || gender) {
          fetch(
            `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
          )
            .then((response) => response.json())
            .then((data) => {
                setLoading(false)
                setData({ characters: data.results || []})
            })
            .catch((error) => {
                setLoading(false)
                setError(new Error(error))
            });
        }
      }, [name, gender]);

      return {
        loading,
        error,
        data
      }
}