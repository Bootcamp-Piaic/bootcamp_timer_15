import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { Timer } from '../Timer/Timer';

describe('App Component', () => {

	let container = shallow(<App />);

	it('should render a main <div />', () => {
		expect(container.find('div').length).toBeGreaterThanOrEqual(1);
	})


	it('should render a Timer Component', () => {
		expect(container.containsMatchingElement(<Timer />)).toEqual(true)

	})
}
);