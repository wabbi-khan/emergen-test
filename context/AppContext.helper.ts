function parseURLParams(urlParams: URLSearchParams): { utm_term: string; gclid: string; promo: string; ignore: string } {
  let utm_term = "";
  let gclid = "";
  let promo = "";
  let ignore = "";

  if (urlParams.get("utm_term")) {
    utm_term = urlParams.get("utm_term") || "";
  }

  if (urlParams.get("gclid")) {
    gclid = urlParams.get("gclid") || "";
  }

  if (urlParams.get("promo")) {
    promo = urlParams.get("promo") || "";
  } else {
    promo = "SUMMERSALE";
  }

  if (urlParams.get("ignore")) {
    ignore = urlParams.get("ignore") || "";
  }

  return { utm_term, gclid, promo, ignore };
}

export { parseURLParams };
