// COMPONENT
export default function Calendar({ source }) {

    const iconUrl = "./src/assets/img/icons/";

    // FUNZIONI
    const boxOpened = event => {
        event.currentTarget.classList.add('box-opened');
    };

    return (
        <div className="calendar">
            {source.map((t) => {
                return (
                    <div key={t.id} className="box" onClick={boxOpened}>
                        <img src={iconUrl + t.icon + ".png"} alt={t.icon} className="box-icon" />
                        <div className="box-date">{t.id + 1}</div>
                    </div>
                );
            })
            }
        </div>
    );
}

