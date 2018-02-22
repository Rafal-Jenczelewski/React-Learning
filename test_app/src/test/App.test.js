import React from 'react';
import ReactDOM from 'react-dom';
import App from '../main/App';
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import Greeter from "../main/Greeter";

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe("Greeter", () => {
    describe("When input changes", () => {
        it("Updates its state", () => {
            const wrapper = mount(<Greeter name={"World"}/>)
            const input = wrapper.find("input").at(0);
            wrapper.update();
            input.simulate('change', {target: {value: "Test"}});

            expect(wrapper.state("name")).toEqual("Test")
        })

        it("Calls handler once", () => {
            let spy = jest.fn();
            Greeter.prototype.changeHandler = spy;

            const wrapper = mount(<Greeter name={"World"}/>)
            const input = wrapper.find("input").at(0);
            wrapper.update();
            input.simulate('change', {target: {value: "Test"}});

            expect(spy).toBeCalled()
        })
    })
})