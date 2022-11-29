// let
// if(true){
//     let name = 'jack'
// }
// console.log(name)
// for (var x=1; x<3; x++)
// {
//     console.log(x)
// }console.log(x)

// function varTest(){
//     var x = 1
//     if(true){
//         var x = 2
//         console.log(x)
//     }console.log(x)
// }

// function letTest(){
//     let x = 1
//     if(true){
//         let x = 2
//         console.log(x)
//     }console.log(x)
// }

// varTest()
// letTest()

// constant immutable
// const a = 10;
// a = 11
// console.log(a)

// template literal
// let nama = 'David'
// let msg = 'welcome '+ nama +' !';
// let msg = `welcome ${nama} !`
// console.log(msg)

// let a = 8
// let b = 9
// let msg = `The sum is ${a+b}`
// console.log(msg)

// looping
// let arr = [0,1,2]
// for(let x=0;x<arr.length;x++ ){
//     console.log(arr[x])
// }

// let obj = {a:1, b:2, c:3}
// for(let v in obj){
//     console.log(v);
// }

// list = ["x","y","z"];
// for(let val of list){
//     console.log(val)
// }

// for(let ch of "Asep"){
//     console.log(ch);   
// }
let lulus = () => {
    let jumlah = 0;
    let nilai = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63]
    for(let s of nilai){
        if(s>=70){
            jumlah+=1;1111
        }
    }
    console.log(`jumlah siswa = ${nilai.length}`)
    console.log(`jumlah siswa yang lulus = ${jumlah}`)
}

lulus()
