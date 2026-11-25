(function () {
  "use strict";

  const languages = ["pt", "es"];
  const segments = window.location.pathname.split("/").filter(Boolean);
  const lastSegment = segments.at(-1);
  const languageRoot = languages.includes(lastSegment);
  const possibleLanguage = languageRoot ? lastSegment : segments.at(-2);
  const currentLanguage = languages.includes(possibleLanguage) ? possibleLanguage : "en";
  const pageName = (!lastSegment || languageRoot) ? "index.html" : lastSegment;
  const baseSegments = languageRoot
    ? segments.slice(0, -1)
    : segments.slice(0, currentLanguage === "en" ? -1 : -2);
  const basePath = baseSegments.length ? `/${baseSegments.join("/")}` : "";
  const labels = { en: "EN", pt: "PT", es: "ES" };
  const selector = document.createElement("nav");
  selector.className = "hc-language-selector";
  selector.setAttribute("aria-label", "Language selector");

  ["en", "pt", "es"].forEach((language) => {
    const link = document.createElement("a");
    link.lang = language;
    link.hreflang = language;
    link.textContent = labels[language];
    link.href = language === "en"
      ? `${basePath}/${pageName}`
      : `${basePath}/${language}/${pageName}`;
    if (language === currentLanguage) link.setAttribute("aria-current", "page");
    selector.appendChild(link);
  });

  document.querySelector(".hc-top-inner")?.appendChild(selector);
})();