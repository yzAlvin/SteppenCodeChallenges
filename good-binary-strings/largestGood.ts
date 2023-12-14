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
    if (!isGoodBinaryString(binString)) return "INVALID INPUT"

    return binString
}

// private

function isValidBinaryString(binString: string): boolean {
    return binString.length > 0 && 
        binString.split("").every(char => char == "0" || char == "1")
}

function moreOnesThanZeroes(binString: string): boolean {
    const zeroes = binString.split("").filter((digit) => digit == "0").length
    const ones = binString.split("").filter((digit) => digit == "1").length 

    return ones >= zeroes
}

function isGoodBinaryString(binString: string): boolean {
    const zeroes = binString.split("").filter((digit) => digit == "0").length
    const ones = binString.split("").filter((digit) => digit == "1").length

    let prefixes: string[] = []
    for (let index = 1; index <= binString.length; index++) {
        prefixes.push(binString.slice(0, index))
    }
    const validPrefixes = prefixes.every(prefix => moreOnesThanZeroes(prefix))

    return isValidBinaryString(binString) && 
        zeroes == ones && 
        validPrefixes
}