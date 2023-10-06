import { validateEmail } from '../../shared/utils/regex/regexValidate'; // Ajusta la ruta según tu estructura

describe('validateEmail', () => {
  it('should return true for a valid email', () => {
    const validEmails = [
      'test@example.com',
      'hello.world@example.com',
      'test.email123@example.co',
    ];

    validEmails.forEach(email => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  it('should return false for an invalid email', () => {
    const invalidEmails = [
      'invalid',
      'invalid@domain',
      'invalid@.com',
      'invalid@domain.',
    ];

    invalidEmails.forEach(email => {
      expect(validateEmail(email)).toBe(false);      
    });
  });
});
