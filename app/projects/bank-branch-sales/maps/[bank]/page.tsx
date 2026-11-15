import {notFound} from 'next/navigation';
import {mapSearchKey} from '../../../../bank-maps/map-source';
import MapViewer from './viewer';
export const dynamic='force-dynamic';
export default async function Page({params}:{params:Promise<{bank:string}>}){const {bank}=await params;if(!['boc','pingan'].includes(bank))notFound();return <MapViewer bank={bank} addressSearchConfigured={!!mapSearchKey(bank)}/>}
