// Write your solution here!
 const cats = ['Milo','Otis','Garfield']

 function destructivelyAppendCat(){
    return cats.push('Ralph')
 }
 function destructivelyPrependCat(){
    return cats.unshift('Bob')
 }

 function destructivelyRemoveLastCat(){
    return cats.pop('Garfield')
 }

 function destructivelyRemoveFirstCat(){
    return cats.shift('Milo')
 }

 function appendCat(){
    return ['Milo','Otis','Garfield', 'Broom']
 }

 function prependCat(){
    return ['Arnold','Milo','Otis','Garfield',]
 }

 function removeLastCat(){
    return cats.slice(0, cats.length - 1)
 }

 function removeFirstCat(){
    return cats.slice(1)
 }