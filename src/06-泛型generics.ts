//第一个泛型函数
function echo<t>(val:t):t{
    return val
}
const result=echo(true)
//第二个泛型函数多个参数的情况
function moerCan<T,U>(arr:[T,U]):[U,T]{
    return [arr[1],arr[0]]
}
const result2=moerCan(['str',1])
//第三个函数约束泛型
function withlength<T>(arr:T[]):T[]{
    console.log(arr.length)
    return arr
}
const result3=withlength([1,2,3])

interface widthlengthNumber {
    length:number
}
function widthlengthType<T extends widthlengthNumber>(el:T):T{
    console.log(el.length)
    return el
}
console.log(widthlengthType('str'))
console.log(widthlengthType([1,2,3]))
console.log(widthlengthType({ length: 10, width: 10}))
//第四个函数约束class函数
class Queue<T> {
    private data = [];
    push(item: T) {
      return this.data.push(item)
    }
    pop(): T {
      return this.data.shift()
    }
}
  
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

//最后一个修饰函数
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "str" }
let kp2: KeyPair<string, number> = { key: 'test', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

interface IPlus<T> {
(a: T, b: T) : T
}
function plus(a: number, b: number): number {
return a + b;
}
function connect(a: string, b: string): string {
return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect