import React from "react";
import App from "./App";
// setup file
import { shallow } from "enzyme";

describe("Main App", () => {
	test("renders developer name", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find("h4").text()).toContain("Developed By: Anas Khan");
	});
});
