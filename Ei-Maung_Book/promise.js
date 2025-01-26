function A() {
  return "Function A";
 }
 function B(ok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(ok) {
        resolve("Function B OK");
      } else {
        reject("Function B Fails");
      }
    }, 2000);
  });
 }
 function C() {
  return "Function C";
 }

console.log(A());
 B().then(res => {
  console.log(res);
  console.log(C());
 });