const testCases = [
    { 
        name: "Simplest good binary string",
        input: "10",
        expectedOutput: "10"
    }
]

testCases.forEach((testCase) => {
    const result = largestGood(testCase.input)
    if(result == testCase.expectedOutput) {
        console.log(`Test case: ${testCase.name} passed.`)
    } else {
        console.error(`Test case: ${testCase.name} failed! Expected: ${testCase.expectedOutput}, but got: ${result}`)
    }
})

function largestGood(binString: string): string {
    return binString
}