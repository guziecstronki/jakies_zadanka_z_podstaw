const tab = [0,1]

const fib = (n) => n <= 1 ? 1 : fib(n-1) + fib(n-2)

for (let i = 0; i < 4; i++) {
  const current = tab[0+i]
  const current2 = tab[1+i]
  tab.push(current + current2)
}
console.log(tab);

const tab2 = []
for (let i = 0; i < 100; i++) {
  let current = 2 ** i
  tab2.push(current)
}
// console.log(tab2)
console.log();
const tab3 = []
for (let i = 1; i <= 100; i++) {
  tab3.push(i*3)
}
console.log(tab3);

const tab4 = []
let current3 = 1
for (let i = 1; i <= 100; i++) {
  current3 *= 2 
  tab4.push(current3)
}
console.log(tab4);