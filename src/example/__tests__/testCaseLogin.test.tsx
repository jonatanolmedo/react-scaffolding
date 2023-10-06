import { testCheckUserNotRegistered, testCheckPasswordIncorrect } from '../../shared/utils/testCaseLogin/testCaseLogin'; // Ajusta la ruta según tu estructura

describe('testCheckUserNotRegistered', () => {
  it('should return false for a registered user', () => {
    const registeredEmail = 'mirakel@gmail.com';
    expect(testCheckUserNotRegistered(registeredEmail)).toBe(false);
  });

  it('should return true for an unregistered user', () => {
    const unregisteredEmail = 'random@example.com';
    expect(testCheckUserNotRegistered(unregisteredEmail)).toBe(true);
  });
});

describe('testCheckPasswordIncorrect', () => {
  it('should return false for correct email and password', () => {
    const correctEmail = 'admin@gmail.com';
    const correctPassword = 'Test.1';
    expect(testCheckPasswordIncorrect(correctEmail, correctPassword)).toBe(false);
  });

  it('should return true for incorrect email or password', () => {
    const incorrectEmail = 'invalid@gmail.com';
    const incorrectPassword = 'InvalidPassword';
    expect(testCheckPasswordIncorrect(incorrectEmail, incorrectPassword)).toBe(true);
  });
});
