//single selection
//multiple selection

import { useState } from "react"
import data from "./data";
import './styles.css';

export default function Accordian() {

    const [selected, setSelected] = useState(null); //selected tekli seçim modunda kullanıcın şu anda seçili olan öğenin kimliğini tutar
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);//Çoklu seçim modunun açık veya kapalı olduğunu belirleyrn bayrak
    const [multiple, setMultiple] = useState([]);//çoklu seçim modundakullanıcın seçtiği tümöğelerinin kimliklerinin bir dizi olarak tutar
 
    /*Tekli seçim modunda çalışır. Kullanıcının bir öğeyi tıkladığında çağrılır. 
    Eğer tıklanan öğe zaten seçili ise seçimi iptal eder (null yapar), değilse tıklanan öğeyi seçer. 
    Yani, seçili öğe yoksa, tıklanan öğeyi seçer; aksi halde seçimi kaldırır. */
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    /*Çoklu seçim modunda çalışır. Kullanıcının bir öğeyi tıkladığında çağrılır. 
    Öncelikle multiple dizisinin bir kopyasını oluşturur.
     Daha sonra, tıklanan öğenin multiple dizisindeki mevcut durumunu kontrol eder.
      Eğer öğe multiple dizisinde yoksa, diziye ekler; eğer öğe zaten dizide varsa, diziden çıkarır.
     Son olarak, güncellenmiş multiple dizisini ayarlar. */
    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMutiple);
    }

    console.log(selected, multiple);
    return ( //Render Fonksiyonu
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (<div className="item">
                        <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content">{dataItem.answer}</div>)
                                : selected === dataItem.id && (
                                    <div className="content">{dataItem.answer}</div>
                                )
                        }
                        {
                            /* selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1  ? (
                                <div className="content">{dataItem.answer}</div>) : null */
                        }
                    </div>))) : (<div>No data found!</div>)
                }
            </div>
        </div>)
}