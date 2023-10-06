// User not register:
export const testCheckUserNotRegistered = (email: string) => {
  const testEmail = "mirakel@gmail.com";
  if (email == testEmail) {
    return false;
  } else {
    return true;
  }
};

// Password incorrect for specific user:
export const testCheckPasswordIncorrect = (email: string, password: string) => {
  const testEmail = "admin@gmail.com";
  const testPassword = "Test.1";
  if (email === testEmail && password === testPassword) {
    return false;
  } else {
    return true;
  }
};
