import { INVALID, VALID } from "./messages"

export const validate = (validators: ((value: number) => boolean)[], value: number) => {
 const valid = validators.every(validateFn => validateFn(value))
 if (valid) {
    return VALID
 }  
 return INVALID 
}