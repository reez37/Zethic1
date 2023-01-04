const func = require('./func');
data = "5 5\n1 2 N\nLFLFLFLFF"
data1 = "5 5\n1 2 N\nLFLFLFLFF\n3 3 E\nFFRFFRFRRF"
data2 = "5 5\n1 2 N\nLFLFLFLFFFFFF"
data3 = "5 5\n1 2 B\nLFLFLFLFFFFFF"


test('to check the right output', () => {
  expect(func(data)).toStrictEqual(["1 3 N"]);
});
test('to check the right output for multi input of 2 or more robots' , () => {
  expect(func(data1)).toStrictEqual(["1 3 N","5 1 E"]);
});
test('to check when the robot tries to go out specified room size', () => {
  expect(func(data2)).toStrictEqual(["Robot has hit the wall 🙄"]);
});
test('to check the output when we enter wrong location', () => {
  expect(func(data3)).toStrictEqual(["I dint get you 🤷‍♂️"]);
});



