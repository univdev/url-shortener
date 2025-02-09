import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import URLForm from "./URLForm";
import { Provider } from "../ReactQuery/Provider";

jest.mock("./useCreateShortURLMutation", () => ({
  useCreateShortURLMutation: jest.fn(),
}));

const mockMutateAsync = jest.fn();

describe("URLForm", () => {
  const renderComponent = () => {
    return render(
      <Provider>
        <URLForm onSuccess={() => {}} />
      </Provider>
    );
  };

  beforeEach(() => {
    mockMutateAsync.mockResolvedValue({ data: { shortKey: "abcdef" } });

    const useCreateShortURLMutation =
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("./useCreateShortURLMutation").useCreateShortURLMutation;
    useCreateShortURLMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Form이 렌더링 된다.", () => {
    const { container } = renderComponent();

    expect(container.querySelector("form")).toBeInTheDocument();
  });

  it("빈 문자열이 들어갈 경우 generate 버튼이 비활성화 된다.", async () => {
    renderComponent();

    const input = screen.getByTestId("url-input");
    const submitButton = screen.getByText("Generate");
    if (input) fireEvent.change(input, { target: { value: "" } });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it("유효한 URL이 들어갈 경우 generate 버튼이 활성화 된다.", async () => {
    renderComponent();

    const input = screen.getByTestId("url-input");
    const submitButton = screen.getByText("Generate");

    if (input)
      fireEvent.change(input, { target: { value: "https://google.com" } });

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it("Generation 버튼을 클릭하면 API 호출이 이루어진다.", async () => {
    renderComponent();

    const input = screen.getByTestId("url-input");
    const submitButton = screen.getByText("Generate");

    if (input)
      fireEvent.change(input, { target: { value: "https://google.com" } });

    await waitFor(() => {
      fireEvent.click(submitButton);
      expect(mockMutateAsync).toHaveBeenCalled();
    });
  });

  it("Generation 버튼을 클릭하면 Generation 버튼이 로딩 상태가 된다.", async () => {
    renderComponent();

    const input = screen.getByTestId("url-input");
    const submitButton = screen.getByText("Generate");

    if (input)
      fireEvent.change(input, { target: { value: "https://google.com" } });

    await waitFor(() => {
      fireEvent.click(submitButton);
      expect(submitButton).toHaveAttribute("disabled");
    });
  });
});
