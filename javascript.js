
function myFunction(){
    
   /* if(document.getElementById("nom1").value == ""||document.getElementById("nom").value == ""||document.getElementById("email").value == ""||
    document.getElementById("num").value == ""||document.getElementById("mdp").value == ""||document.getElementById("mdp1").value == ""||
    document.getElementById("genre").value == ""  )
    alert("veuillez remplir ce champ");*/
   

     var email=document.getElementById("email").value;
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email.match(mailformat))
    alert("Valid email address!");
     else 
     alert("email error");

var numero =document.getElementById("num").value;
var phoneformat = /^(\+212|00212|0)(6|7)[0-9]{8}$/g ;
if(numero.match(phoneformat))
alert("Valid number phone!");
else 
alert(" number phone error");

var motDePasse = document.getElementById("mdp").value;
 var motDePasse1 = document.getElementById("mdp1").value;
 if (motDePasse.value != motDePasse1.value){
alert("password error");
    //Event.preventDefault();
  }
  
}

function ajouterUtilisateur() {
  // Get form values
  var nom = document.getElementById("nom").value;
  var nomUtilisateur = document.getElementById("nom1").value;
  var email = document.getElementById("email").value;
  var numeroTelephone = document.getElementById("num").value;

  // Create a new row for the table
  var table = document.getElementById("tab");
  var newRow = table.insertRow(-1);

  // Insert cells into the row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  // Add data to the cells
  cell1.innerHTML = nom;
  cell2.innerHTML = nomUtilisateur;
  cell3.innerHTML = email;
  cell4.innerHTML = numeroTelephone;
 cell5.innerHTML = '<button onclick="supprimerUtilisateur(this)" id="delete">Supprimer</button>';
  cell6.innerHTML = '<button onclick="modifierUtilisateur(this)" class="change">Modifier</button>';
  //var buttom =document.getElementById("delete").style.backgroundColor="Green"
  // Clear the form fields
  document.getElementById("nom").value = "";
  document.getElementById("nom1").value = "";
  document.getElementById("email").value = "";
  document.getElementById("num").value = "";
}

function supprimerUtilisateur(button) {
  // Get the row to be deleted
  var row = button.parentNode.parentNode;
 

  // Remove the row
  
  row.parentNode.removeChild(row);
}

//function modifierUtilisateur(button) {
  // You can implement the logic to modify user information here
 // alert("Modifier utilisateur");
//}

       