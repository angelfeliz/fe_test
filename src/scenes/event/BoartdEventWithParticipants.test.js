import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import React from 'react'; 
import { render } from 'react-testing-library';
import { data } from '../../seed';
import BoardEventWithParticipants from './BoardEventWithParticipants';

test('Snapshot of Board', () => {
    const { container } = render(<BoardEventWithParticipants/>);
    expect(container).toMatchSnapshot();
});