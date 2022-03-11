//Muhammad Reynaldi

  const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

function getInfoPenjualan(dataPenjualan){
  if(dataPenjualan == null) return "Error: Tidak ada isinya?";
  if (typeof dataPenjualan !== "object") return "Error: Tipe Data Salah"

        const totalHargaJual = dataPenjualan.reduce((prev,curr) => prev + (curr.hargaJual * curr.totalTerjual),0);
        const totalHargaModal = dataPenjualan.reduce((prev,curr) => prev + (curr.hargaBeli * (curr.totalTerjual + curr.sisaStok)),0);
        const produkBukuTerlaris = dataPenjualan.reduce((prev,curr) => curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.namaProduk);

        const arrPenulis = dataPenjualan.map(item => item.penulis).filter((item, index, arr) => arr.indexOf(item) == index);

        const terjualBuku = arrPenulis.reduce((acc, curr) => (acc[curr] = dataPenjualan.map(item => item.penulis == curr ? item.totalTerjual : 0).reduce(((acc, curr) => acc + curr), 0), acc), {});

        const penulisTerlaris = Object.keys(terjualBuku).find(item => terjualBuku[item] === Math.max(...Object.values(terjualBuku)));

        const persenUntung = totalHargaJual/ totalHargaModal * 100 - 100;
        const persentaseKeuntungan = persenUntung.toFixed(2) + "%";

        const totalModal = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(totalHargaModal);
        const totalKeuntungan = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(totalHargaJual-totalHargaModal);

        let penjualanNovel = {

        totalKeuntungan,
        totalModal,
        persentaseKeuntungan,
        produkBukuTerlaris,
        penulisTerlaris
        }
        return penjualanNovel;
    }

  console.log(getInfoPenjualan(dataPenjualanNovel));