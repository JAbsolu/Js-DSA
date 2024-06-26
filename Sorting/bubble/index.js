const numArr = [3,2,3,9,6,7,5];

const sort = (arr) => {
  const n = arr.length; // get the length of the array
  for (let i = 0; i < n -1; i += 1) {
    // intiate a boolean to determine whether elements were swapped or not
    let swapped = false;
    for (let j = 0; j < n; j += 1) {
      // check if element at j is greather than element at j + 1
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]; // save element at j in a constant
        arr[j] = arr[j+1]; // swapp item at el j with item at el j + 1
        arr[j+1] = temp; // assign el saved in temp to el at j + 1
        swapped = true; // set swapped to true to continue iterating at i
      }
    }
    // test script -- checks number of times first loop iterated
    console.log("loop:", i+1);
    if (!swapped) break; //if we didn't swap, break the loop
  }
  return arr; // return the sorterd array as a string
}

console.log("\nIteratively sorted array:", sort(numArr) + "\n");


/**
 * Below is a recursive version of the bubble sort solution
 */



const recursiveSort = (arr) => {
  let index = 0;
  return swap(arr, index);
}

const swap = (a, i) => {
  if (i < a.length) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        const min = a[j + 1];
        a[j + 1] = a[j];
        a[j] = min;
      }
    }
    swap(a, i + 1);
  }
  return a;
}


console.log("Recursively sorted array:", recursiveSort(numArr) + "\n");