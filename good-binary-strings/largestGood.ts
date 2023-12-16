export default function largestGood(binString: string): string {
    if (!isGoodBinaryString(binString)) return "INVALID INPUT"
    return largestGoodAlgo(binString)
}

function largestGoodAlgo(binString: string): string {
    if (binString.length == 0) return binString

    const goodSubstrings: string [] = []
    let balance = 0
    let startIndex = 0

    for (let index = 0; index < binString.length; index++) {
        const digit = binString[index]
        balance += digit === "1" ? 1 : -1

        if (balance == 0) {
            const remainingSubstring = largestGoodAlgo(binString.substring(startIndex + 1, index))
            const goodSubstring = `1${remainingSubstring}0`
            goodSubstrings.push(goodSubstring)
            startIndex = index + 1
        }
    }
    goodSubstrings.sort((a, b) => b.localeCompare(a))
    return goodSubstrings.join("")
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

function isValidBinaryString(binString: string): boolean {
    return binString.length > 0 && 
        binString.split("").every(char => char == "0" || char == "1")
}

function moreOnesThanZeroes(binString: string): boolean {
    const zeroes = binString.split("").filter((digit) => digit == "0").length
    const ones = binString.split("").filter((digit) => digit == "1").length 

    return ones >= zeroes
}