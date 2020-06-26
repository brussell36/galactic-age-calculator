export class UserAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  findDays() {
    const userDays = this.age * 365;    
    return userDays;
  }

  findDaysLeft() {
    const userDaysLeft = this.lifeExpectancy * 365;
    return userDaysLeft;
  }

  merAge(userDays) {
    const merYears = userDays / 88;
    return merYears;
  }

  merYearsLeft(userDaysLeft, userDays) {
    const merLifeExpectancy = (userDaysLeft - userDays) / 88;
    return merLifeExpectancy;
  }

  venusAge(userDays) {
    const venusYears = userDays / 225;
    return venusYears;
  }

  marsAge(userDays) {
    const marsYears = userDays / 687;
    return marsYears;
  }

  jupAge(userDays) {
    const jupYears = userDays / (11.8 * 365);
    return jupYears;
  }

  satAge(userDays) {
    const satYears = userDays / (29.4 * 365);
    return satYears;
  }

  uraAge(userDays) {
    const uraYears = userDays / (84 * 365);
    return uraYears;
  }

  nepAge(userDays) {
    const nepYears = userDays / (164 * 365);
    return nepYears;
  }

  yearsLeft(userDaysLeft, userDays) {
    const yearsRemaining = (userDaysLeft - userDays) / 365;
    return yearsRemaining;
  }
}