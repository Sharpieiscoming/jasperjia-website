# Project 002 — public release

The owner confirmed permission to publish the provided bank data and requested anonymous access. Original files remain unchanged outside the repository. The deployment bundles credential-free gzip/base64 HTML assets; bank data and original interactions are preserved. Source Key literals are removed and address suggestions use a fixed server-side proxy.

## Environment variables

Set AMAP_BOC_KEY and AMAP_PINGAN_KEY in Vercel as sensitive server-side production variables. AMAP_WEBSERVICE_KEY is an optional shared fallback. Do not use NEXT_PUBLIC_ prefixes. Never commit a key value. Redeploy after changing environment variables.

Without these variables, map tiles, embedded branch search, filters, markers and detail panels still work. Only external place/address suggestions return 503; the viewer displays a configuration notice. No local file paths, BANK_MAP_PREVIEW or BANK_MAP_SOURCE_CONFIG are required in production.

The map HTML is intentionally public at /api/bank-maps/boc and /api/bank-maps/pingan. Original personnel/business records can be inspected in a browser because public access was explicitly requested. This is not an authenticated application. Original Chinese/light business screens are preserved inside the bilingual/theme-aware site wrapper.

The response adapter applies small-screen header/sidebar CSS and a BOC map/list toggle; it does not change business records. The source files are not overwritten.

Key ownership, quota, billing, IP restrictions and map-provider terms still apply. Use dedicated credentials and review monitoring/rate limits before expanding traffic. No claim of map-provider approval is made. References: https://lbs.amap.com/faq/webservice/webservice-api/basic-configuration/43234 and https://operations.osmfoundation.org/policies/tiles/.

Validation: production build/TypeScript; both bundled HTML responses load without local configuration; no original key in assets or browser responses; project and viewer routes return 200. Previous functional tests covered branch searches, filters, details, mobile list/map switching, and server-proxied public-place suggestions with the original local key.
