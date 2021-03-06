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
      return (userDays - userDaysLeft) / 88;
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
    if (userDays > userDaysLeft) {
      return (userDays - userDaysLeft) / 225;
    } else {
      return {
        first: venusYears,
        second: venusLifeExpectancy
      };
    }
  }

  marsAge(userDays, userDaysLeft) {
    const marsYears = userDays / 687;
    const marsLifeExpectancy = (userDaysLeft - userDays) / 687;
    if (userDays > userDaysLeft) {
      return (userDays - userDaysLeft) / 687;
    } else {
      return {
        first: marsYears,
        second: marsLifeExpectancy
      };
    }
  }

  jupAge(userDays, userDaysLeft) {
    const jupYears = userDays / (11.8 * 365);
    const jupLifeExpectancy = (userDaysLeft - userDays) / (11.8 * 365);
    if (userDays > userDaysLeft) {
      return (userDays - userDaysLeft) / (11.8 * 365);
    } else {
      return {
        first: jupYears,
        second: jupLifeExpectancy
      };
    }
  }

  satAge(userDays, userDaysLeft) {
    const satYears = userDays / (29.4 * 365);
    const satLifeExpectancy = (userDaysLeft - userDays) / (29.4 * 365);
    if (userDays > userDaysLeft) {
      return (userDays - userDaysLeft) / (29.4 * 365);
    } else {
      return {
        first: satYears,
        second: satLifeExpectancy
      };
    }
  }
  uraAge(userDays, userDaysLeft) {
    const uraYears = userDays / (84 * 365);
    const uraLifeExpectancy = (userDaysLeft - userDays) / (84 * 365);
    if (userDays > userDaysLeft) {
      return (userDays - userDaysLeft) / (84 * 365);
    } else {
      return {
        first: uraYears,
        second: uraLifeExpectancy
      };
    }  
  }

  nepAge(userDays, userDaysLeft) {
    const nepYears = userDays / (164 * 365);
    const nepLifeExpectancy = (userDaysLeft - userDays) / (164 * 365);
    if (userDays > userDaysLeft) {
      return (userDays - userDaysLeft) / (164 * 365);
    } else {
      return {
        first: nepYears,
        second: nepLifeExpectancy
      };
    }
  }
}
