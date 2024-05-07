// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// For phone number
test('validates typical phone numbers 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('validates typical phone numbers 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('rejects invalid phone numbers 1', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});
test('rejects invalid phone numbers 2', () => {
  expect(isPhoneNumber('abc-4567-890')).toBe(false);
});

//For email
test('validates emails 1', () => {
  expect(isEmail('email@example.com')).toBe(true);
});
test('validates emails 2', () => {
  expect(isEmail('jboenjamin@ucsd.edu')).toBe(true);
});
test('rejects bad emails 1', () => {
  expect(isEmail('email@example..com')).toBe(false);
});
test('rejects bad emails 2', () => {
  expect(isEmail('name.lastname@example.co.uk')).toBe(false); 
});

// checks passwords
test('accepts strong password 1', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
});
test('accepts strong password 2', () => {
  expect(isStrongPassword('Abcdef12345')).toBe(true);
});
test('rejects invalid password 1', () => {
  expect(isStrongPassword('jb')).toBe(false);
});
test('rejects invalid password 1', () => {
  expect(isStrongPassword('1234567890987654321')).toBe(false); 
});

// For valid dates
test('validate correct date 1', () => {
  expect(isDate('1/1/2024')).toBe(true);
  
});
test('validate correct date 2', () => {
  expect(isDate('12/31/2024')).toBe(true);  
});
test('rejects incorrect date 1', () => {
  expect(isDate('2020-12-31')).toBe(false); 
});
test('rejects incorrect date 2', () => {
  expect(isDate('1-1-2020')).toBe(false); 
});

//For valid hex colors
test('accept valid hex color 1', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('accept valid hex color 2', () => {
  expect(isHexColor('#123456')).toBe(true);
});
test('reject invalid hex color 1', () => {
  expect(isHexColor('#JJJ')).toBe(false);
});
test('reject invalid hex color 2', () => {
  expect(isHexColor('#1234')).toBe(false); 
});