export default function Footer() {
    let s = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        color: '#536b67',
        borderTop: '2px solid #bdf7ed',
        marginTop: 'auto'
    };

    return (
        <div style={s}>
            <i>copyright DEVOFS202 – votre nom – année 2024/2025</i>
        </div>
    );
}