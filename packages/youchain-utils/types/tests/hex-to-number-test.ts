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

import {BN, hexToNumber} from 'youchain-utils';

// $ExpectType number
hexToNumber('232');
// $ExpectType number
hexToNumber(232);

// $ExpectError
hexToNumber(new BN(3));
// $ExpectError
hexToNumber(['string']);
// $ExpectError
hexToNumber([4]);
// $ExpectError
hexToNumber({});
// $ExpectError
hexToNumber(true);
// $ExpectError
hexToNumber(null);
// $ExpectError
hexToNumber(undefined);
