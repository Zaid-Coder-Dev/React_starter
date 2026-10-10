export default function Navigation() {
    let s = {backgroundColor: '#bdf7ed',padding: '15px'};

    let ulStyle = {display: 'flex',justifyContent: 'center',gap: '40px',listStyleType: 'none',margin: '0',padding: '0'};

    let linkStyle = {color: '#24554e',textDecoration: 'none',fontWeight: 'bold',fontSize: '16px'};

    return (
        <div style={s}>
            <ul style={ulStyle}>
                <li><a href="#" style={linkStyle}>Accueil</a></li>
                <li><a href="#" style={linkStyle}>Profil</a></li>
                <li><a href="#" style={linkStyle}>Contact</a></li>
            </ul>
        </div>
    );
}