// Menampilkan error message pada form
function validasiForm() {
    const elemen = document.getElementById("fibonacci-input").value;
    if (elemen == "") {
        document.getElementById("error_mes").innerHTML = "Isi form untuk mendapatkan hasil";
    }
    else{
        document.getElementById("error_mes").innerHTML = "";
    }
}

// Menghitung deret fibonacci
function hitungFibonacci() {
    const input = document.getElementById("fibonacci-input").value;
    let hasil = "";
    if (input <= 1) {
        hasil = input.toString();
    } else {
        let a = 0;
        let b = 1;
        hasil = "1";
        for (let i = 2; i <= input; i++) {
            const next = a + b;
            hasil += ", " + next; 
            a = b;
            b = next;
        }
    }
    document.getElementById("fibonacci-result").textContent = hasil;
}

document.getElementById("calculateFibonacci").addEventListener("click", function(event) {
    event.preventDefault();
    validasiForm();
    hitungFibonacci();
});

// Beberapa fungsi masing - masing bangun ruang

function volumeKubus() {
    const sisi = parseFloat(document.getElementById("sisiKubus").value);
    const volume = sisi **3;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2);
}

function volumeBalok() {
    const panjang = parseFloat(document.getElementById("panjangBalok").value);
    const lebar = parseFloat(document.getElementById("lebarBalok").value);
    const tinggi = parseFloat(document.getElementById("tinggiBalok").value);
    const volume = panjang * lebar * tinggi;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2);
}

function volumeTabung() {
    const jari_jari = parseFloat(document.getElementById("jariTabung").value);
    const tinggi    = parseFloat(document.getElementById("tinggiTabung").value);
    const volume    = Math.PI * jari_jari ** 2 * tinggi;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2);
}

function volumeKerucut() {
    const jari_jari = parseFloat(document.getElementById("jariKerucut").value);
    const tinggi    = parseFloat(document.getElementById("tinggiKerucut").value);
    const volume    = 1/3 * Math.PI * jari_jari **2 * tinggi;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2); 
}

function volumeBola() {
    const jari_jari  = parseFloat(document.getElementById("jariBola").value);
    const volume     = 4/3 * jari_jari * jari_jari * jari_jari * Math.PI;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2);
}

function volumePrisma() {
    const tinggiP = parseFloat(document.getElementById("tinggiPrisma").value);
    const tinggiS = parseFloat(document.getElementById("tinggiSegitiga").value);
    const alasS   = parseFloat(document.getElementById("alasSegitiga").value);
    const volume  = (0.5 * tinggiS * alasS) * tinggiP;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2);
}

function volumeLimas() {
    const tinggiL = parseFloat(document.getElementById("tinggiLimas").value);
    const tinggiS = parseFloat(document.getElementById("tinggiSegitiga").value);
    const alasS   = parseFloat(document.getElementById("alasSegitiga").value);
    const volume = 1/3 * (tinggiS * alasS) * tinggiL;
    document.getElementById("hasilVolume").textContent = volume.toFixed(2);
}

// Menampilkan inputan yang sesuai ketika user memilih bangun ruang
document.getElementById("volume").addEventListener("change", function() {
    const bangun = this.value;
    const bangunRuang = document.getElementById("items");

    if (bangun === "kubus") {
        bangunRuang.innerHTML = `
            <label for="sisiKubus"><h4>PANJANG SISI</h4></label>
            <input type="number" id="sisiKubus">
        `;
    }
    else if (bangun === "balok") {
        bangunRuang.innerHTML = `
        <label for="panjangBalok"><h4>PANJANG BALOK</h4></label><input type="number" id="panjangBalok" placeholder = "(cm)">
        <label for="lebarBalok"><h4>LEBAR BALOK</h4></label><input type="number" id="lebarBalok" placeholder = "(cm)">
        <label for="tinggiBalok"><h4>TINGGI BALOK</h4></label><input type="number" id="tinggiBalok" placeholder = "(cm)">
        `;
    }
    else if (bangun === "tabung") {
        bangunRuang.innerHTML = `
        <label for="jariTabung"><h4>JARI - JARING TABUNG</h4></label><input type="number" id="jariTabung" placeholder = "(cm)">
        <label for="tinggi"><h4>TINGGI TABUNG</h4></label><input type="number" id="tinggiTabung" placeholder = "(cm)">
        `;
    }
    else if (bangun === "kerucut") {
        bangunRuang.innerHTML = `
        <label for="jariKerucut"><h4>JARI - JARI KERUCUT</h4></label><input type="number" id="jariKerucut" placeholder = "(cm)">
        <label for="tinggiKerucut"><h4>TINGGI KERUCUT</h4></label><input type="number" id="tinggiKerucut" placeholder = "(cm)">
        `;
    }
    else if (bangun === "bola") {
        bangunRuang.innerHTML = `
        <label for="jariBola"><h4>JARI - JARI BOLA</h4><label><input type="number" id="jariBola" placeholder = "(cm)">
        `
    }
    else if (bangun === "limas") {
        bangunRuang.innerHTML = `
        <label for="tinggiLimas"><h4>TINGGI LIMAS</h4></label><input type="number" id="tinggiLimas" placeholder = "(cm)">
        <label for="tinggiSegitiga"><h4>TINGGI ALAS</h4></label><input type="number" id="tinggiSegitiga" placeholder = "(cm)">
        <label for="alasSegitiga"><h4>PANJANG ALAS</h4></label><input type="number" id="alasSegitiga" placeholder = "(cm)">
        `;
    }
    else if (bangun === "prisma") {
        bangunRuang.innerHTML = `
        <label for="tinggiPrisma"><h4>TINGGI LIMAS</h4></label><input type="number" id="tinggiPrisma" placeholder = "(cm)">
        <label for="tinggiSegitiga"><h4>TINGGI ALAS</h4></label><input type="number" id="tinggiSegitiga" placeholder = "(cm)">
        <label for="alasSegitiga"><h4>PANJANG ALAS</h4></label><input type="number" id="alasSegitiga" placeholder = "(cm)">
        `;
    }
    else {
        bangunRuang.innerHTML = "";
    }
});

document.getElementById("hitungBR").addEventListener("click", function(event) {
    event.preventDefault();
    const ruang = document.getElementById("volume").value;
    switch(ruang) {
        case "kubus" :
            volumeKubus();
            break;
    
        case "balok" :
            volumeBalok();
            break;
    
        case "tabung" :
            volumeTabung();
            break;
    
        case "kerucut" :
            volumeKerucut();
            break;
    
        case "bola" :
            volumeBola();
            break;

        case "limas" :
            volumeLimas();
            break;
        
        case "prisma" :
            volumePrisma();
            break;
    }
});
