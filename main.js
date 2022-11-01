// Arrays
let lab1 = [5,5,5,5,10,10];
let lab2 = [5,5,5,5,5,5,10];
let lab3 = [5,10,10,15];
let lab4_5 = [10,5,5,5,5,5,10,10,10,10,2];
let lab6 = [5,5,10,5,5,10];
let lab8 = [5,10,10,10,5];
let quiz1 = 34;

// Sum
function get_sum(labs){
    sum = 0
    for (let i = 0; i < labs.length; i = i+1) {
        sum += labs[i];
        }
    return sum
}

let all_sums = [get_sum(lab1), get_sum(lab2), get_sum(lab3), get_sum(lab4_5), get_sum(lab6), get_sum(lab8)]
let final_score = [((get_sum(lab1)+get_sum(lab2)+get_sum(lab3)+get_sum(lab4_5)+get_sum(lab6)+get_sum(lab8))*60)/280+(quiz1)];

function main(lab1, lab2, lab3, lab4_5, lab6, lab8){
    const obj={
        lab1: lab1,
        lab2: lab2,
        lab3: lab3,
        lab4_5: lab4_5,
        lab6: lab6,
        lab8: lab8,
        quiz1: quiz1,
        all_sums: all_sums,
        final_score: final_score,
    }
return obj;
}

let result = main(lab1, lab2, lab3, lab4_5, lab6, lab8)
console.log(result)