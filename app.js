
   function addTheValue() {
    var num1=5
    var num2=10
    var sm=num1+num2

    alert(sm)
   }

//login
   function login()
   {    
    var name=document.getElementById("name").value
    var pass=document.getElementById("pass").value
       if(name=="Yash"  && pass=="hello")
       {
           alert("correct")
       }
       else{
           alert("invalid")
       }
   }
//calc

   function add()
   {
    
    var no1=document.getElementById("no1").value 
    var no2=document.getElementById("no2").value 

    if (document.getElementById("no1").value.trim() == "" || document.getElementById("no2").value.trim() == "") 
        alert("empty");
    else   
        alert(Number(no1)+Number(no2))
   
   }


   function sub()
   {
    var no1=document.getElementById("no1").value 
    var no2=document.getElementById("no2").value 
    if (document.getElementById("no1").value.trim() == "" || document.getElementById("no2").value.trim() == "") 
        alert("empty");
    else 
    alert(Number(no1)-Number(no2))
   }
   function mul()
   {
    var no1=document.getElementById("no1").value 
    var no2=document.getElementById("no2").value 
    if (document.getElementById("no1").value.trim() == "" || document.getElementById("no2").value.trim() == "") 
        alert("empty");
    else 
    alert(Number(no1)*Number(no2))
   }
   function div()
   {
    var no1=document.getElementById("no1").value 
    var no2=document.getElementById("no2").value 
    if (document.getElementById("no1").value.trim() == "" || document.getElementById("no2").value.trim() == "") 
        alert("empty");
    else {
    if(Number(no2)!=0)
    {
    alert(Number(no1)/Number(no2))
    }
   else
   {
       alert("Divide By 0 Error")
   }
}
   }


