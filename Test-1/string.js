// ## Question Two 

// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string. 

// e.g., when S = 'Lorem at' the output should be 'eroLta m' 

// When S = ' Tempor ip' the output should be 'meT roppi' 


function revString(S, N) {

   if (S.length === 0) return S;
   return S.split('').slice(0, N).reverse().join("") + revString(S.slice(N), N)

}



console.log(revString('Lorem at', 4))