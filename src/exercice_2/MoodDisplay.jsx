
export default function MoodDisplay(props) {
    let mood = props.mood;
    let card={backgroundColor: mood.color || "#f5f5f5", padding: "25px",margin: "20px auto",borderRadius: "15px",boxShadow: "0 4px 12px rgba(0,0,0,0.15)",textAlign: "center",maxWidth: "350px",transition: "0.3s",border: "1px solid rgba(0,0,0,0.1)"}
    return (
        <div style={card}>
            <p style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
                margin: "0"
            }}>
                Aujourd'hui, je me sens {mood.value || "Aucune"} !
            </p>
        </div>
    );
}
