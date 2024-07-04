import type { FC } from "react";
import { CalculationType, NumbersManipulationFn } from "./dataManipulation";

type CalculateButtonItemProps = {
    computeNumbers: (func: NumbersManipulationFn) => void;
    calculationType: CalculationType
}


export const CalculateButtonItem: FC<CalculateButtonItemProps> = ({computeNumbers, calculationType}) => {
    const {calcFn, sign} = calculationType
    return (
        <button
        className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
        onClick={() => computeNumbers(calcFn)}
      >
        {sign}
      </button>
    )
}