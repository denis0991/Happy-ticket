

let arr = [];
let arr2 = [];
let str = '';
let sum1;
let sum2;


function func() {
  for (let i = 0; i <= 999; i++) {
    if (i < 10) {
      arr.push(str + 0 + 0 + i)
    } else if (i >= 10 && i < 100) {
      arr.push(str + 0 + i)
    } else if (i >= 100) {
      arr.push(str + i)
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length; j++) {
    sum1 = +arr[i][0] + +arr[i][1] + +arr[i][2]
    sum2 = +arr[j][0] + +arr[j][1] + +arr[j][2]
    if (sum1 === sum2) {
      arr2.push(arr[i][0] + arr[i][1] + arr[i][2] + arr[j][0] + arr[j][1] + arr[j][2])
    }
    
   }
   
  }

}

func()
