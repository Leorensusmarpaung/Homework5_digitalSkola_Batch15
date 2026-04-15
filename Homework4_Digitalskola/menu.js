import { kalkulator } from "./rumus.js";
import readline from "readline";

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Tampilan Utama
console.log("APLIKASI KALKULATOR SEDERHANA");

// input angka pertama
inputUser.question("Masukkan angka pertama: ", (angka1) => {

  // input angka kedua
  inputUser.question("Masukkan angka kedua: ", (angka2) => {

    // input operator
    inputUser.question("Masukkan operator (+, -, *, /): ", (operator) => {

      //  validasi angka 
      if (isNaN(angka1) || isNaN(angka2)) {
        console.log("Input harus berupa angka!");
        inputUser.close();
        return;
      }

      // hasil
      console.log(
        `Hasil: ${kalkulator(
          parseFloat(angka1),
          parseFloat(angka2),
          operator
        )}`
      );

      inputUser.close();
    });

  });

});