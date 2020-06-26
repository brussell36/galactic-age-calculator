import { UserAge } from '../src/galactic-age';

describe('UserAge', () => {
  let userAge;

  beforeEach( () => {
    userAge = new UserAge(33, 90);
  });

  test('should determine if object holds a users age', () => {
    expect(userAge.age).toEqual(33);
  });

  test('should multiply user age by 365 to find amount of days lived and how many days are in life expectancy', () => {
    expect(userAge.findDays()).toEqual({"first": 12045, "second": 32850});
  });

  test('should take userDays variable and divide by number of days it takes Mercury to orbit sun,', () => {
    expect(userAge.merAge(12045, 32850)).toMatchObject({"first": 136.875, "second": 236.42045454545453});
    expect(userAge.merAge(35000, 32850)).toEqual(24.431818181818183);
  });

  test('should take userDays and divide by number of days Venus takes to orbit sun', () => {
    expect(userAge.venusAge(12045, 32850)).toMatchObject({"first": 53.53333333333333, "second": 92.46666666666667});
    expect(userAge.venusAge(35000, 32850)).toEqual(9.555555555555555);
  });

  test('should take userDays and divide by number of days Mars takes to orbit sun', () => {
    expect(userAge.marsAge(12045, 32850)).toMatchObject({"first": 17.532751091703055, "second": 30.283842794759824});
  });

  test('should determine how many years old a user would be on Jupiter', () => {
    expect(userAge.jupAge(12045, 32850)).toMatchObject({"first": 2.7966101694915255, "second": 4.830508474576271});
  });

  test('should determine how many years old a user would be on Saturn', () => {
    expect(userAge.satAge(12045, 32850)).toMatchObject({"first": 1.1224489795918366, "second": 1.9387755102040816});
  });

  test('shoud determine how many years old a user would be on Uranus', () => {
    expect(userAge.uraAge(12045, 32850)).toMatchObject({"first": 0.39285714285714285, "second": 0.6785714285714286});
  });

  test('should determine how many years old a user would be on Neptune', () => {
    expect(userAge.nepAge(12045, 32850)).toMatchObject({"first": 0.20121951219512196, "second": 0.3475609756097561});
  });

  test('should store a user input of life expectancy', () => {
    expect(userAge.lifeExpectancy).toEqual(90);
  });
});