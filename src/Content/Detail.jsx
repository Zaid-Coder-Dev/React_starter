export default function Detail() {
    let s = {
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px #d5e8e3',
        textAlign: 'center'
    };

    let imgStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '4px solid #bdf7ed',
        objectFit: 'cover'
    };

    let titleStyle = {
        color: '#168f80',
        fontSize: '21px'
    };

    let pStyle = {
        textAlign: 'left',
        color: '#536b67',
        margin: '12px 0'
    };

    return (
        <div style={s}>
            <img src="https://i.pravatar.cc/300" alt="Person" style={imgStyle}/>
            <h2 style={titleStyle}>Mohamed El Bakkali</h2>
            <hr/>
            <p style={pStyle}><b>Student ID:</b> 321000001</p>
            <p style={pStyle}><b>Class:</b> 4</p>
            <p style={pStyle}><b>Section:</b> A</p>
        </div>
    );
}