import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RelatedArticleCard from "@/components/common/RelatedArticleCard";

describe("RelatedArticleCard", () => {
  const props = {
    data: {
      title: "",
      title_trunc: "The US President wants half of all new vehicles...",
      description: "",
      tag: "news",
      is_featured: true || undefined,
    },
  };

  it("renders the card title", () => {
    render(<RelatedArticleCard {...props} />);
    const cardTitle = screen.getByText(`${props.data.title_trunc}`);
    expect(cardTitle).toBeInTheDocument();
  });

  it("renders the card tag", () => {
    render(<RelatedArticleCard {...props} />);
    const cardTag = screen.getByText(`${props.data.tag}`);
    expect(cardTag).toBeInTheDocument();
  });
});
