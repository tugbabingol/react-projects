import { useState } from "react";
import QRCode from "react-qr-code";



export default function QRCodeGenerator(){ 

    const [qrCode, setQrCode] = useState('');//qrCode: Oluşturulan QR kodunu saklayan bir state değişkeni.
    const [input, setInput] = useState('');//input: Kullanıcının girdiği metni saklayan bir state değişkeni.

    function handleGenerateQrCode(){
        //Kullanıcının girdiği metni temel alarak QR kodunu oluşturan bir işlev. Bu işlev, qrCode state'ini günceller ve input state'ini sıfırlar.
        setQrCode(input);
        setInput('')
    }

    /* Kullanıcıya bir metin girişi ve bir düğme sunar. Metin girişi, 
    kullanıcının QR kodu oluşturmak için bir metin girmesine olanak tanır.
    -"Generate" düğmesi, girdinin boş olmadığı veya sadece boşluklardan oluşmadığı durumlarda etkinleştirilir.
    -Oluşturulan QR kodu, QRCode bileşeni kullanılarak görüntülenir. 
    Bu bileşen value prop'u ile QR kodunun içeriğini alır ve size prop'u ile boyutunu belirler.
    -QR kodu bileşeninin arka plan rengi (bgColor) beyaz olarak ayarlanmıştır. */
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter your value here" />
                <button disabled={input && input.trim() !== '' ?false :true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <QRCode 
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="#fff"
                />
            </div>
        </div>
    )
}