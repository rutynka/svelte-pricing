import { render } from "@testing-library/svelte";
import App from "../Pricing.svelte";

test("should render pricing", () => {
  const results = render(App, {target: document.body,props: {}});
  expect(results.container.querySelector('.pricing').tagName).toBe('PRICING-BOX');
});

test("should render pricing element", () => {
    const results = render(App, {target: document.body,props: {}});
    results.component.question = 'jest pricing text'
    expect(results.getByText('Github').innerHTML).toBeDefined();
});

test("should match text in the bar", () => {
  const results = render(App, {target: document.body,props: {}});
  results.component.question = 'jest test bar'
  expect(results.container.querySelector('h2').innerHTML).toBe('Github');
});