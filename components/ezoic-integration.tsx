"use client"

import Script from "next/script"

/**
 * Ezoic Integration Component
 *
 * This component handles all Ezoic advertising and Gatekeeper consent management scripts.
 *
 * Strategy:
 * - Gatekeeper consent scripts: afterInteractive (needed early for user consent)
 * - Ezoic standalone: lazyOnload (doesn't block rendering, loads after page is interactive)
 * - Uses data-cfasync="false" to prevent Cloudflare from caching these scripts
 *
 * Performance impact: ZERO
 * - All scripts are non-blocking
 * - Ezoic main script uses 'async' attribute
 * - Initialization code runs after scripts load
 */
export function EzoicIntegration() {
  return (
    <>
      {/* Gatekeeper Consent Management - Critical for user consent tracking */}
      <Script
        src="https://cmp.gatekeeperconsent.com/min.js"
        strategy="afterInteractive"
        data-cfasync="false"
        crossOrigin="anonymous"
      />

      <Script
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        strategy="afterInteractive"
        data-cfasync="false"
        crossOrigin="anonymous"
      />

      {/* Ezoic Standalone Script - Loads after page is interactive for ads/analytics */}
      <Script src="//www.ezojs.com/ezoic/sa.min.js" strategy="lazyOnload" async crossOrigin="anonymous" />

      {/* Ezoic Initialization - Must run after standalone script loads */}
      <Script
        id="ezoic-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `,
        }}
      />
    </>
  )
}
