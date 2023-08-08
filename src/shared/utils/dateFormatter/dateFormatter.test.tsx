import dateFormatter from './dateFormatter';

describe('dateFormatter', () => {
  test('formats date correctly', () => {
    // Define una fecha específica para probar
    const testDate = new Date('2023-08-08T12:00:00Z');

    // Llama a la función dateFormatter con la fecha de prueba
    const formattedDate = dateFormatter(testDate);

    // Define el resultado esperado basado en la fecha de prueba
    const expectedFormattedDate = 'August 8, 2023';

    // Verifica si el resultado de la función coincide con el resultado esperado
    expect(formattedDate).toBe(expectedFormattedDate);
  });
});
