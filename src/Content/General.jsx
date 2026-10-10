export default function General() {
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

    let cellStyle = {
        border: '1px solid #e0eeeb',
        padding: '12px',
        textAlign: 'left'
    };

    return (
        <div style={s}>
            <h2 style={titleStyle}>▣ General Information</h2>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <tbody>
                    <tr>
                        <td style={cellStyle}><b>Roll</b></td>
                        <td style={cellStyle}>:</td>
                        <td style={cellStyle}>125</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><b>Academic Year</b></td>
                        <td style={cellStyle}>:</td>
                        <td style={cellStyle}>2020</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><b>Gender</b></td>
                        <td style={cellStyle}>:</td>
                        <td style={cellStyle}>Male</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><b>Religion</b></td>
                        <td style={cellStyle}>:</td>
                        <td style={cellStyle}>Group</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><b>Blood</b></td>
                        <td style={cellStyle}>:</td>
                        <td style={cellStyle}>B+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}