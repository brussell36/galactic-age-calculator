export class UserAge {
  constructor(age) {
    this.age = age;
  }

  findDays() {
    let userDays = this.age * 365;
    return userDays;
  }

  merAge(userDays) {
    let merYears = userDays / 88;
    return merYears;
  }
}