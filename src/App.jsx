import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";
import Select from "./components/Select";
import Nombre from "./components/Nombre";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Card from "./components/Card";

const villes = [
  "Tanger",
  "Rabat",
  "Salé",
  "Casablanca",
  "Marrakech",
  "Fès",
  "Agadir",
];
const niveaux = ["Bronze", "Silver", "Gold", "Platinum"];

function App() {
  // usestate
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [adresse2, setAdresse2] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [niveau, setNiveau] = useState("");
  const [accepte, setAccepte] = useState(false);
  const [resultat, setResultat] = useState(null);

  // Gestion des erreurs
  const errors = {};

  if (prenom !== "" && prenom.length < 2) errors.prenom = "Au moins 2 lettres";
  if (nom !== "" && nom.length < 2) errors.nom = "Au moins 2 lettres";
  if (codePostal !== "" && !/^[0-9]{5}$/.test(codePostal))
    errors.codePostal = "5 chiffres";
  if (telephone !== "" && !/^0[5-7][0-9]{8}$/.test(telephone))
    errors.telephone = "10 chiffres, commence par 05, 06 ou 07";
  if (email !== "" && !(email.includes("@") && email.includes(".")))
    errors.email = "Email invalide";

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    setResultat({
      prenom,
      nom,
      adresse,
      adresse2,
      ville,
      codePostal,
      telephone,
      email,
      niveau,
    });
  }

  return (
    <>
      <Header
        titre="Membership Registration"
        sousTitre="Rejoignez le club en 2 minutes"
      />
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Identité</legend>
            <div className="ligne">
              <div>
                <Text
                  label="Prénom"
                  name="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
                {errors.prenom && <p className="erreur">{errors.prenom}</p>}
              </div>
              <div>
                <Text
                  label="Nom"
                  name="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
                {errors.nom && <p className="erreur">{errors.nom}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Adresse</legend>
            <Text
              label="Adresse"
              name="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              required
            />
            <Text
              label="Adresse ligne 2"
              name="adresse2"
              value={adresse2}
              onChange={(e) => setAdresse2(e.target.value)}
            />
            <div className="ligne">
              <Select
                label="Ville"
                name="ville"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                options={villes}
                required
              />
              <div>
                <Nombre
                  label="Code postal"
                  name="codePostal"
                  value={codePostal}
                  onChange={(e) => setCodePostal(e.target.value)}
                  maxLength={5}
                  placeholder="93000"
                  required
                />
                {errors.codePostal && (
                  <p className="erreur">{errors.codePostal}</p>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Contact</legend>
            <Nombre
              label="Téléphone"
              name="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              maxLength={10}
              placeholder="0612345678"
              required
            />
            {errors.telephone && <p className="erreur">{errors.telephone}</p>}
            {telephone !== "" && !errors.telephone && (
              <p className="ok">✓ Numéro valide</p>
            )}

            <Text
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="erreur">{errors.email}</p>}
            {email !== "" && !errors.email && (
              <p className="ok">✓ Email valide</p>
            )}
          </fieldset>

          <Radio
            label="Choisissez votre niveau"
            name="niveau"
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
            options={niveaux}
            required
          />

          <Checkbox
            label="J'accepte les conditions générales"
            name="accepte"
            checked={accepte}
            onChange={(e) => setAccepte(e.target.checked)}
            required
          />

          <p>
            <button type="submit" disabled={!accepte}>
              Registrer
            </button>
          </p>
        </form>

        {resultat && <Card resultat={resultat} onClick={(e)=>setResultat(null)}/>}
      </main>
    </>
  );
}

export default App;
