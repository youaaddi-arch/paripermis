import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Le site est édité par <strong>PariPermis</strong> — centre de formation transport routier.
        <br />
        Adresse : {site.address}
        <br />
        Téléphone : {site.phone} — E-mail : {site.email}
        <br />
        {site.agrement}
        <br />
        Raison sociale, forme juridique, capital social, SIRET et numéro de TVA intracommunautaire : <em>à compléter</em>.
      </p>

      <h2>Directeur de la publication</h2>
      <p><em>Nom du directeur de la publication à compléter.</em></p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par son prestataire d'hébergement (par exemple Vercel Inc. ou OVH SAS selon la configuration
        retenue). <em>Coordonnées de l'hébergeur à compléter.</em>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, images, logos, mise en page) est protégé par le droit de la propriété
        intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les informations diffusées sur ce site sont fournies à titre indicatif et peuvent évoluer, notamment au regard de
        la réglementation. PariPermis s'efforce d'assurer leur exactitude mais ne saurait être tenu responsable d'erreurs
        ou d'omissions.
      </p>
    </LegalLayout>
  );
}
