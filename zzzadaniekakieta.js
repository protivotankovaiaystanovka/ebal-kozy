// const C = 20
// const F1 = C * 1.8
// const F2 = F1 + 32
// console.log (F2)



// const a = 20
// const b = 15
// const c = 10
// const p = (a + b + c) / 2
// const S = Math.sqrt(p * (p - a) * (p - b) * (p - c))
// if ((a + b > c) && (a + c > b) && (b + c > a)) {
//     console.log ("он существуууууееееет");
//     console.log ("периметр:" + p)
//     console.log ("площадь:" + S)
//     console.log ("вы чо напридумывали я хз как это решать")
// } else {
//     console.log("он не существуууеетт")
// }


// for (let z = 0; z < 10; z ++) {
//     const element = z ;
//     if (z % 2 === 0){
//         console.log (z + " buzz")
//     } 
//     else if (z % 5 === 0) {
//         console.log (z + " fizz buzz")
//     }
//     else {
//         console.log (z + " fizz")
//     }
// }


// for (let z = 0; z < 16; z++) {
//     const element = z;
//     if (z === 15){
//         console.log ("||")
//         continue
//     }
//     if (z === 0){
//         console.log ('>')
//         continue
//     }
//     if (z % 2 === 0){
//         console.log ('*'.repeat(z))
//     }
//     if (z % 2 !== 0){
//         console.log ('#'.repeat(z))
//     }
// }



// for (let z = 15; z >= 0; z--) {
//     const element = z;
//     if (z === 15){
//         console.log ("||")
//         continue
//     }
//     if (z === 0){
//         console.log ('>')
//         continue
//     }
//     if (z % 2 === 0){
//         console.log ('*'.repeat(z))
//     }
//     if (z % 2 !== 0){
//         console.log ('#'.repeat(z))
//     }
// }


// const n = 6
// const x = 2
// const y = 3
// let trueorfalse = true
// if ((n % x === 0) &&(n % y === 0)) {
//     trueorfalse = true
// }
// else {
//     trueorfalse = false
// }
// console.log (trueorfalse)



// const priziv1 = [
//     12,
//     1,
//     2,
// ]
// const priziv2 = [
//     3,
//     4,
//     5,
// ]
// const priziv3 = [
//     6,
//     7,
//     8,
// ]
// const priziv4 = [
//     9,
//     10,
//     11,
// ]

// const zov = 7

// if (priziv1.includes(zov)){
//     console.log ('1 призыв')
// }
// if (priziv2.includes(zov)){
//     console.log ('2 призыв')
// }
// if (priziv3.includes(zov)){
//     console.log ('3 призыв')
// }
// if (priziv4.includes(zov)){
//     console.log ('4 призыв')
// }



let istoria_rassii = ''
let zov
for (let svo = 0; svo < 4; svo++) {
    const element = 2**svo;
    if (svo === 0){
    istoria_rassii = istoria_rassii + '1'
    continue
    } 
    istoria_rassii = istoria_rassii + ', ' + element.toString()
}
console.log (istoria_rassii)