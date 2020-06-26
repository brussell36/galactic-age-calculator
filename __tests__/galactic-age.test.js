import { UserAge } from '../src/galactic-age';

describe('UserAge', () => {
  let userAge;

  beforeEach( () => {
    userAge = new UserAge(33);
  });

  test('should determine if object holds a users age', () => {
    expect(userAge.age).toEqual(33);
  });

  test('should multiply user age by 365 to find amount of days lived', () => {
    expect(userAge.findDays()).toEqual(12045);
  });

  test('should take userDays variable and divide by number of days it takes Mercury to orbit sun', () => {
    expect(userAge.merAge()).toEqual(136.875)
  });
});