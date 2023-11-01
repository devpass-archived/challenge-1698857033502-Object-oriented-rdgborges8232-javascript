const Rectangle = require('./Rectangle');

test('Get width of Rectangle instance', () => {
  const rectangle = new Rectangle(5, 7);
  expect(rectangle.getWidth()).toBe(5);
});

test('Get height of Rectangle instance', () => {
  const rectangle = new Rectangle(5, 7);
  expect(rectangle.getHeight()).toBe(7);
});

test('Get area of Rectangle instance', () => {
  const rectangle = new Rectangle(5, 7);
  expect(rectangle.getArea()).toBe(35);
});