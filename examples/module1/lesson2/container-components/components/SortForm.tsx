import { FC } from "react";
import { useSearchActions } from "../containers/characterContext";
import { OptionsData } from "./FilterByGenderForm";

export const SortForm: FC = () => {
    const {setSort} = useSearchActions()

    const optionsData: OptionsData[] = [
        {
            label: "Initial",
            value: ""
        },
        {
            label: "Name",
            value: "name"
        },
        {
            label: "Created",
            value: "created"
        },
    ]

    return (
        <label className="flex flex-col">
        Sort by
        <select
          onChange={(e) => setSort(e.target.value)}
          className="border h-7 mt-1"
        >
            {optionsData.map(optionItem => <option value={optionItem.value}>{optionItem.label}</option>)}
        </select>
      </label>
    )
}