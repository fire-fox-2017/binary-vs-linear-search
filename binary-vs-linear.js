function binary_search (targetValue, array) {
  let min = 0;
   let max = array.length - 1;
   let indexTengah;
   let percobaan = 1;

   while(min <= max){
      indexTengah = Math.floor((min + max) /2);

      if(array[indexTengah] == targetValue){
        return `Binary Seacrh melakukan ${percobaan} percobaan untuk mencari ${targetValue} dari total ${array.length} data`
      }

      else if(array[indexTengah] < targetValue){
        min = indexTengah + 1;
      }

      else {
        max = indexTengah - 1;
      }
      percobaan++;
   }
   return -1;
}



function linearSearch(targetValue, array){
  //write your code here
  let tampung=null;
  let percobaan=0;
  for(let i=0;i<array.length;i++){
    if(tampung==null){
      percobaan++;
      if(targetValue==array[i]){
        tampung=i;
      }
    }
  }

  if(tampung!=null){
    return `Linear Seacrh melakukan ${percobaan} percobaan untuk mencari ${targetValue} dari total ${array.length} data`
  }
  else {
    return -1
  }
}

let array1 = []
let array2 = []
let array3 = []
for(let i=1;i<=1000000;i++){
  if(i<=1000){
    array1.push(i)
  }
  if(i<=10000){
    array2.push(i)
  }
  array3.push(i)
}


// console.log(binary_search (500, array))
// console.log(linearSearch (500, array))

var benchmark = require('benchmark')

var suite = new benchmark.Suite;
var suite2 = new benchmark.Suite;
var suite3 = new benchmark.Suite;

suite.add('linear', function(){
  linearSearch (500, array1);
})

.add('binary', function(){
  binary_search(500, array1);
})

.on('cycle', function(event){
  console.log('1.000 data :' +String(event.target));
})

.on('complete', function(){
  console.log('Fastest is ' + this.filter('fastest').map('name')+'\n')
})

.run({ 'sync': true });
/////////////////////////////////////////////////////////////////////////////////

suite2.add('linear', function(){
  linearSearch (500, array2);
})

.add('binary', function(){
  binary_search(500, array2);
})

.on('cycle', function(event){
  console.log('10.000 data :' +String(event.target));
})

.on('complete', function(){
  console.log('Fastest is ' + this.filter('fastest').map('name')+'\n')
})

.run({ 'sync': true });
/////////////////////////////////////////////////////////////////////////////////

suite3.add('linear', function(){
  linearSearch (500, array3);
})

.add('binary', function(){
  binary_search(500, array3);
})

.on('cycle', function(event){
  console.log('1.000.000 data :' +String(event.target));
})

.on('complete', function(){
  console.log('Fastest is ' + this.filter('fastest').map('name')+'\n')
})

.run({ 'sync': true });