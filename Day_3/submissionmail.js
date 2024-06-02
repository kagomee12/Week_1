
function submitContact() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("phonenumber").value;
    let profesi = document.getElementById("profesi").value;
    let isipesan = document.getElementById("isipesan").value;
    let a =document.createElement('a');
    const myEmail = "kiagus.119160055@student.itera.ac.id";

    a.href = `mailto:${myEmail}?subject= ${profesi}&body= halo saya ${nama}, ${isipesan}`

    if (nama == "" || email == "" || number == "" || profesi == "value1" || isipesan == "") {
        alert("semua kolom harus diisi");
    }else {
        alert("pesan anda sudah terkirim");
        btnemail.type = "submit";
    }

  }
