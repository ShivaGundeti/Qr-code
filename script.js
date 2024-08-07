
const qr = document.getElementById("qr-code");
function validatecode() {
    const input_value = document.getElementById("text").value;
    if(input_value.length > 0 ) {
        var api_url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input_value}`;
    qr.innerHTML = `<img src="${api_url}" alt="" id="img" >`
    }
    else {
        document.getElementById("text").placeholder = "Please enter some value";
    }
    
}


