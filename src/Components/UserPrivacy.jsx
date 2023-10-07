import React from "react";
import Navbar from "./Partials/Navbar";

function UserPrivacy() {
  return (
    <div>
      <Navbar />
      <div className="muli bg-gray-100 py-8 mt-20">
        <div className="max-w-screen-lg mx-auto px-4">
          <h1 className="fonty text-3xl font-semibold text-center mb-8">
            Informativa sulla Privacy
          </h1>
          <p className="text-sm text-center mb-4">
            Ultimo aggiornamento: 03/10/2023
          </p>
          <p className="mb-4">Gentile Utente,</p>
          <p className="mb-4">
            La tua privacy è importante per noi. Questa Informativa sulla
            Privacy descrive come raccogliamo, utilizziamo, divulghiamo e
            proteggiamo le informazioni personali che ci fornisci attraverso il
            nostro sito web Stocky, operato dalla ditta individuale Partita Iva
            n. 09536251219 ("Noi", "Il nostro", "Noi").
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              1. Raccolta delle Informazioni Personali
            </h2>
            <ul className="list-disc pl-6">
              <li>Nome</li>
              <li>Cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Preferenze personali</li>
              <li>Nome dell'azienda</li>
              <li>Sito web</li>
            </ul>
            <p className="mt-2">
              Raccogliamo queste informazioni quando le fornisci volontariamente
              attraverso moduli di registrazione, contatti o altre interazioni
              con il nostro sito.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              2. Utilizzo delle Informazioni Personali
            </h2>
            <p>
              Utilizziamo le informazioni personali raccolte per i seguenti
              scopi:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Per fornire i servizi offerti attraverso il nostro marketplace.
              </li>
              <li>
                Per migliorare il nostro sito web e i servizi che offriamo.
              </li>
              <li>
                Per comunicare con te, rispondere alle tue domande o richieste e
                inviarti informazioni relative ai nostri servizi.
              </li>
              <li>
                Per inviarti aggiornamenti, promozioni e offerte speciali.
              </li>
              <li>Per adempiere agli obblighi legali e regolamentari.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              3. Divulgazione delle Informazioni Personali
            </h2>
            <p>
              Non condividiamo le tue informazioni personali con terze parti,
              tranne che nei seguenti casi:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Con i nostri partner, fornitori di servizi o collaboratori di
                fiducia che ci aiutano a gestire il nostro sito web e offrire i
                servizi.
              </li>
              <li>
                Quando è richiesto dalla legge o per rispettare obblighi legali.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              4. Protezione delle Informazioni Personali
            </h2>
            <p>
              Forniamo misure di sicurezza appropriate per proteggere le
              informazioni personali raccolte da accessi non autorizzati,
              perdite, alterazioni o divulgazioni. Tuttavia, nessun sistema di
              sicurezza può essere garantito al 100%.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">5. I tuoi Diritti</h2>
            <p>
              Hai diritto di accedere, correggere, cancellare o limitare l'uso
              delle tue informazioni personali. Puoi anche opporsi all'uso delle
              tue informazioni personali per scopi di marketing diretto. Per
              esercitare questi diritti, contattaci tramite le informazioni
              fornite alla fine di questa Informativa sulla Privacy.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              6. Cookie e Tecnologie Simili
            </h2>
            <p>
              Il nostro sito web utilizza cookie e altre tecnologie simili per
              migliorare l'esperienza dell'utente e raccogliere informazioni
              anonime sulla navigazione. Puoi gestire le tue preferenze sui
              cookie attraverso le impostazioni del tuo browser.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">
              7. Modifiche all'Informativa sulla Privacy
            </h2>
            <p>
              Ci riserviamo il diritto di aggiornare questa Informativa sulla
              Privacy periodicamente per riflettere cambiamenti nelle nostre
              pratiche o nell'ambiente normativo. Ti invitiamo a rivedere questa
              Informativa sulla Privacy regolarmente per essere informato su
              come gestiamo le tue informazioni personali.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">8. Contatti</h2>
            <p>
              Se hai domande o preoccupazioni sulla nostra Informativa sulla
              Privacy o sulle tue informazioni personali, puoi contattarci
              all'indirizzo email tommaso95vitiello@gmail.com
            </p>
          </div>
          <p className="mt-4">
            Grazie per aver scelto Stocky. La tua fiducia è importante per noi e
            faremo del nostro meglio per proteggere le tue informazioni
            personali.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserPrivacy;
