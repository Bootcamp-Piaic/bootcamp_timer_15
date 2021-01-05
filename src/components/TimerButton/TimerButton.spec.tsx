import React from 'react';
import { shallow } from 'enzyme';
import { TimerButton } from './TimerButton';

describe('Timer Button Component', () => {

	let container = shallow(<TimerButton
        buttonAction={jest.fn()}
        buttonValue={""}
      />);

	it('should render a main <div />', () => {
		expect(container.find('div').length).toBeGreaterThanOrEqual(1);
	})
}
);