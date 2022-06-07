//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

function findWords(){
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
    let dog_names = ["Max","HAS","PuRple","dog"];
    for(let name of dog_names){
        if (dog_string.includes(name)){
            console.log(`Matched ${name}`)
        } else {
            console.log('No Matches')
        }
    }
}
console.log(findWords())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
arr.splice(arr.indexOf('Max'), 1, 'even index')
arr.splice(arr.indexOf('Reboot'), 1, 'even index')
arr.splice(arr.indexOf('Trucks'), 1, 'even index')
    console.log(arr)}
    console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]