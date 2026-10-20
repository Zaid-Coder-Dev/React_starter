
import { useState } from 'react';
import Historique from './Historique';
import MoodDisplay from './MoodDisplay';

const moods = [
    { label: "😊 Heureux", value: "Heureux", color: "#ffeb3b" },
    { label: "😴 Fatigué", value: "Fatigué", color: "#81d4fa" },
    { label: "😡 Stressé", value: "Stressé", color: "#ef9a9a" },
    { label: "😎 Motivé", value: "Motivé", color: "#a5d6a7" },
];

export default function MoodSelector() {
    const [history, setHistory] = useState([]);
    const [mood, setMood] = useState({});

    function afficher(mood) {
        setMood(mood);
        setHistory([...history, mood]);
    }

    return (
        <div>
            <div style={{display: "flex",gap: "10px",justifyContent: "center",flexWrap: "nowrap"}}>
                {moods.map(mood =>
                    <button
                        key={mood.value}
                        style={{backgroundColor: mood.color, width: "130px", height: "50px",border: "none",borderRadius: "8px",cursor: "pointer",flexShrink: 1}}
                        onClick={() => afficher(mood)}>
                            {mood.label}
                    </button>
                )}
            </div>

            <div style={{display: "flex",gap: "10px",justifyContent: "center",flexWrap: "nowrap", textAlign: "center", margin: "15px" }}>
                <button
                    onClick={() => setMood({})}
                    style={{backgroundColor: '#000000', padding: "10px 20px",border: "none",borderRadius: "8px",cursor: "pointer"}}>
                    Réinitialiser 
                </button>
                <button
                    onClick={() => setHistory([])}
                    style={{backgroundColor: 'crimson', padding: "10px 20px",border: "none",borderRadius: "8px",cursor: "pointer"}}>
                    Effacer l’historique 
                </button>


            </div>

            <div>
                <MoodDisplay mood={mood} />
            </div>

            <div>
                <h2>Historique des humeurs</h2>
                <Historique history={history} />
            </div>
        </div>
    );
}
