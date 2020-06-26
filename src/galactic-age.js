export class UserAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  findDays() {
    const userDays = this.age * 365;
    const userDaysLeft = this.lifeExpectancy * 365;
    return {
      first: userDays, 
      second: userDaysLeft
    };
  }

  merAge(userDays, userDaysLeft) {
    const merYears = userDays / 88;
    const merLifeExpectancy = (userDaysLeft - userDays) / 88;
    if (userDays > userDaysLeft) {
      return (merYears - merLifeExpectancy) / 88;
    } else {
      return {
        first: merYears,
        second: merLifeExpectancy
      };
    }
  }

  venusAge(userDays, userDaysLeft) {
    const venusYears = userDays / 225;
    const venusLifeExpectancy = (userDaysLeft - userDays) / 225;
    return {
      first: venusYears,
      second: venusLifeExpectancy
    };
  }

  marsAge(userDays, userDaysLeft) {
    const marsYears = userDays / 687;
    const marsLifeExpectancy = (userDaysLeft - userDays) / 687;
    return {
      first: marsYears,
      second: marsLifeExpectancy
    };
  }

  jupAge(userDays, userDaysLeft) {
    const jupYears = userDays / (11.8 * 365);
    const jupLifeExpectancy = (userDaysLeft - userDays) / (11.8 * 365);
    return {
      first: jupYears,
      second: jupLifeExpectancy
    };
  }

  satAge(userDays, userDaysLeft) {
    const satYears = userDays / (29.4 * 365);
    const satLifeExpectancy = (userDaysLeft - userDays) / (29.4 * 365);
    return {
      first: satYears,
      second: satLifeExpectancy
    };
  }
  uraAge(userDays, userDaysLeft) {
    const uraYears = userDays / (84 * 365);
    const uraLifeExpectancy = (userDaysLeft - userDays) / (84 * 365);
    return {
      first: uraYears,
      second: uraLifeExpectancy
    };  
  }

  nepAge(userDays, userDaysLeft) {
    const nepYears = userDays / (164 * 365);
    const nepLifeExpectancy = (userDaysLeft - userDays) / (164 * 365);
    return {
      first: nepYears,
      second: nepLifeExpectancy
    }
  }

}