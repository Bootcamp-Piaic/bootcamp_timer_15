import React from 'react';
import { shallow } from 'enzyme';
import { Timer } from './Timer';

describe('Timer Component', () => {

	let container = shallow(<Timer />);

	it('should render a main <div />', () => {
		expect(container.find('div').length).toBeGreaterThanOrEqual(1);
	})

	it("should render instances of the TimerButton component", () => {
		expect(container.find("TimerButton").length).toEqual(3)
	})

	it("should render instances of the TimerButton component", () => {
		expect(container.find("TimerButton").length).toEqual(3)
	})
}
);