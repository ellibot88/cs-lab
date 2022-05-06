|   Function   | tinyArray | smallArray | mediumArray | largeArray | extraLargeArray |
| :----------: | --------- | ---------- | ----------- | ---------- | --------------- |
| doubleAppend | 81.291 μs | 83.625 μs  | 134.042 μs  | 757.459 μs | 3.751208 ms     |
| doubleInsert | 81.291 μs | 38.5 μs    | 186.125 μs  | 9.8485 ms  | 1.073838833 s   |

4. After analyzing the two functions, it appears that doubleAppend has a runtime complexity of O(n) and doubleInsert has one of 0(n^2). doubleInsert's runtime appears to be growing exponentially larger as larger arrays are passed into it. This can cause issues with scalability of the function, as one can never truly know how much input will be passed to the function. Because of this, I think doubleAppend scales better when compared to double Insert. doubleAppend has a linear runtime as it scales, making it more efficient with larger workloads.

5. .unshift() is a costly array method in terms of compute/complexity because it forces new indexes to be placed in memory each time an element is added to the array. .push() is a fast operation because it only changes the length of the array, adding an additional index at the end. .unshift() causes all items to be moved in the array.
