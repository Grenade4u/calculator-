let string = "";
let num = document.querySelectorAll(".number");
Array.from(num).forEach((number) => {
  number.addEventListener("click", (e) => {
if(e.target.innerHTML == "="){
   string = eval(string);
   document.querySelector(".resultBox").value = string;
} else if (e.target.innerHTML == "Ac"){
    string = "";
 document.querySelector(".resultBox").value = string;
}else{ console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector(".resultBox").value = string};
  });
});
