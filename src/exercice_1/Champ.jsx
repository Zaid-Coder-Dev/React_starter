import { useState } from "react";

export default function Champ() {
  const [pseudo, setPseudo] = useState("");

  return (
    <div className="champ-container">
      <input
        type="text"
        name="champ"
        id="champ"
        value={pseudo}
        maxlength={20}
        onChange={(e) => setPseudo(e.target.value)}
        placeholder="Maximum 20 caracteres"
      />

      <p className={pseudo.length === 20 ? "alert" : "succes"}>
        {pseudo.length + "/20 caractères"}
      </p>

      <p htmlFor="apercu">Aperçu en direct:</p>
      <b>Bonjour, {pseudo ? pseudo : "anonyme"} !</b>
    </div>
  );
}
