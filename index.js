function validateform() {
    const name = document.myform.name.value;
    const x = document.myform.email.value;
    const atpostion = x.indexOf("@");
    const dotpostion = x.lastIndexOf(".");

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }

    if (atpostion < 1 || dotpostion < atpostion + 2 || dotpostion + 2>= x.length) {
        alert ("Please enter a valid email address");
        return false
    }
}


let messages = [];
       addMessage = (e) => {
           e.preventDefault(); 

           let message = {
               id: Date.now(),
               name: document.getElementById("name").value,
               email: document.getElementById("email").value,
               msg: document.getElementById("msg").value,
           }
           messages.push(message);
           console.table(messages);

           
           //Saving to local storage
           localStorage.setItem("message", JSON.
           stringify(messages));
       }

document.getElementById("submitBtn").addEventListener(
   "click",  addMessage
);


