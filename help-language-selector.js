(function () {
  "use strict";

  const segments = window.location.pathname.split("/").filter(Boolean);
  const pageName = segments.at(-1);
  if (!pageName || !pageName.endsWith(".html")) return;

  const possibleLanguage = segments.at(-2);
  const currentLanguage = ["pt", "es"].includes(possibleLanguage)
    ? possibleLanguage
    : "en";
  const baseSegments = segments.slice(0, currentLanguage === "en" ? -1 : -2);
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
    if (language === currentLanguage) {
      link.setAttribute("aria-current", "page");
    }
    selector.appendChild(link);
  });

  const headerInner = document.querySelector(".hc-top-inner");
  if (headerInner) headerInner.appendChild(selector);
})();
