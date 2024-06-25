export type NumbersManipulationFn = (a: number, b: number) => number
export type CalculationType = {
  sign: string;
  calcFn: NumbersManipulationFn
}

const sum: NumbersManipulationFn = (a, b) => {
  return a + b;
}
const extract: NumbersManipulationFn = (a, b) => {
  return a - b;
}
const multiply: NumbersManipulationFn = (a, b) => {
  return a * b;
}

const divide: NumbersManipulationFn = (a, b) => {
  return a / b;
}

export const calculationsList: CalculationType[] = [
    {
  sign: "+",
  calcFn: sum
  },
    {
  sign: "-",
  calcFn: extract
  },
    {
  sign: "*",
  calcFn: multiply
  },
    {
  sign: "/",
  calcFn: divide
  },
]

