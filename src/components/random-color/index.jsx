import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex"); //typeOfColor kullanıcın seçtiği renk türünü saklar.
  const [color, setColor] = useState("#000000"); // color oluşturulan rastgele renk değerini saklar.

  function randomColorUtility(length) { //Belirtilen uzunlukta rastgele bir sayı üreten yardımcı bir fonksiyon
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {//Rastgele bir HEX renk oluşturan fonksiyon
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {//Rastgele bir HEX renk oluşturan fonksiyon
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {//typeOfColor değiştiğinde, uygun renk oluşturma işlevini çağırır ve color durumunu günceller.
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  /*Renk değiştirme butonları, kullanıcının renk türünü seçmesine ve rastgele bir renk oluşturmasına olanak tanır.
  Oluşturulan renk ve türü, ekranda büyük bir metin olarak gösterilir. */
  return ( 
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}