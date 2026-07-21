 let i = 0;
    let sign = 1;
    let result = 0;

    // Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // Check sign
    if (i < s.length && (s[i] === "+" || s[i] === "-")) {
        if (s[i] === "-") sign = -1;
        i++;
    }

    // Convert digits
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {

        result = result * 10 + (s[i] - "0");

        // Handle overflow
        if (sign * result > 2147483647) return 2147483647;
        if (sign * result < -2147483648) return -2147483648;

        i++;
    }

    return sign * result;
