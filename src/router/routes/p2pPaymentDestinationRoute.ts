
import { RequestHandler } from 'express';
import { P2pPaymentDestinationCapability } from '../../capabilityDefinition/capabilityDefinition.js';
import joi from 'joi';
import Route from './route.js';

interface P2pDestination {
    script: string;
    satoshis: number;
  }
  
  interface P2pDestinationsResponse {
    outputs: P2pDestination[];
    reference: string;
  }
  
export class P2pPaymentDestinationRoute extends Route  {
    constructor(domainLogicHandler: RequestHandler, endpoint = '/p2p-payment-destination/:paymail') {
        super(P2pPaymentDestinationCapability, endpoint, 'POST', domainLogicHandler);
        this.bodyValidator = this.getBodyValidator();
    }

    private getBodyValidator(): (body: any) => any {
        return (body: any) => {
            const schema = joi.object({
                satoshis: joi.number().required(),
            });
            const { error, value } = schema.validate(body);
            if (error) {
                return new Error('Invalid body: ' + error.message);
            }
            return value;
        };
    }
    
    protected serializeResponse(domainLogicResponse: P2pDestinationsResponse): string {
        return JSON.stringify({
            outputs: domainLogicResponse.outputs.map(output => ({
                script: output.script,
                satoshis: output.satoshis,
            })),
            reference: domainLogicResponse.reference,
        });
    }
}