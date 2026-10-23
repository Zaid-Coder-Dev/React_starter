export default function UserCard2(props) {

    let address = props.user.address.street + ' ' +
                  props.user.address.suite + ' ' +
                  props.user.address.city;

    let company=props.user.company.name;

    const card = {backgroundColor: "#000000", padding: "20px", margin: "15px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", border: "1px solid #dddddd", fontFamily: "Arial, sans-serif", lineHeight: "1.8"};

    const title = {fontSize: "20px", color: "#ebdb25", marginBottom: "10px"};

    const info = {color: "#ffffff",fontSize: "14px"};

    return (
        <div style={card}>
            <h3 style={title}>{props.user.name}</h3>
                <p style={info}>
                    <strong>Email :</strong> {props.user.email}
                </p>

                <p style={info}>
                    <strong>Téléphone :</strong> {props.user.phone}
                </p>

                <p style={info}>
                    <strong>Adresse :</strong> {address}
                </p>

                <p style={info}>
                    <strong>Company :</strong> {company}
                </p>
        </div>
    );
}