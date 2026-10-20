export default function PasPlus(props) {
    return (
        <div>
            <fieldset>
                <legend>Pas d'incrémentation</legend>

                <button onClick={() => props.changer(1)}>1</button>
                <button onClick={() => props.changer(2)}>2</button>
                <button onClick={() => props.changer(3)}>3</button>
                <button onClick={() => props.changer(4)}>4</button>
            </fieldset>

        </div>
    );
}