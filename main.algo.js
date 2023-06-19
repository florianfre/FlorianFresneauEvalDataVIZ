function twoSum(array, target) {
    // write the body of the function
    const result={}
    //on initialise le résultat comme étant une liste vide  

    
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];
        // on cherche la valeur que doit avoir le deuxieme élément que l'on cherche
        
        if (result.hasOwnProperty(complement)) {


            return [result[complement], i];
        };
        result[array[i]] = i;
      };
    

    
//fonction de test
const test = [12, 18, 58, 45,8, 9];
const cibletest = 58;

const test = twoSum(test, cibletest);
print(test)