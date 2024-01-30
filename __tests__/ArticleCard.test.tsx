import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleCard from "@/components/common/ArticleCard";

describe("ArticleCard", () => {
  const props = {
    data: {
      title:
        "The US President wants half of all new vehicles to be zero emissions by 2030",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
    },
  };

  it("renders the card title", () => {
    render(<ArticleCard {...props} />);
    const cardTitle = screen.getByText(`${props.data.title}`);
    expect(cardTitle).toBeInTheDocument();
  });

  it("renders the card Description", () => {
    render(<ArticleCard {...props} />);
    const cardDescription = screen.getByText(`${props.data.description}`);
    expect(cardDescription).toBeInTheDocument();
  });
});
