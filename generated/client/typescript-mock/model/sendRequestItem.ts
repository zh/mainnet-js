/**
 * Mainnet Cash
 * A developer friendly bitcoin cash wallet api  This API is currently in active development, breaking changes may be made prior to official release of version 1.  **Important:** This library is in active development 
 *
 * The version of the OpenAPI document: 0.0.1-rc
 * Contact: hello@mainnet.cash
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ToCashaddr } from './toCashaddr';
import { UnitType } from './unitType';
import { ValueType } from './valueType';

export class SendRequestItem extends ToCashaddr {
    'value': number;
    /**
    * Unit of account.
    */
    'unit': SendRequestItem.UnitEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "SendRequestItem.UnitEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SendRequestItem.attributeTypeMap);
    }
}

export namespace SendRequestItem {
    export enum UnitEnum {
        Bch = <any> 'bch',
        Usd = <any> 'usd',
        Bit = <any> 'bit',
        Bits = <any> 'bits',
        Sat = <any> 'sat',
        Sats = <any> 'sats',
        Satoshi = <any> 'satoshi',
        Satoshis = <any> 'satoshis'
    }
}
