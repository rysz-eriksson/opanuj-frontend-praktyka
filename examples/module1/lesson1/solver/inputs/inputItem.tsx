import { validate } from "../validator/validate"
import validators from "../validator/methods";
import { useState, Dispatch, SetStateAction, FC } from "react";


export const InputItem: FC<{setInputNumber: Dispatch<SetStateAction<number>>}> = ({setInputNumber}) => {
    const [error, setError] = useState("")
    const onChangeHandler = (value: number) => {
        const isValidMsg = validate(validators, value)
        if (isValidMsg) {
            setInputNumber(value)
        } else {
            setError(isValidMsg)
        }
    }

    return (
        <div>
            <input
            type="number"
            className="rounded-md shadow-md p-4"
            onChange={(e) => onChangeHandler(parseFloat(e.target.value))}
            />
            {Boolean(error.length) && <p>error</p>}
        </div>

    )
}