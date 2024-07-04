import { FC, Dispatch, SetStateAction } from "react";
import { InputItem } from "./inputItem";

export const InputList: FC<{inputs: Dispatch<SetStateAction<number>>[]}> = ({inputs}) => {
    return (
        <div className="grid grid-cols-2 gap-x-4">
            {inputs.map(inputSetter => (
                <InputItem setInputNumber={inputSetter} />
            ))}
        </div>
    )
}