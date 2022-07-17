/*     let b = prompt('Введите символ');
    let c = prompt('Введите символ'); */


/* do{
  let a = +prompt('Введите кол во ступеней');
}while( isNaN(a) ){
      if(a = ('')){
        a = 5
        console.log(a);
     } 
} */


/* 
do{
    let num = +prompt('Введите кол во ступеней');
}while (isNaN(num)); {
    console.log(num);
} */

 
do {
  var a = +prompt('Введите кол во ступеней');
    
}while(isNaN(a)); {
    if (a == ''){
        a = 5
        
    }
    
} 

do {
    var b = prompt('Введите символ отступов');
}while (b == ''){

}

do {
    var c = prompt('Введите конечный символ')
}while(c == ''){
    console.log(c)
    
}

let num = ''
for(i = 1; i < a; i++){
    
    num = b + num
    
    console.log(num + c);
}