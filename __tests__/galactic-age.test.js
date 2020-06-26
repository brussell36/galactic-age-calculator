import { UserAge } from '../src/galactic-age';

describe('UserAge', () => {
  let userAge;

  beforeEach( () => {
    userAge = new UserAge(33);
  });

  test('should determine if object holds a users age', () => {
    expect(userAge.age).toEqual(33);
  });
});