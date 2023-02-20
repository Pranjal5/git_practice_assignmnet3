let num=11;
let cnt=0;

for(let i=0;i<=num;i++){
    if(num%i==0){
       cnt++;
   }
 }

if(cnt==2){
  console.log("Prime Number");
}
else{
  console.log("Not a Prime");
}