// function add(a:number,b:number,c?:number):number{
//     return a+b
// }
// console.log(add(2,3,4))

const add = function(a:number,b:number,c?:number):number{
    if(typeof c ==='number'){
        return a+b+c
    }else{
        return a+b
    }
}
const add2:(a:number,b:number,c?:number)=>number=add