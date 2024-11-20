var names=[];

function buy()
{
    var n=prompt("How Many people are there??>");
    for(var i=0;i<n;i++)
    {
       var nam= prompt("enter the names");
        names.push(nam);
    }
    var random1=Math.floor((Math.random()*n-1)+1);
     
    alert(names[random1]+" is today's buyer");
   
}
