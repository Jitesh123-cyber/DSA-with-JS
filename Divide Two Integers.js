var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Check whether answer is negative
    let negative = (dividend < 0) !== (divisor < 0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;

        // Double divisor until possible
        while (a >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }

        a -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};
