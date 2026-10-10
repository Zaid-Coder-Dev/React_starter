export default function Header(){
    let s = {display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '20px',padding: '20px',backgroundColor: 'white',borderBottom: '2px solid #bdf7ed'};
    let titleStyle = {color: '#168f80',fontSize: '28px',margin: '0'};
    let imgStyle = {width: '60px',height: '60px',objectFit: 'contain'};
    return (
    <div style={s}>
        <img src="https://placeholdpicsum.dev/200/200/4f9f91/ffffff" alt="Logo" style={imgStyle}/>
        <h1 style={titleStyle}>Something-Something</h1>
    </div>
);
}