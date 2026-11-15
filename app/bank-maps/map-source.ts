import 'server-only';
import {gunzipSync} from 'node:zlib';
import boc from './assets/boc.json';
import pingan from './assets/pingan.json';
export function mapSearchKey(bank:string){return (bank==='boc'?process.env.AMAP_BOC_KEY:process.env.AMAP_PINGAN_KEY)||process.env.AMAP_WEBSERVICE_KEY;}
export function mapSource(bank:string){if(!['boc','pingan'].includes(bank))throw Error('Unknown bank');return gunzipSync(Buffer.from((bank==='boc'?boc:pingan).gzip,'base64')).toString('utf8');}
