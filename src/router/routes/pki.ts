import Capability from './route.js';
import { RequestHandler } from 'express';
import { PublicKeyInfrastructureCapability } from '../../capabilityDefinition/capabilityDefinition.js';

interface PkiResponse {
    bsvalias: '1.0',
    handle: string,
    pubkey: string,
}

export class PublicKeyInfrastructureRoute extends Capability  {
    constructor(domainLogicHandler: RequestHandler, endpoint = '/id/:paymail') {
        super(PublicKeyInfrastructureCapability, endpoint, 'GET', domainLogicHandler, false);
    }
    
    protected serializeResponse(domainLogicResponse: PkiResponse): string {
        return JSON.stringify({
            bsvalias: '1',
            // TODO get handle from params
            handle: domainLogicResponse.handle,
            pubkey: domainLogicResponse.pubkey,
        });
    }
}