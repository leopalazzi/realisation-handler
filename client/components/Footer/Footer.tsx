const Footer = () => {
  return (
    <footer className="p-[56px] gap-[24px] flex flex-col bg-[#F4F4F4] shrink bt-[#F9F6FF] border lg:items-start max-sm:items-center">
      <div className="lg:flex lg:flex-row lg:justify-between lg:w-[100%] flex-col flex gap-[24px] max-sm:items-center">
        <span className="lg:text-[24px] text-[16px]">Emmanuel Fraisse</span>
        <a
          href="mailto:em.fraisse@protonmail.com"
          className="underline mb-[16px]"
          title="Email vers Emmanuel Fraisse"
        >
          em.fraisse@protonmail.com
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row justify-start gap-[24px]  text-center">
          <a
            className="border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white"
            title="Lien vers Unifrance"
            target="_blank"
            href="https://google.com"
          >
            Unifrance
          </a>
          <a
            className="border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white"
            title="Lien vers Mudi"
            target="_blank"
            href="https://google.com"
          >
            Mudi
          </a>
          <a
            className="border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white"
            title="Lien vers Tumblr"
            target="_blank"
            href="https://google.com"
          >
            Tumblr
          </a>
          <a
            className="border-[#D3D3D3] border px-[24px] py-[8px] rounded-[60px] bg-white"
            title="Lien vers IMDb"
            target="_blank"
            href="https://google.com"
          >
            IMDb
          </a>
        </div>
      </div>
      <span className="mt-[24px] max-sm:text-center font-light">
        Designed and developped by BubbleWeb
      </span>
    </footer>
  );
};

export default Footer;
