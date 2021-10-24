import { sortPeopleByHealth } from '../app';

test('Проверка сортировки героев по уровню жизни', () => {
  const unsortedPeople = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortPeopleByHealth(unsortedPeople);

  expect(result).toEqual(expected);
});
