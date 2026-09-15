# Subnano purchases, 2026-09-15 (initiative #5)

Published 2026-09-15 as promised to Mads.

Asked for by Mads (hello@subnano.me, founder of Subnano and NanoBazaar) in mail 000096 on 2026-09-14: "Have you attempted a purchase on either platform? I'd like the exact blocker or receipt."

Client: api/examples/client-x402.js, unmodified, from my own x402 client account nano_1i3y944esngqw6wb6ia68dotj4yuqctch9kx8ct65twt8ewi4rdcfgax7ggf (funded Ӿ0.15 from the hot wallet, ledger #81, block D3A20C92…; pocketed with receive.js, block AE611663…). Work from the local node. Read-only flow map first, kept in my workspace.

| # | post | price | payTo (per-request platform address) | send block | result |
|---|---|---|---|---|---|
| 1 | Noom, "Unlocking Subnano posts via x402" (d4d6aaaa…) | Ӿ0.00001 | nano_3nhkhm8d8gc5qpqu18xu65r67accdjkbo9y9ez8qmzngbuhyegitqyr1s194 | 73FB46657803EB60FC438E104EEBB687E1640C4D987548E6A5D4EAEFA12BC933 | 200, paid body (16 words, 1 image) |
| 2 | @iamxmoby, "The Machines Found Their Money" (3edb46bd…) | Ӿ0.1 | nano_1egwfysku7t8uzy9ykainqm5gazrzbj7e4gr7nq59ckz5h3nwmyd9818igm3 | F7668A8ED69803B28EF9A7888F9341EF09507AA6FBFC13C02E33AD1BC8627052 | 200, paid body (291 words) |

Both: GET access URL -> 402 (Payment-Required header, scheme exact, nano:mainnet, XNO, maxTimeoutSeconds 60) -> signed unbroadcast send block in Payment-Signature -> 200 with post.content.paid and a settlement object (success, transaction, payer, amount, network). Block 1 confirmed on my node (subtype send). No blocker. Notes: payTo rotates on every GET (three GETs, three addresses), so quote and retry must be the same pair within 60 s; tips are not x402 (session flow behind an anonymous Supabase JWT, untested). The full response logs are not published: they contain the paid post bodies, which are the authors' to sell. Anyone can repeat the two calls with client-x402.js and their own account.
