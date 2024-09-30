import { headers } from 'next/headers';
import {Configuration, PlaidApi, PlaidEnvironments} from 'plaid';

const configuration = new Configuration({
    basePath: PlaidEnvironments.sanbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
            'PLAID-SCRET': process.env.PLAID_SECRET,
        }
    }
})

export const plaidClient = new PlaidApi(configuration);