function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if (dataArray.length> 5 && nilaiAwal <= nilaiAkhir) {
        let cekData = dataArray.filter(dataArray =>dataArray >= nilaiAwal && dataArray <= nilaiAkhir )
        console.log(cekData.sort((a,b)=>a-b)); //pengurutan dari angka terkecil-terbesar
    } else {
        console.log("Jumlah angka dalam dataArray tidak ada/kurang");
    }
}

seleksiNilai(5,30,[3,-1,25,18, 5, 20, 38, 29,30]);

// function masuk(nama){
// let toPascalCase = str => str.replace(/\w\S*/g, m=>m.charAt(0).toUpperCase()+m.substr(1).toLowerCase());
// console.log(toPascalCase(nama));
// }

// masuk("waduh")