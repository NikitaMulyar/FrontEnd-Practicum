// 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = Object.values(salaries).reduce((a, b) => parseInt(a) + parseInt(b));
console.log(sum);


// 2
function multiplyNumeric() {
    let keys = Object.keys(salaries);
    for (let i = 0; i < keys.length; i++) {
        if (typeof salaries[keys[i]] === 'number') {
            salaries[keys[i]] = salaries[keys[i]] * 2;
        }
    }
}


// 3
class Ladder {

  constructor() {
    this.cnt = 0;
  }

  up() {
    this.cnt++;
  }

  down() {
    this.cnt--;
    this.cnt = 0 > this.cnt ? 0 : this.cnt;
  }

  showStep() {
      console.log(this.cnt);
  }

}

// Использование:
let ladder = new Ladder();
ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep();

console.log(salaries);
multiplyNumeric();
console.log(salaries);


// 4
function remove(str, n, cur_ind) {
    if (cur_ind === str.length)
        return "";

    if (n === 0)
        return str[cur_ind] + remove(str, n, cur_ind + 1);

    let chr = "";
    let new_n = n;
    if (str[cur_ind] !== "!") {
        chr = str[cur_ind];
    } else {
        new_n--;
    }
    return chr + remove(str, new_n, cur_ind + 1);
}

let s = "!N!a!t!l!a!n!";
s = remove(s, 4, 0);
console.log(s);


