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

function largestGood(binString: string): string {
    if (!isGoodBinaryString(binString)) return "INVALID INPUT"

    let prefixes: string[] = []
    for (let index = 1; index <= binString.length; index++) {
        prefixes.push(binString.slice(0, index))
    }
    const validPrefixes = prefixes.filter(prefix => isGoodBinaryString(prefix) && prefix != binString)
    const suffixes = validPrefixes.map(prefix => binString.slice(prefix.length))
    let largest = Number(binString)
    for (let index = 0; index < validPrefixes.length; index++) {
        const joined = Math.max(Number(validPrefixes[index] + suffixes[index]), Number(suffixes[index] + validPrefixes[index]))
        largest = Math.max(largest, joined)
    }

    return String(largest)
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