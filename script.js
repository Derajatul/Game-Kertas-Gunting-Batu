let tanya = true;
while (tanya) {
	// Menangkap pilihan player
	let player = prompt("Pilih : kertas, gunting atau Batu?");
	// Menangkap pilihan komputer
	// Membangkitkan bilangan random
	let computer = Math.random();
	if (computer < 0.34) computer = "kertas";
	else if (computer >= 0.34 && computer < 0.67) {
		computer = "gunting";
	} else {
		computer = "batu";
	}

	// Menentukan rules
	let hasil = "";
	if (player == computer) {
		hasil = "hasilnya seri";
	} else if (player == "kertas") {
		hasil = computer == "gunting" ? "Kalah" : "Menang";
	} else if (player == "gunting") {
		hasil = computer == "batu" ? "Kalah" : "Menang";
	} else if (player == "batu") {
		hasil = computer == "kertas" ? "kalah" : "Menang";
	} else {
		hasil = "Ga ada itu woy";
	}

	// Tampilkan hasilnya
	alert(
		`kamu memilih ${player} dan komputer memilih ${computer}\nMaka hasilnya ${hasil}`
	);
	tanya = confirm("lagi ga?");
}
