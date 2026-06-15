import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export default function DonneesPersonnelles() {
  return (
    <LegalLayout title="Protection des données personnelles">
      <h2>Responsable du traitement</h2>
      <p>
        Les données collectées sur ce site sont traitées par <strong>PariPermis</strong> ({site.address}), en sa qualité
        de responsable de traitement. Contact : {site.email}.
      </p>

      <h2>Données collectées</h2>
      <p>Nous collectons les données que vous nous transmettez via les formulaires (contact, inscription, devis), notamment :</p>
      <ul>
        <li>identité et coordonnées (nom, prénom, e-mail, téléphone) ;</li>
        <li>informations relatives à votre projet de formation ;</li>
        <li>données de navigation (cookies de mesure d'audience, le cas échéant).</li>
      </ul>

      <h2>Finalités</h2>
      <ul>
        <li>répondre à vos demandes de renseignement et de devis ;</li>
        <li>gérer votre inscription et votre dossier de formation ;</li>
        <li>améliorer le site et nos services.</li>
      </ul>

      <h2>Base légale et durée de conservation</h2>
      <p>
        Le traitement repose sur votre consentement et/ou l'exécution de mesures précontractuelles. Les données sont
        conservées le temps nécessaire au traitement de votre demande puis archivées conformément aux obligations légales.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition
        et de portabilité de vos données. Pour les exercer, écrivez à {site.email}. Vous pouvez également introduire une
        réclamation auprès de la CNIL (www.cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>
        Le site peut utiliser des cookies de fonctionnement et de mesure d'audience. Vous pouvez configurer votre
        navigateur pour les refuser. <em>Détail de la politique cookies à compléter selon les outils utilisés.</em>
      </p>
    </LegalLayout>
  );
}
