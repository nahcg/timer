var args = process.argv.slice(2);

const numbers = args.map(arg => Number(arg))
const args1 = numbers.filter(num => {
  return isNaN(num) !== true && num > 0
});
for (const delay of args1) {
  setTimeout(() => {
  process.stdout.write('.');
  }, delay * 1000);
};
