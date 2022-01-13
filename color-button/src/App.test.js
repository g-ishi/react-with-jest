import { render, screen, fireEvent } from '@testing-library/react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import App from './App';

test("button has correct initial color", () => {
  render(<App />);
  // nameはbuttonタグの画面に表示されているテキスト
  // いくつかのhtmlタグには、デフォルトのロールが割り当てられている。(大体は、タグ名と同じ名前のロールになっている。)
  const colorButton = screen.getByRole("button", {
    name: "Change to blue"
  })
  expect(colorButton).toHaveStyle({
    backgroundColor: "red"
  })
})

test("button turns to blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to blue"
  })

  // クリックイベントをトリガ
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({
    backgroundColor: "blue"
  })
  expect(colorButton.textContent).toBe("Change to red")

})

test("initial conditions: button enabled", () => {
  render(<App />)

  // ボタンがdisableであることの確認
  const colorButton = screen.getByRole("button", {
    name: "Change to blue"
  })
  expect(colorButton).toBeEnabled()
})

test("initial conditions: checkbox not checked", () => {
  render(<App />)

  // ボタンがdisableであることの確認
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
})


test("when checkbox checked, button should be diabled", () => {
  render(<App />)

  const checkbox = screen.getByRole("checkbox")
  const colorButton = screen.getByRole("button", {
    name: "Change to blue"
  })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

})

test("when checkbox not checked, button should be enabled", () => {
  render(<App />)

  const checkbox = screen.getByRole("checkbox")
  const colorButton = screen.getByRole("button", {
    name: "Change to blue"
  })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()

})
