Describe: robotFunction()

Test: Get a return of 0 to number input
Code:
robotFunction(10);
Expected Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Test: Numbers that include 1 turn to "Beep!"
Code:
robotfunction(11);
Expected Output: 0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"

Test: Numbers that include 2 turn to "Boop!" with precedence over "Beep!"
Code:
robotFunction(12);
Expected Output: 0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"

Test: Numbers that include 3 turn into "Won't you be my neighbor?" with precedence over 2 and 1
Code:
robotFunction(13);
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"

Test: Negative Numbers are turned positive
Code:
robotFunction(-13);
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?

Test: Check for NaN input and gives error to output
Code:
robotFunction(NaN)
Expected Output: "Error-Error-Error This is NOT a Number over over over over OVERHEATING!!!! Placing feet into pool, feeding fish, taking off sweater. Taking off slippers and putting on shoes and taking a long walk. (Five minutes later) Getting water and snack. Please input a number."

Test: Check input for infinity and gives a set output for it
Code:
robotFunction(2/0);
Expected Output: "Beep!", "Boop!", "Won't you be my neighbor?", "Infinity!"