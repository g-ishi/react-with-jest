import { render, screen, fireEvent } from '@testing-library/react';
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