import { MouseEvent } from "react";
import ContactIcon from "../Icons/ContactIcon";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const onClickContact = (event: MouseEvent) => {
    event.preventDefault();
    router.push("/contact");
  };

  const onClickHome = (event: MouseEvent) => {
    event.preventDefault();
    router.push("/");
  }

  return (
    <header className="pt-[48px] lg:px-[64px] px-[16px] mb-[52px] gap-[24px] flex flex-row justify-between items-center">
      <a href={process.env.NEXT_PUBLIC_BASE_URL} title="Lien vers la home page" onClick={onClickHome} className="cursor-pointer">
        <span className="text-[18px] lg:text-[20px] text-[#161616] font-normal">Emmanuel Fraisse</span>
      </a>
      <button
        aria-label="Aller sur la page contact"
        onClick={onClickContact}
        className="hover:bg-[#EDEDED] rounded-[80px] "
      >
        <ContactIcon />
      </button>
    </header>
  );
};

export default Header;
