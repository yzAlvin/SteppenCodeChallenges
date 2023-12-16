import largestGood from './largestGood'

const testCases = [
    { 
        name: "Empty string",
        input: "",
        expectedOutput: "INVALID INPUT"
    },
    { 
        name: "Every character must be 0 or 1",
        input: "10abc",
        expectedOutput: "INVALID INPUT"
    },
    { 
        name: "Uneven number of 0s and 1s",
        input: "1110",
        expectedOutput: "INVALID INPUT"
    },
    { 
        name: "Prefix has more 0s than 1s",
        input: "1001",
        expectedOutput: "INVALID INPUT"
    },
    { 
        name: "Simplest good binary string",
        input: "10",
        expectedOutput: "10"
    },
    { 
        name: "Simple good binary string",
        input: "1010",
        expectedOutput: "1010"
    },
    { 
        name: "Swap #1",
        input: "101100",
        expectedOutput: "110010"
    },
    {
        name: "Sample Test #1",
        input: "11011000",
        expectedOutput: "11100100"
    },
    {
        name: "Sample Test #2",
        input: "1100",
        expectedOutput: "1100"
    },
    { 
        name: "Sample Test #3",
        input: "1101001100",
        expectedOutput: "1101001100"
    },
]

testCases.forEach((testCase) => {
    const result = largestGood(testCase.input)
    if(result == testCase.expectedOutput) {
        console.log(`Test case: ${testCase.name} passed.`)
    } else {
        console.error(`Test case: ${testCase.name} failed! Expected: ${testCase.expectedOutput}, but got: ${result}`)
    }
})