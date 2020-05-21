import * as Utils from 'youchain-utils';
import {formatters} from 'youchain-core-helpers';
import {GetPastLogsMethod} from 'youchain-core-method';
import {LogSubscription} from 'youchain-core-subscriptions';
import AbstractContract from '../../../src/AbstractContract';
import EventLogDecoder from '../../../src/decoders/EventLogDecoder';
import AbiItemModel from '../../../src/models/AbiItemModel';
import EventLogSubscription from '../../../src/subscriptions/EventLogSubscription';

// Mocks
jest.mock('Utils');
jest.mock('formatters');
jest.mock('GetPastLogsMethod');
jest.mock('../../../src/AbstractContract');
jest.mock('../../../src/decoders/EventLogDecoder');
jest.mock('../../../src/models/AbiItemModel');

/**
 * EventLogSubscription test
 */
describe('EventLogSubscriptionTest', () => {
    let eventLogSubscription, contractMock, getPastLogsMethodMock, eventLogDecoderMock, abiItemModelMock;

    beforeEach(() => {
        new AbstractContract();
        contractMock = AbstractContract.mock.instances[0];

        new GetPastLogsMethod();
        getPastLogsMethodMock = GetPastLogsMethod.mock.instances[0];

        new EventLogDecoder();
        eventLogDecoderMock = EventLogDecoder.mock.instances[0];

        new AbiItemModel();
        abiItemModelMock = AbiItemModel.mock.instances[0];

        eventLogSubscription = new EventLogSubscription(
            {},
            Utils,
            formatters,
            contractMock,
            getPastLogsMethodMock,
            eventLogDecoderMock,
            abiItemModelMock
        );
    });

    it('constructor check', () => {
        expect(eventLogSubscription.eventLogDecoder).toEqual(eventLogDecoderMock);

        expect(eventLogSubscription.abiItemModel).toEqual(abiItemModelMock);

        expect(eventLogSubscription).toBeInstanceOf(LogSubscription);
    });

    it('calls onNewSubscriptionItem returns decoded item', () => {
        eventLogDecoderMock.decode.mockReturnValueOnce(true);

        formatters.outputLogFormatter.mockReturnValueOnce({item: false});

        eventLogSubscription.onNewSubscriptionItem({item: true});

        expect(eventLogDecoderMock.decode).toHaveBeenCalledWith(abiItemModelMock, {item: false});

        expect(formatters.outputLogFormatter).toHaveBeenCalledWith({item: true});
    });
});
