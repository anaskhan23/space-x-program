import React from "react";
import ReactDOM from "react-dom";
import Button from "./../button";

import { shallow } from "enzyme";

test("render a button text", () => {
	const wrapper = shallow(<Button />);
	expect(wrapper.find("#filter-btn").text()).toBe("");
});

it("render without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Button></Button>, div);
});

// test("render the click", () => {
// 	const wrapper = shallow(<Button />);
// 	wrapper.find("#filter-btn").simulate("click");
// 	expect(wrapper.find("#filter-btn").text()).toBe("");
// });
// it("render button correctly", () => {
// 	const { getByTestId } = render(<Button buttonText="Clear" />);
// 	expect(getByTestId("button")).toHaveTextContent("Clear");
// });

// it("matches snapshot", () => {
// 	const tree = renderer.create(<Button buttonText="Clear"></Button>).toJSON();
// 	expect(tree).toMatchSnapShot();
// });
