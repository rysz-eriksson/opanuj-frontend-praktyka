import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
        expect(errors).toContain('First name has to have at least one character');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
        expect(errors).toContain('Last name has to have at least one character');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should throw an error if age is not a number', () => {
        expect(() => formValidator('John', 'Doe', '1')).to.Throw()
    })

    test('should return empty errors array if all validations pass', () => {
        const errors = formValidator('John', 'Doe', 16);
        expect(errors.length).to.eq(0)
    });
});