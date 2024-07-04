import { FC, ReactNode, createContext, useContext, useMemo, useReducer } from "react";
import { Character } from "../types/Character";
import { useGetCharactersList } from "../utils/useGetChasractersList";
import { getSortedCharacters } from "../utils/getSortedCharacters";

type SearchFilterSort = {
    genderFilter: string;
    nameSearch: string;
    sort: string;
}

type CharactersState = {
    searchFilterSort: SearchFilterSort;
    charactersQuery: {
        loading: boolean;
        error: Error|undefined;
        data: {
            characters: Character[]
        }
    }
}

enum UpdateSearchFilterSortActionType {
    SET_NAME_SEARCH = "SET_NAME_SEARCH",
    SET_GENDER_FILTER = "SET_GENDER_FILTER",
    SET_SORT = "SET_SORT"
}

type UpdateSearchFilterSortAction =
    | { type: UpdateSearchFilterSortActionType.SET_NAME_SEARCH; payload: string; }
    | { type: UpdateSearchFilterSortActionType.SET_GENDER_FILTER; payload: string ; }
    | { type: UpdateSearchFilterSortActionType.SET_SORT; payload: string; };

const initialSearchFilterSort = {
    genderFilter: "",
    nameSearch: "",
    sort: "",
}

const initialCharactersState: CharactersState = {
    searchFilterSort: initialSearchFilterSort,
    charactersQuery: {
        loading: false,
        error: undefined,
        data: {characters: []}
    }
}

const CharactersContext = createContext<{
    charactersState: CharactersState;
    searchFilterSortDispatch: React.Dispatch<UpdateSearchFilterSortAction>;
}>({
    charactersState: initialCharactersState,
    searchFilterSortDispatch: () => {}
});

const searchFilterSortReducer = (state: SearchFilterSort, action: UpdateSearchFilterSortAction) => {
    switch(action.type) {
        case UpdateSearchFilterSortActionType.SET_NAME_SEARCH:
            return {
                ...state,
                nameSearch: action.payload
            }
        case UpdateSearchFilterSortActionType.SET_GENDER_FILTER:
            return {
                ...state,
                genderFilter: action.payload
            }
        case UpdateSearchFilterSortActionType.SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state
    }
}

const CharactersProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [searchFilterSort, searchFilterSortDispatch] = useReducer(
        searchFilterSortReducer,
        initialSearchFilterSort
    );

    const {genderFilter, nameSearch, sort} = searchFilterSort

    const {error, data, loading} = useGetCharactersList(nameSearch, genderFilter)

    const sortedCharacters = useMemo(() => {
        return getSortedCharacters(data.characters, sort)
    }, [data.characters.length, sort])

    

    return (
        <CharactersContext.Provider value={{
            charactersState: {
                searchFilterSort,
                charactersQuery: {
                    error,
                    loading,
                    data: {characters: sortedCharacters}
                }
            },
            searchFilterSortDispatch
        }}>
            {children}
        </CharactersContext.Provider>
    );
};

const useGetCharacters = () => {
    const {charactersState} = useContext(CharactersContext)

    return charactersState.charactersQuery
}

const useSearchActions = () => {
    const {searchFilterSortDispatch} = useContext(CharactersContext)

    const setNameSearch = (payload: string) => searchFilterSortDispatch({type: UpdateSearchFilterSortActionType.SET_NAME_SEARCH, payload})
    const setGenderFilter = (payload: string) => searchFilterSortDispatch({type: UpdateSearchFilterSortActionType.SET_GENDER_FILTER, payload})
    const setSort = (payload: string) => searchFilterSortDispatch({type: UpdateSearchFilterSortActionType.SET_SORT, payload})

    return {setNameSearch, setGenderFilter, setSort}
}

export {CharactersProvider, useGetCharacters, useSearchActions}