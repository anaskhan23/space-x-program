import React from "react";
import Header from "./../header";
// setup file
import { shallow } from "enzyme";

describe("Header", () => {
	test("renders developer name", () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find("header").text()).toContain(
			"SpaceX Launch Programs"
		);
	});
});
