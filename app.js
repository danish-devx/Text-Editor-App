let textInput = document.getElementById("textInput");

let boldBtn = document.getElementById("boldBtn");
let italicBtn = document.getElementById("italicBtn");
let underlineBtn = document.getElementById("underlineBtn");
let increaseFont = document.getElementById("increaseFont");
let decreaseFont = document.getElementById("decreaseFont");
let colorPicker = document.getElementById("colorPicker");
let left = document.getElementById("left");
let center = document.getElementById("center");
let right = document.getElementById("right");
let bgColor = document.getElementById("bgColor");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let copy = document.getElementById("copy");
let reset = document.getElementById("reset");

boldBtn.addEventListener("click", function () {

    textInput.style.fontWeight = "bold";

});

italicBtn.addEventListener("click", function () {

    textInput.style.fontStyle = "italic";

});

underlineBtn.addEventListener("click", function () {

    textInput.style.textDecoration = "underline";

});


let fontSize = 16;

increaseFont.addEventListener("click", function () {

    fontSize += 2;
    textInput.style.fontSize = `${fontSize}px`;

});

decreaseFont.addEventListener("click", function () {

    fontSize -= 2;
    textInput.style.fontSize = `${fontSize}px`;

});

colorPicker.addEventListener("input", function () {

    textInput.style.color = colorPicker.value;

});

left.addEventListener("click", function () {

    textInput.style.textAlign = "left";
    
})

center.addEventListener("click", function () {

    textInput.style.textAlign = "center";
    
})

right.addEventListener("click", function () {

    textInput.style.textAlign = "right";
    
})

bgColor.addEventListener("input", function () {

    textInput.style.backgroundColor = bgColor.value;
    
})

upper.addEventListener("click", function () {

    textInput.style.textTransform = "uppercase"
    
})

lower.addEventListener("click", function () {

    textInput.style.textTransform = "lowercase"
    
})


copy.addEventListener("click", function() {

    navigator.clipboard.writeText(textInput.value);

       Swal.fire({
        title: "Copied!",
        text: "Text successfully copied to clipboard",
        icon: "success",
        confirmButtonText: "OK",
        heightAuto: false
    });
    
});


reset.addEventListener("click", function () {

    textInput.value = "";

    textInput.style.fontWeight = "normal";
    textInput.style.fontStyle = "normal";
    textInput.style.textDecoration = "none";
    textInput.style.textAlign = "left";
    textInput.style.color = "silver";
    textInput.style.backgroundColor = "#1a1a1a";
    textInput.style.textTransform = "none";

    fontSize = 18;
    textInput.style.fontSize = fontSize + "px";

});