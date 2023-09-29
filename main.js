

const preview = document.getElementById("preview"); 

preview.addEventListener("click", prev);

function prev() {
    const inName = document.getElementById("inName").value;
    const inBirth = document.getElementById("inBirth").value;
    const inField = document.getElementById("inField").value;
    const inYear = document.getElementById("inYear").value;
    const inNum = document.getElementById("inNum").value;
  
    const name = document.getElementById("name");
    const birth = document.getElementById("birth");
    const fieldYear = document.getElementById("fieldYear");
    const num = document.getElementById("num");
  
    // Format the birth date input (assuming it's in yyyy-mm-dd format)
    const dateParts = inBirth.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
    const formattedBirthDate = `${day}/${month}/${year}`;
  
    name.innerHTML =     inName;
    birth.innerHTML = "DOB : "+formattedBirthDate; // Display the formatted date
    fieldYear.innerHTML = inField + " " + inYear;
    num.innerHTML = inNum;
  }
  
function loadImage(event) {

    const image = document.getElementById("imgDisplayed");
     image.src= URL.createObjectURL(event.target.files[0]);
}