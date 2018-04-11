import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("Should render Header correctly", () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
