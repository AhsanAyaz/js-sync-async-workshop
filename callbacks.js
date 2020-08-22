console.log("App started");

setTimeout(function () {
  calculate(5, 6);
}, 5000);

console.log("App closed");

function calculate(num1, num2) {
  const a = num1;
  const b = num2;
  const c = a + b;
  console.log(c);
}
