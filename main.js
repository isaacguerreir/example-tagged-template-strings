/*
  Examples of Tagged Template Literals, by Isaac Guerreiro
*/

const number = 25;

const myFunc = (strings, ...variables) => {
  console.log(strings);
  console.log(variables);
}

myFunc`The double of 25 is ${number}.`;

const double = (strings, ...variables) => {
  const l = strings.length;
  let result = '';
  for (let i = 0; i < l; i++) {
    result += strings[i];
    if(i < variables.length){
      result += (variables[i] * variables[i]);
    }
  }
  console.log(result);
}

double`The double of 25 is ${number}.`;