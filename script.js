
let valid = true;

nameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";

if(name.value.trim() === ""){

nameError.textContent =
"Ad daxil edin";

valid = false;
}

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email.value)){

emailError.textContent =
"Düzgün email daxil edin";

valid = false;
}

if(message.value.trim() === ""){

messageError.textContent =
"Mesaj boş ola bilməz";

valid = false;
}

if(valid){

alert("Mesaj uğurla göndərildi.");

form.reset();

}

});
