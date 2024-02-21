import { useEffect } from "react";
import { useState } from "react"
import "./styles.css";


export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);//loading: Verilerin yüklenip yüklenmediğini belirten bir bayrak.
    const [products, setProducts] = useState([]);//products: Yüklenen ürünleri saklayan bir dizi.
    const [count, setCount] = useState(0);//count: Kaç kez "Daha Fazla Ürün Yükle" düğmesine basıldığını sayan bir sayaç.
    const [disableButton, setDisableButton] = useState(false);//disableButton: Daha fazla ürün yüklenememesi durumunda düğmenin devre dışı bırakılmasını kontrol eden bir bayrak.


    async function fetchProducts() {//fetchProducts(): API'den ürün verilerini getiren ve bileşenin durumunu güncelleyen asenkron bir fonksiyon.
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );
            const result = await response.json();
            console.log(result);

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false)
            }
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }

    useEffect(() => {//useEffect, bileşen yüklendiğinde ve her count değiştiğinde fetchProducts fonksiyonunu çağırır.
        fetchProducts()
    }, [count]);

    useEffect(() => {//useEffect, products dizisi 100 ürünle dolduğunda "Daha Fazla Ürün Yükle" düğmesini devre dışı bırakır.
        if (products && products.length === 100) setDisableButton(true)
    })

    if (loading) {
        return <div>Loading data ! Please wait.</div>
    }

    /*- Ürünleri ve yükleme düğmesini görüntüler.
    -Yükleme sırasında bir yüklenme iletişim kutusu görüntülenir.
    -Ürünler, products dizisindeki her bir öğe için bir 
    <div> elemanı olarak oluşturulur ve ürünün resmi ve başlığı görüntülenir.
    -"Daha Fazla Ürün Yükle" düğmesi, düğmenin devre dışı bırakılması durumunda devre dışı bırakılır
     ve kullanıcıya 100 ürüne ulaşıldığına dair bir mesaj görüntülenir. */
    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length
                    ? products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
                {disableButton ? <p>You have reached to  100 products</p> : null}
            </div>
        </div>
    )
}