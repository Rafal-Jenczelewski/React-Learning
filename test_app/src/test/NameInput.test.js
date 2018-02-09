import React from 'react';
import ConnectedNameInput, {NameInput} from '../main/components/NameInput';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {changeName} from '../main/actions/index';

Enzyme.configure({adapter: new Adapter()});

describe('Dumb NameInput', () => {
    let wrapper;

    it('renders without crashing', () => {
        wrapper = shallow(<NameInput/>);
        expect(wrapper.length).toBe(1);
    });

    it('matches snapshot', () => {
        wrapper = renderer.create(<NameInput/>);

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot('Name Input snapshot');
    });

    describe('When input changes', () => {
        it('calls handler', () => {
            let spy = jest.fn();

            NameInput.prototype.changeHandler = spy;
            wrapper = mount(<NameInput/>);
            wrapper.update();
            wrapper.find('input').simulate('change', {});

            expect(spy).toBeCalled();
        });
    });
});

describe('Connected NameInput', () => {
    const initialState = {name: 'World'};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('renders without crashing', () => {
        wrapper = shallow(<ConnectedNameInput store={store}/>);
        expect(wrapper.length).toBe(1);
    });

    it('matches snapshot', () => {
        wrapper = renderer.create(<ConnectedNameInput store={store}/>)

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot("ConnectedNameInput")
    });
});