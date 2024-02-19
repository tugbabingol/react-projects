import { useState} from 'react';
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0);//Kullanıcının seçtiği dereceyi saklar.
    const [hover, setHover] = useState(0);//Kullanıcının fareyi bir yıldıza getirip getirmediğini takip eder.

    function handleClick(getCurrentIndex) {//Kullanıcıcn bir yıldıza tıkladığında çağrılır vve dereceyi ayarlar.
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) { //Kullanıcın fareyi bir yıldız üzerine getirdiğinde çağrılır ve geçici olarak gösterilen dereceyi ayarlar.
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {//Kullanıcı fareyi yıldızların dışına çıkardığında çağrılır ve geçici gösterilen dereceyi kalıcı hale getirir.
        setHover(rating)
    }

    /*
    Yıldızları görüntüler ve her bir yıldız için olay işleyicilerini ayarlar.
    Yıldızlar, noOfStars prop'u tarafından belirtilen sayıda oluşturulur.
    Yıldızlar, aktif veya pasif olmalarına bağlı olarak bir sınıf atar ve bu,
    kullanıcının mevcut derecesini veya geçici olarak gösterilen dereceyi temsil eder.
    */
    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {

                    index += 1


                    return( <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />);
                })
            }
        </div>
    );
}
