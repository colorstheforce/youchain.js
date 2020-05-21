/*
    This file is part of youchain.js.

    youchain.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    youchain.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with youchain.js.  If not, see <http://www.gnu.org/licenses/>.
*/

import AbstractCallMethod from '../../../lib/methods/AbstractCallMethod';
import {inputAddressFormatter} from '../../../../youchain-core-helpers/src/Formatters';

export default class UpdateValidator extends AbstractCallMethod {
    /**
     * @param {Utils} utils
     * @param {Object} formatters
     *
     * @constructor
     */
    constructor(utils, formatters) {
        super('you_updateValidator', 4, utils, formatters);
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     * @param {AbstractYOUChainModule} moduleInstance - The package where the method is called from for example You.
     */
    beforeExecution(moduleInstance) {
        this.parameters[1] = this.formatters.inputAddressFormatter(this.parameters[1], moduleInstance);
        this.parameters[2] = this.formatters.inputAddressFormatter(this.parameters[2], moduleInstance);
    }
}
