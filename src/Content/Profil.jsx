import Detail from "./Detail"
import General from "./General"
import Other from "./Other"

export default function Profil() {
    let s = {
        display: 'flex',
        flexDirection: 'row',
        
        gap: '25px',
        width: '85%',
        margin: '35px auto'
    };

    let leftStyle = {
        width: '30%'
    };

    let rightStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        width: '70%'
    };

    return (
        <div style={s}>
            <div style={leftStyle}>
                <Detail/>
            </div>

            <div style={rightStyle}>
                <General/>
                <Other/>
            </div>
        </div>
    );
}