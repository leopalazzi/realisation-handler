import Button from "@/components/Button/Button";
import { MailService } from "../back/services/MailService";
import { EmailParameters } from "@/models/email.model";
import Head from "next/head";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isConsentConfirmed, setIsConsentConfirmed] = useState(false);
  const mailService = new MailService(process.env.NEXT_PUBLIC_BACK_URL || "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailParams: EmailParameters = {
      to: "leopalazzi751@gmail.com",
      data: {
        name,
        surname,
        email,
        message,
      },
    };
    mailService.sendTemplate(emailParams);
    // Réinitialiser les champs du formulaire
    setName("");
    setEmail("");
    setMessage("");
    setSurname("");
  };

  const onConsentChange = () => {
    setIsConsentConfirmed((prevState) => !prevState);
  };

  return (
    <div>
      <Head>
        <title>Page de contact</title>
        <meta
          name="description"
          content="Contactez-moi pour plus d'informations."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/contact`}
        />
        <script
          type="application/ld+json"
          // dangerouslySetInnerHTML={{
          //   __html: JSON.stringify(
          //     generateLDJSONBreadcrumbs(
          //       config,
          //       normalizedLinks(links, country, t)
          //     )
          //   ),
          // }}
        />
      </Head>
      <h1 className="mb-2">Contact</h1>
      <div className="border mb-6"></div>
      <div className="mb-[54px] text-[18px] text-[#7D7D7D]">
        Vous pouvez me joindre à cette adresse :{" "}
        <a
          className="underline text-[#000000]"
          title="Email vers Emmanuel Fraisse"
          href="mailto:em.fraisse@protonmail.com"
        >
          emfraisse@protonmaill.com
        </a>
        &nbsp;ou en remplissant ce formulaire
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[40px] text-[#000000]"
      >
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="surname" className="text-[#000000] text-[18px]">
            Prénom
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Entrez votre prénom"
            required
            className="border-b-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="name" className="text-[#000000] text-[18px]">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez votre nom"
            required
            className="border-b-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9]"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="email" className="text-[#000000] text-[18px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-b-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9]"
            placeholder="Entrez votre addresse mail"
          />
        </div>
        <div className="flex flex-col gap-[12px]">
          <label htmlFor="message" className="text-[#000000] text-[18px]">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border-[1px] border-[#7D7D7D] pb-[10px] focus:outline-0 bg-[#F9F9F9] lg:min-h-[200px] pl-[12px] pt-[18px]"
            placeholder="Entrez votre message"
          ></textarea>
        </div>
        <label className="row gap-[12px] items-center checkboxDiv">
          <input
            id="checkbox"
            onChange={onConsentChange}
            required
            name="consentCheckbox"
            type="checkbox"
            className="w-[24px] h-[24px] checkboxContact"
          ></input>
          <span className={"text-[12px] cursor-pointer"}>
            Pour nous contacter, complétez le formulaire. J&lsquo;autorise à
            conserver mes données personnelles transmises via ce formulaire. Et
            à traiter vos données à des fins d&lsquo;information et de
            communication non commerciales.
          </span>
        </label>
        <Button
          type="submit"
          className="self-start"
          disabled={!isConsentConfirmed}
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
