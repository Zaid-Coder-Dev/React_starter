export default function Other() {
    let s = {
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px #d5e8e3'
    };

    let titleStyle = {
        color: '#168f80',
        fontSize: '21px',
        marginTop: '0'
    };

    let pStyle = {
        color: '#536b67',
        lineHeight: '1.7',
        fontSize: '15px'
    };

    return (
        <div style={s}>
            <h2 style={titleStyle}>▣ Other Information</h2>
            <p style={pStyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis nulla sapiente at distinctio itaque quod cum
                veniam consectetur provident. Error quam quasi repellat
                ab architecto reiciendis nesciunt alias.
            </p>
        </div>
    );
}