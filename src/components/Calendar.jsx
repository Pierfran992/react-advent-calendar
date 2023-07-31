// IMPORT


// COMPONENT
export default function Calendar({ source }) {
    const iconUrl = "./src/assets/img/icons/";

    return (
        <div className="calendar">
            {source.map((t) => {
                return (
                    <div key={t.id} className="box">
                        <img src={iconUrl + t.icon + ".png"} alt={t.icon} className="box-icon" />
                        <div className="box-date">{t.id + 1}</div>
                    </div>
                );
            })
            }
        </div>
    );
}

