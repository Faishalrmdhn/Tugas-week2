//problem case sensitive(Pascal Case) & callback limit
//function limit, searchWord, & show = work

let names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(searchWord, limit, callback){
    searchWord = names.map(v=>v.toLowerCase()).filter(name=>name.includes(searchWord)).slice(0,limit);
    callback(searchWord);
    // caseSensitive
    // let searchWord1 = searchWord.join(' ');
    // let toPascalCase = str => str.replace(/\w\S*/g, m=>m.charAt(0).toUpperCase()+m.substr(1).toLowerCase());
    // console.log(toPascalCase(searchWord1));
    
    // callback(limit);
}

function limit(){
    // searchWord.slice(0,limit);
}

function show(quote){
    console.log(quote)
}

searchName("an", 3, show)




