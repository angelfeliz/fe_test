import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import ParticipantRow from './ParticipantRow';

let props = {
    index: 0,
    openDetail: false,
    showDetail: jest.fn((num)=>{})
}

test('Participant show detail', () => {
    const { getByTestId, queryByTestId,rerender } = render(<ParticipantRow {...props} />);
    const participant = getByTestId('rowitem');
    expect(queryByTestId('rowdetail')).toBeNull();
    fireEvent.click(participant);
    expect(props.showDetail).toHaveBeenCalledTimes(1);
    expect(props.showDetail).toHaveBeenCalledWith(props.index);
    rerender(<ParticipantRow {...props} openDetail={true} />);
    expect(queryByTestId('rowdetail')).not.toBeNull();
});