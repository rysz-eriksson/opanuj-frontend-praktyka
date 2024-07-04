import { FC } from "react";
import { useSearchActions } from "../containers/characterContext";

export type OptionsData = {
    value: string;
    label: string
}

export const FilterByGenderForm: FC = () => {
    const {setGenderFilter} = useSearchActions()

    const optionsData: OptionsData[] = [
        {
            label: "Any Gender",
            value: ""
        },
        {
            label: "Female",
            value: "female"
        },
        {
            label: "Male",
            value: "male"
        },
        {
            label: "Genderless",
            value: "genderless"
        },
        {
            label: "Unknown",
            value: "unknown"
        },
    ]

    return (
        <label className="flex flex-col">
        Gender
        <select
          onChange={(e) => setGenderFilter(e.target.value)}
          className="border h-7 mt-1"
        >
            {optionsData.map(optionItem => <option value={optionItem.value}>{optionItem.label}</option>)}
        </select>
      </label>
    )
}