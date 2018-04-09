# [Binary Addition](https://www.codewars.com/kata/binary-addition)

We are to make a basic addition function that takes in numbers base 10, and returns their sum in base 2 as a string. There are no futher details about how we need to implmenent this.  

_binary\_addition_: Function
* Args: 2
  1. num\_1: Number
  2. num\_2: Number
* Return: String
  * String of 1's & 0's
* Behavior: 
  * Takes in 2 numbers, adds them, returns a string representation of the sum in binary.

Convert from base 10 to binary:
* Find the largest power of 2 you can subtract from the number.  Put a 1 in that power's place, and subtract the power.
* Find the next larges power of 2 you can subtract from the remainder. Put a 1 in that power's place, and subtract the power. (any powers you skipped become a 0 in your base 2 representation).
* Do this until you reach 2^0.
 
Binary Addition:
* Just like base 10, but you jump to the next column when the sum is greater than 1.


'''js
// copy of your polished solution for easy reference.
'''


### Index
* [Input Classifications](#input-classifications)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Bugs & Challenges](#bugs-challenges) 
* [Language Features](#language-features)
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)

---

## Input Classifications

We will assume that our function will be passed numbers, so there's no need for handling types or conversions.  Since all we need to do is add two numbers, and the numbers are coming in as numbers, there aren't any relevant charecteristics besides their value.

While there are no theoretical differences between input classifications, because of how JS handles type conversions & addition there are some cases we need to keep in mind:
* Starting with a 0 or not
* Negative or not
* Decimals vs whole numbers - ignore that for now

Knowing that I'll need to account for a few weirdnesses in JS type handling, I'll choose test cases that cover a variety of combinations pulling from the two categories above.


[TOP](#index)

___

## Solution Explanation

Explain your solution in detail, however works for you.  Perhaps by using a specific input to illustrate, by describing your strategy, or by including a diagram [directly from Sketchboard.io](https://sketchboard.io/blog/2014/03/06/github-sketchboard.html).

[TOP](#index)

---

## Constraints

What constraints did you place on yourself, and why?  Did they end up being helpful or not?

[TOP](#index)

___


## Resource Estimation

Estimate how what resources you will require, and how much of each.  


[TOP](#index)

___

## Scaffolding

Provide a link to Gist you used to construct your solution's scaffolding.  What difficulties did you have making it?  How helpful was it in coming up with your finished solution?

[TOP](#index)

___

## Challenges & Bugs

What particular challenges & bugs did you come across when you were filling in your scaffolding?

Were they logic bugs? Language bugs? 

Did you have trouble keeping track of which part of the challenge you were solving?

[TOP](#index)

___

## Language Features

List the language features used in your solution.

The focus of these exercises are to strengthen you problem solving skills, not to learn the newest ES6 tricks. When you have the choice between to different language features it is better to choose the option that is easiest to read, most common, or most consistent with the rest of your solution.  

Keeping track of the language features you use will enable you separate the problem solving strategy from the implementation.  Being aware of this difference will be an asset later on when you're faced with larger applications and popular frameworks.

[TOP](#index)

---
## Use Cases

List 5+ use cases for your solution.  They can be stand-alone, part of an application, or impractical.  Your use cases can be overly complicated, or very basic. What's important is that you come up with as many and as diverse use cases as possible.


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

