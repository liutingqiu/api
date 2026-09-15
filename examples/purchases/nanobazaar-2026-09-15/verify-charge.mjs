// Verify a NanoBazaar seller charge signature locally (the relay does not). Node stdlib only.
import {createHash, createPublicKey, verify} from 'node:crypto';
const [jobId, offerId, sellerBotId, buyerBotId, chargeId, address, amountRaw, expiresAt, sigB64u, pubB64u] = process.argv.slice(2);
const msg = `NBR1_CHARGE|${jobId}|${offerId}|${sellerBotId}|${buyerBotId}|${chargeId}|${address}|${amountRaw}|${expiresAt}`;
const b64u = s => Buffer.from(s.replace(/-/g,'+').replace(/_/g,'/'), 'base64');
const pub = b64u(pubB64u), sig = b64u(sigB64u);
const key = createPublicKey({key: Buffer.concat([Buffer.from('302a300506032b6570032100','hex'), pub]), format:'der', type:'spki'});
const ok = verify(null, Buffer.from(msg), key, sig);
const h = createHash('sha256').update(pub).digest();
const alphabet='abcdefghijklmnopqrstuvwxyz234567'; let bits=0,val=0,out='';
for (const byte of h){ val=((val<<8)|byte)>>>0; bits+=8; while(bits>=5){ out+=alphabet[(val>>>(bits-5))&31]; bits-=5; } }
if (bits>0) out+=alphabet[(val<<(5-bits))&31];
console.log(JSON.stringify({msg, signature_valid: ok, seller_bot_id_matches_pubkey: ('b'+out)===sellerBotId, derived: 'b'+out, expires_in_s: Math.round((Date.parse(expiresAt)-Date.now())/1000)}));
