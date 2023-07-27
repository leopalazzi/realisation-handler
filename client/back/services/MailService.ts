import { EmailParameters } from "../../models/email.model";
import { toast } from "react-toastify";

export class MailService {
  apiUrl: string;

  /**
   * Crée une instance de la classe MailService.
   *
   * @constructor
   * @param backendUrl Url du backend Carbon
   */
  constructor(backendUrl: string) {
    this.apiUrl = `${backendUrl}/contact`;
  }

  /**
   * Envoie un message au destinataire sp�cifi� en utilisant un template.
   *
   * @param to        Adresse email du destinataire
   * @param urlDetail url de la page détail
   * @returns       	Statut de la requête
   */
  async sendTemplate(emailParams: EmailParameters): Promise<any> {
    console.log(emailParams);
    return await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailParams),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          toast.success("Votre message a bien été envoyé !");
          return response.json();
        } else {
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        }
      })
      .catch((error) => {
        toast.error("Une erreur s'est produite, veuillez réessayer.");
        console.error("Error:", error);
        // Handle any errors
      });
  }
}
