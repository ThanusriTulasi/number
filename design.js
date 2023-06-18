var a=0;
var c=Math.ceil(Math.random()*100);

num=()=>{
    // var a=1;
    var num=parseInt(document.getElementById("num").value);
    
    if(c==num)
    {
    document.getElementById("result").textContent = ("Congratulations!!!you have got the number in "+(a)+"tries");
    a++;
    }
    else if(num>c)
    {
    document.getElementById("result").textContent = ("try the number lesser than it");
    a++;
    }
    else
    {
    document.getElementById("result").textContent = ("try the number greater than it");
    a++;
    }
   
}
a--;
