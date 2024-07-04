import { FC } from "react";
import { CalculateButtonItem } from "./calculateButtonItem"
import { NumbersManipulationFn, calculationsList } from "./dataManipulation"

export const CalculateButtonsList: FC<{computeNumbers: (func: NumbersManipulationFn) => void;}> = ({computeNumbers}) => {
    return (
        <div className="grid grid-cols-4 gap-x-4 my-4">
            {calculationsList.map(calcItem => (
                <CalculateButtonItem 
                    calculationType={calcItem}
                    computeNumbers={computeNumbers}
                />))}
        </div>
    )
}