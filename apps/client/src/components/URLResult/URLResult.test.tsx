import "@testing-library/jest-dom";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "../ReactQuery/Provider";
import { URLResult } from "./URLResult";
import { useUrlQRQuery } from "./useUrlQRQuery";
import { useUrlResultQuery } from "./useUrlResultQuery";

const renderComponent = (shortUrl?: string) => {
  return render(
    <Provider>
      <URLResult shortUrl={shortUrl} />
    </Provider>
  );
};

jest.mock("./useUrlQRQuery", () => ({
  useUrlQRQuery: jest.fn(),
}));

jest.mock("./useUrlResultQuery", () => ({
  useUrlResultQuery: jest.fn(),
}));

describe("URLResult", () => {
  beforeEach(() => {
    (useUrlQRQuery as jest.Mock).mockReturnValue({
      data: "Example Base 64 Image",
    });
    (useUrlResultQuery as jest.Mock).mockReturnValue({
      data: {
        data: {
          shortKey: "abcdef",
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shortUrl이 없으면 아무것도 렌더링하지 않는다.", () => {
    const { container } = renderComponent();

    expect(container).toBeEmptyDOMElement();
  });

  it("QR 이미지가 렌더링 된다.", async () => {
    renderComponent("abcdef");

    await waitFor(() => {
      expect(screen.getByTestId("qr-image")).toBeInTheDocument();
    });
  });

  it("QR 이미지가 렌더링 된다.", async () => {
    renderComponent("abcdef");

    await waitFor(() => {
      expect(screen.getByTestId("qr-image")).toBeInTheDocument();
    });
  });

  it("URL을 보여주는 입력창이 보여진다.", async () => {
    process.env.NEXT_PUBLIC_API_URL = "https://example.com";
    renderComponent("abcdef");

    await waitFor(() => {
      expect(screen.getByTestId("url-input")).toBeInTheDocument();
      expect(screen.getByTestId("url-input")).toHaveValue(
        "https://example.com/abcdef"
      );
    });
  });
});
