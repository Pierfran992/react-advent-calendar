import { useState } from "react";
import Modal from "./Modal";

// COMPONENT
export default function Calendar({ source }) {
    const iconUrl = "./src/assets/img/icons/";
    // array che prende i valori del local storage se ce ne sono presenti o restituisce un array vuoto se non ne ha
    const storedDay = !!localStorage.getItem('showDays') ? JSON.parse(localStorage.getItem('showDays')) : [];

    // useState per l'apertura della modale
    const [modal, setModal] = useState(false);
    const [tempData, setTempData] = useState([]);

    // FUNZIONI
    // funzione che assegna al box la classe per identificarlo come aperto e l'ho invia al localstorage controllando se è già presente o no
    const boxOpened = (e, t) => {
        const isStoredDay = storedDay.find(elem => elem === t.id + 1);
        if (!isStoredDay) {
            e.currentTarget.classList.add('box-opened');
            storedDay.push(t.id + 1);
            localStorage.setItem('showDays', JSON.stringify(storedDay))

            openModal(t);
        }
    };

    // funzione per l'apertura della modale
    const openModal = (elem) => {
        let surpriseElem = { elem };
        console.log(surpriseElem);
        setTempData(surpriseElem);

        return setModal(true);
    }

    // funzione per la chiusura della modale
    const closeModal = () => {
        return setModal(false);
    }


    return (
        <>
            <div className="calendar">
                {source.map((t) => {
                    const isStoredDay = storedDay.find(elem => elem === t.id + 1);
                    return (
                        //{/* !!isStoredDay && isStoredDay.lenght > 0 ? "box box-opened" : "box" */}
                        <div key={t.id}
                            className={!!isStoredDay ? "box box-opened" : "box"}
                            onClick={(e) => boxOpened(e, t)}
                        >
                            <img src={iconUrl + t.icon + ".png"} alt={t.icon} className="box-icon" />
                            <div className="box-date">{t.id + 1}</div>
                        </div>
                    );
                })
                }
            </div>
            {
                modal === true ? <Modal t={tempData} action={closeModal} /> : ''
            }

        </>
    );
}

