interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);


function ConvertTogram()
{
   var txtNUmb=<HTMLInputElement>document.getElementById("txtNumb");
   var txtout=<HTMLInputElement>document.getElementById("txtout");
   var number=28.34952;
   var valuetx=parseFloat(txtNUmb.value)
   

  txtout.value=""+(number*valuetx);

    //console.log("Is it working");
    

}
//get element for at få værdi
//get elemetn for at sætte værdi

function  ConvertToOunces()
{
   
    var txtNUmb=<HTMLInputElement>document.getElementById("txtNumb");
    var txtout=<HTMLInputElement>document.getElementById("txtout");
    var number=28.34952;
    var valuetx=parseFloat(txtNUmb.value)
    
 
   txtout.value=""+(valuetx/number);
 

}


document.getElementById("disp").onclick = ConvertTogram;

document.getElementById("dispp").onclick = ConvertToOunces;

