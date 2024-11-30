function SocialLinks() {
  return (
    <div className="flex gap-8">
      <a
        href={"https://www.facebook.com/floatingmindsinfotech/"}
        target="_blank"
      >
        <img
          className="w-7 h-7 hover:scale-125 transition-all"
          src="/facebook.png"
          alt="facebook"
        />
      </a>
      <a
        href={"https://www.instagram.com/floating_minds_infotech/"}
        target="_blank"
      >
        <img
          className="w-7 h-7 hover:scale-125 transition-all"
          src="/instagram.png"
          alt="instagram"
        />
      </a>
      <a
        href={"https://www.linkedin.com/company/floating-minds-infotechh"}
        target="_blank"
      >
        <img
          className="w-7 h-7 hover:scale-125 transition-all"
          src="/linkedin.png"
          alt="linkedin"
        />
      </a>
      <a
        href={
          "https://mobile.twitter.com/infotech_minds/status/1644309487782891520"
        }
        target="_blank"
      >
        <img
          className="w-6 h-6 hover:scale-125 transition-all"
          src="/x-logo.png"
          alt="x"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
