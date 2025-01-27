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

async function app() {
  console.log(A());
  console.log(await B(true));
  console.log(C());  
 }
 app();
//console.log(A());
//B(true)
// .then(res => console.log(res))
// .catch(rej => console.log(rej));
 // Function B OK
// B(false)
// .then(res => console.log(res))
// .catch(rej => console.log(rej));

 //  console.log(C());