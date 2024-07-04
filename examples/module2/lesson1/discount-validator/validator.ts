export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {

  if (typeof age !== "number") {
    throw new Error("Age has to be a number")
  }
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (firstName.length === 0) {
    errors.push('First name has to have at least one character')
  } 

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName.length === 0) {
    errors.push('Last name has to have at least one character')
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
