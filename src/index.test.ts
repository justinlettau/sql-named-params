import { convert } from '.';

describe('convert method', () => {
  test('should replace named parameters with placeholders', () => {
    const sql = 'SELECT heros WHERE lastName = :lastName AND age <= :age';
    const params = {
      lastName: 'Skywalker',
      age: 30,
    };
    const result = convert(sql, params);

    expect(result).toEqual({
      query: 'SELECT heros WHERE lastName = ? AND age <= ?',
      values: ['Skywalker', 30],
    });
  });

  test('should handle duplicate named params', () => {
    const sql = 'SELECT heros WHERE saberColor = :color OR eyeColor = :color';
    const params = {
      color: 'green',
    };
    const result = convert(sql, params);

    expect(result).toEqual({
      query: 'SELECT heros WHERE saberColor = ? OR eyeColor = ?',
      values: ['green', 'green'],
    });
  });
});
