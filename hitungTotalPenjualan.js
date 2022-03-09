// Muhammad Reynaldi

const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

  function HitungTotalPenjualan(dataPenjualan) {
    if(dataPenjualan == null){
        return "Error: Tidak ada isinya?";
    }
    else{
        if (typeof dataPenjualan !== "object") {
            return "Error: Tipe Data Salah";
        }
        else{
            const nilaiAwal = 0;
            return dataPenjualan.reduce(
                (prev,curr) => prev + curr.totalTerjual,
                nilaiAwal
              );
            }
        }
    }

console.log(HitungTotalPenjualan(dataPenjualanPakAldi));