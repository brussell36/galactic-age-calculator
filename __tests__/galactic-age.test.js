import { UserAge } from '../src/galactic-age';

describe('UserAge', () => {
  let userAge;

  beforeEach( () => {
    userAge = new UserAge(33, 90);
  });

  test('should determine if object holds a users age', () => {
    expect(userAge.age).toEqual(33);
  });

  test('should multiply user age by 365 to find amount of days lived', () => {
    expect(userAge.findDays()).toEqual(12045);
  });

  test('should take userDays variable and divide by number of days it takes Mercury to orbit sun', () => {
    expect(userAge.merAge(12045)).toEqual(136.875);
  });

  test('should take userDays and divide by number of days Venus takes to orbit sun', () => {
    expect(userAge.venusAge(12045)).toBeCloseTo(53.5333);
  });

  test('should take userDays and divide by number of days Mars takes to orbit sun', () => {
    expect(userAge.marsAge(12045)).toBeCloseTo(17.5327);
  });

  test('should determine how many years old a user would be on Jupiter', () => {
    expect(userAge.jupAge(12045)).toBeCloseTo(2.7966);
  });

  test('should determine how many years old a user would be on Saturn', () => {
    expect(userAge.satAge(12045)).toBeCloseTo(1.1222);
  });

  test('shoud determine how many years old a user would be on Uranus', () => {
    expect(userAge.uraAge(12045)).toBeCloseTo(0.3928);
  });

  test('should determine how many years old a user would be on Neptune', () => {
    expect(userAge.nepAge(12045)).toBeCloseTo(0.2012);
  });

  test('should store a user input of life expectancy', () => {
    expect(userAge.lifeExpectancy).toEqual(90);
  });

  test('should determine how many user has left to live on Mercury', () => {
    expect(userAge.yearsLeft(32850, 12045)).toEqual(57);
  });

  test('should determine how many years a user has left on Mercury', () => {
    expect(userAge.merYearsLeft(32850, 12045)).toBeCloseTo(236.4204);
  });
});