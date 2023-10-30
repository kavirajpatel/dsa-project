// Ans1)
function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const numSet = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const complement = targetSum - arr[i];
  
      if (numSet.has(complement)) {
        pairs.push([arr[i], complement]);
      }
  
      numSet.add(arr[i]);
    }
  
    return pairs;
  }
  
  const integerArray = [2, 4, 3, 5, 6, 1, 7, 8];
  const targetSum = 9;
  
  const pairs = findPairsWithSum(integerArray, targetSum);
  
  console.log("Pairs with sum", targetSum, "are:", pairs);

//   ans2)
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at the left and right indices
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
      // Move the indices towards the center
      left++;
      right--;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  console.log(myArray); // Output: [5, 4, 3, 2, 1]

//   ans3
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Concatenate str1 with itself
    const concatenatedStr = str1 + str1;
  
    // Check if str2 is a substring of concatenatedStr
    if (concatenatedStr.includes(str2)) {
      return true;
    }
  
    return false;
  }
  
  const string1 = "abcde";
  const string2 = "cdeab";
  
  if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
  } else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
  }

//   ans4
function findFirstNonRepeatedChar(str) {
    const charCount = {};
  
    // Count the frequency of each character in the string
    for (const char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Find the first non-repeated character
    for (const char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character is found, return null or a message
    return null; // You can also return a custom message like "No non-repeated character found."
  }
  
  const inputString = "programming";
  const firstNonRepeated = findFirstNonRepeatedChar(inputString);
  
  if (firstNonRepeated !== null) {
    console.log(`The first non-repeated character is: ${firstNonRepeated}`);
  } else {
    console.log("No non-repeated character found.");
  }

//   ans5
function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
  }
  
  const numDisks = 3;
  towerOfHanoi(numDisks, 'A', 'B', 'C');

//   ans6
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
  }
  
  function postfixToPrefix(postfixExpression) {
    const stack = [];
    for (let i = 0; i < postfixExpression.length; i++) {
      const token = postfixExpression[i];
  
      if (!isOperator(token)) {
        stack.push(token); // Operand, push to stack
      } else {
        // Operator, pop two operands from the stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefixExpression = token + operand1 + operand2;
        stack.push(prefixExpression);
      }
    }
  
    return stack.pop(); // The final result is the prefix expression
  }
  
  const postfixExpression = "ab+c*";
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log("Prefix Expression:", prefixExpression);

//   ans7
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
      const token = prefixExpression[i];
  
      if (!isOperator(token)) {
        stack.push(token); // Operand, push to stack
      } else {
        // Operator, pop two operands from the stack
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1}${token}${operand2})`;
        stack.push(infixExpression);
      }
    }
  
    return stack.pop(); // The final result is the infix expression
  }
  
  const prefixExpress = "+*ab-cd";
  const infixExpression = prefixToInfix(prefixExpression);
  console.log("Infix Expression:", infixExpression);

//   ans8
function areBracketsBalanced(code) {
    const stack = [];
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
  
    for (let char of code) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const lastOpeningBracket = stack.pop();
        if (openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(char)) {
          return false; // Mismatched brackets
        }
      }
    }
  
    return stack.length === 0; // True if all brackets are closed
  }
  
  const codeSnippet = "function foo() { return [1, 2]; }";
  const result = areBracketsBalanced(codeSnippet);
  
  if (result) {
    console.log("All brackets are balanced.");
  } else {
    console.log("Brackets are not balanced.");
  }

//   ans9
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  function reverseStack(stack) {
    const auxStack = new Stack();
  
    while (!stack.isEmpty()) {
      auxStack.push(stack.pop());
    }
  
    return auxStack;
  }
  
  // Example usage:
  const originalStack = new Stack();
  originalStack.push(1);
  originalStack.push(2);
  originalStack.push(3);
  originalStack.push(4);
  
  const reversedStack = reverseStack(originalStack);
  
  while (!reversedStack.isEmpty()) {
    console.log(reversedStack.pop()); // This will print the elements in reversed order (4, 3, 2, 1)
  }

//   ans10
class Stack1 {
    constructor() {
      this.items = [];
      this.minStack = []; // Auxiliary stack to track minimum elements
    }
  
    push(item) {
      this.items.push(item);
  
      if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(item);
      }
    }
  
    pop() {
      if (!this.isEmpty()) {
        if (this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
        }
        return this.items.pop();
      }
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const stack1 = new Stack1();
  stack1.push(4);
  stack1.push(2);
  stack1.push(7);
  stack1.push(1);
  
  console.log("Smallest number in the stack:", stack1.getMin()); // Output: 1