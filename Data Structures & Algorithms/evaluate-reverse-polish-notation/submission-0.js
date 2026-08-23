class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        for (let i = 0; i < tokens.length; i++) {
            const t = tokens[i];

            if (t == "+" || t == "-" || t == "*" || t == "/") {
                const curr = stack.pop();
                const prev = stack.pop();

                if (t == "+") {
                    stack.push(prev + curr);
                } else if (t == "-") {
                    stack.push(prev - curr);
                } else if (t == "*") {
                    stack.push(prev * curr);
                } else {
                    stack.push(Math.trunc(prev / curr));
                }
                
                if (i === tokens.length - 1) {
                    return stack.pop();
                }

            } else {
                stack.push(Number(t));
            }
        }

        return stack.pop();

    }  
}