import React, { useState } from "react";

const countries = [
  { id: 1, name: "Indonesia" },
  { id: 2, name: "Malaysia" },
  { id: 3, name: "Singapura" },
  { id: 4, name: "Thailand" },
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [color, setColor] = useState("red");

  function handleChange(event) {
    const selectedId = parseInt(event.target.value);
    const newSelectedCountry = countries.find(
      (country) => country.id === selectedId
    );
    setSelectedCountry(newSelectedCountry);
  }

  function handleClick() {
    alert(`Anda memilih ${selectedCountry.name} dan tombol telah diklik!`);
  }

  function changeColor() {
    const newColor = color === "red" ? "blue" : "red";
    setColor(newColor);
  }

  return (
    <div>
      <h1>Tekan Tombol dan Pilih Negara!</h1>
      <button onClick={handleClick}>Tekan Saya!</button>
      <br />
      <br />
      <h2>ini adalah fungsi Pilih Negara</h2>
      <select value={selectedCountry.id} onChange={handleChange}>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <p>Anda memilih: {selectedCountry.name}</p>

      <br />

      <h1 style={{ color }}>Ini adalah fungsi merubah warna</h1>
      <button onClick={changeColor}>Ubah Warna!</button>
    </div>
  );
}

export default App;
