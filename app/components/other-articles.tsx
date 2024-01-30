import React from "react";
import ArticleCard from "@/components/common/ArticleCard";
import { articlesData as articles_data } from "@/constants/article";

function OtherArticles() {
  return (
    <section className="bg-evfy-neutral-200 py-32 my-24">
      <div className="container-screen">
        <h3 className="text-3xl md:text-4xl text-evfy-neutral-600 font-semibold">
          Other Articles You May Like
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles_data.map((item) => (
            <ArticleCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherArticles;
