let img = document.getElementById("img");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");


function generateQR()
{

    qrimage.src = `https://quickchart.io/qr?text= ${qrtext.value}`;

}
