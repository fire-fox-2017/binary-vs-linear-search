function binary(target, value) { //700
  var low = 0
  var high = value
  let count = 0
  let status = true
  while (status) {
    let mid = Math.floor((high + low)/2) //7
    count++
    if(target > mid){
      low = mid + 1 //6
    } else if (target < mid){
      high = mid - 1 //8
    } else {
      console.log(`The Trial of ${count} from ${value} test case`);
      status = false
    }
  }
}

function linier(target, value) {
  let count = 0

  for (let i = 0; i <= value; i++){
    count++
    if (target == i) {
        console.log(`The Trial of ${count} from ${value} test case`);
    }
  }


}

binary(700, 10000)
linier(700, 10000)