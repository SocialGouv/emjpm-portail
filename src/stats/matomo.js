import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export function useMatomo() {
  const router = useRouter();

  const previousPathRef = useRef(null);

  useEffect(() => {
    const { pathname } = router;
    if (previousPathRef.current === pathname) {
      return;
    }
    previousPathRef.current = pathname;
    // console.log({ pathname, title: document.title });

    // In order to ensure that the page title had been updated,
    // we delayed pushing the tracking to the next tick.
    setTimeout(() => {
      if (previousPathRef.current) {
        matopush(["setReferrerUrl", `${previousPathRef.current}`]);
      }
      matopush(["setCustomUrl", pathname]);
      matopush(["setDocumentTitle", document.title]);
      matopush(["deleteCustomVariables", "page"]);
      matopush(["trackPageView"]);
    }, 0);
  }, [router]);
}

if (process.browser) {
  window._paq = window._paq || [];
}
export function matopush(args) {
  if (process.browser) {
    window._paq.push(args);
  }
}
