import React from 'react';
import {mount, shallow} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import NameInput from '../main/components/NameInput';
import Switch from '../main/components/Switch';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Notes from '../main/components/Notes';

describe('Routing in app', () => {
    const initialState = {name: 'World', notes: []};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('routes properly to home', () => {
        wrapper = mount(<Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
                <Switch store={store}/>
            </MemoryRouter>
        </Provider>);

        expect(wrapper.find(NameInput)).toHaveLength(1);
    });

    it('routes properly to notes', () => {
        wrapper = mount(<Provider store={store}>
            <MemoryRouter initialEntries={['/notes']}>
                <Switch store={store}/>
            </MemoryRouter>
        </Provider>);

        expect(wrapper.find(Notes)).toHaveLength(1);
    });
});