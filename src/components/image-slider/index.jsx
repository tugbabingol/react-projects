import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);//images görüntüleri saklar
    const [currentSlide, setCurrentSlide] = useState(0);//currentSlide şu anda görüntülenen slaytın dizinini saklar
    const [errorMsg, setErrorMsg] = useState(null);// errrorMsg hata durumunda kullanıcıya gösterilecek hata iletisini saklar
    const [loading, setLoading] = useState(false);//loading verilerin yüklenip yüklenmediğini belirten bir bayrak

    async function fetchImages(getUrl) { //Belirtilen URL den görüntüleri getirir ve bileşenin durumunu günceller
        try {
            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious() { //önceki butonuna tıklandığında çalışır ve mevcut slaytı azaltır
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {//sonraki butona tıklandığında çalışır ve mevcut slaytı artırır.
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => { //url değiştiğinde, yeni bir url ile görüntüleri getirmek için fetchImages fonksiyonunu çağırır 
        if (url !== "") fetchImages(url);
    }, [url]);

    console.log(images);

    if (loading) {
        return <div> Loading data ! Please wait </div>
    }

    if (errorMsg !== null) {
        return <div> Error occured ! {errorMsg} </div>
    }

    /* Görüntüleri ve gezinme düğmelerini görüntüler.
    Görüntüler, images dizisindeki her bir öğe için bir <img> elemanı olarak oluşturulur 
    ve currentSlide durumuna bağlı olarak görünürlükleri ayarlanır.
    Önceki ve sonraki gezinme düğmeleri, ilgili işleyicilere sahiptir.
    Sayfa göstergeleri, kullanıcıya şu anda hangi slaytta olduğunu gösterir 
    ve bu düğmeler, tıklanabilir olduklarında ilgili slayda geçmek için kullanılabilir.*/
    return (
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="arrow arrow-left"
            />
            {images && images.length
                ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={
                            currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                        }
                    />
                ))
                : null}
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-rigth"
            />
            <span className="circle-indicators">
                {images && images.length
                    ? images.map((_, index) => (
                        <button
                            key={index}
                            className={
                                currentSlide === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-indicator"
                            }
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                    : null}
            </span>
        </div>
    );
}