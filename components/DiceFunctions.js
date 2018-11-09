const d20 = require('d20');

//Dice Functions:
// export default {
//   roll100 = () => d20.roll('1d100'),
//   roll20 = () => d20.roll(20),
//   roll12 = () => d20.roll('1d12'),
//   roll10 = () => d20.roll('1d10'),
//   roll8 = () => d20.roll('1d8'),
//   roll6 = () => d20.roll('1d6'),
//   roll4 = () => d20.roll('1d4'),
// }

// export default roll100() {d20.roll('1d100')}
// export default roll20() {d20.roll(20)}
// export default roll12() {d20.roll('1d12')}
// export default roll10() {d20.roll('1d10')}
// export default roll8() {d20.roll('1d8')}
// export default roll6() {d20.roll('1d6')}
// export default roll4() {d20.roll('1d4')}

module.exports = function roll100() {return d20.roll('1d100')};
module.exports = function roll20() {return d20.roll(20)}
module.exports = function roll12() {return d20.roll('1d12')}
module.exports = function roll10() {return d20.roll('1d10')}
module.exports = function roll8() {return d20.roll('1d8')}
module.exports = function roll6() {return d20.roll('1d6')}
module.exports = function roll4() {return d20.roll('1d4')}

// export default roll100, roll20, roll12, roll10, roll8, roll6, roll4
