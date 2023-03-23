 let v ='   '
 //array
 //array.at :lấy một giá trị số nguyên và trả về mục tại chỉ mục đó, 
 //cho phép số nguyên dương và âm. Số nguyên âm đếm ngược từ mục cuối cùng trong mảng.
 const array =[1,5,76,2,1];


 const result = array.find((e,idx)=> idx===0);
console.log(result)
 //array.concat :noi hai mangr
 const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
const arr1 = ['k','j','h'];
const arr2 =['g','e','r'];
const arr3 = arr1.concat(arr2);
console.log(arr3);
///
const arri1 = ['k','j','h','r','l'];
/*const saochep=arri1.copyWithin(2,1);
console.log(saochep);\
*/
const gan =arri1.entries();
console.log(gan.next().value);
console.log(gan.next().value);
//
//const gt =[2,4,1,7,8,9];
//const k =(ganbien) => ganbien<10;
//console.log(gt.every(k));
console.log(gt.fill(5,4))

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const ketqua =words.filter(k=>k.length >6);
console.log(ketqua);

const gt =[2,4,1,7,8,9];
gt.forEach(element => console.log(element));

console.log(Array.from([1,2,4],x=x+x))

let batches = [
    {
      expirationDate:"2022-01-30T17:00:00.000Z",
      key:1
    },
    {
      expirationDate :'2021-03-22T09:29:46.436Z',
      key:2
    },  
    {
      expirationDate:"2022-03-30T17:00:00.000Z",
      key:3
    },
  ]
  const minDate = new Date(
    Math.min(
      ...batches.map(element => {
        return new Date(element.expirationDate);
      }),
    ),
  );
  var d=minDate.getDate();
  console.log(d);