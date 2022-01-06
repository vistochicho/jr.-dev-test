
let test = document.querySelectorAll(".flex-div-bord");
let check = document.querySelectorAll(".delete-checkbox");

for(let i = 0; i < check.length; i++) {
    test[i].addEventListener("click", function() {
        if(check[i].checked == true) {
            check[i].checked = false;
        } else {
            check[i].checked = true;
        }   
    });
}