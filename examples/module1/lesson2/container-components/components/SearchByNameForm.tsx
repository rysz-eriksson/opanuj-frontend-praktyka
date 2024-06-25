import { FC } from "react"
import { useSearchActions } from "../containers/characterContext"

export const SearchByNameForm: FC = () => {
    const {setNameSearch} = useSearchActions()
    return (
        <label className="flex flex-col">
        Name
        <input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Rick Sanchez..."
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </label>
    )
}