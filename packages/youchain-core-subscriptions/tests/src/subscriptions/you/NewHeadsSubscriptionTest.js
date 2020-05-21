import * as Utils from 'youchain-utils';
import {formatters} from 'youchain-core-helpers';
import NewHeadsSubscription from '../../../../src/subscriptions/you/NewHeadsSubscription';

// Mocks
jest.mock('Utils');
jest.mock('formatters');

/**
 * NewHeadsSubscription test
 */
describe('NewHeadsSubscriptionTest', () => {
    let newHeadsSubscription;

    beforeEach(() => {
        newHeadsSubscription = new NewHeadsSubscription(Utils, formatters, {});
    });

    it('constructor check', () => {
        expect(newHeadsSubscription.method).toEqual('newHeads');

        expect(newHeadsSubscription.type).toEqual('you_subscribe');

        expect(newHeadsSubscription.options).toEqual(null);

        expect(newHeadsSubscription.utils).toEqual(Utils);

        expect(newHeadsSubscription.moduleInstance).toEqual({});
    });

    it('onNewSubscriptionItem should call the outputBlockFormatter method', () => {
        formatters.outputBlockFormatter.mockReturnValueOnce({});

        newHeadsSubscription.onNewSubscriptionItem('string');

        expect(formatters.outputBlockFormatter).toHaveBeenCalledWith('string');
    });
});
