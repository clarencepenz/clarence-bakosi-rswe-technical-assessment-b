import React from "react";
import { ArrowLeft } from "@/SVG";
import RelatedArticleCard from "@/components/common/RelatedArticleCard";
import { Separator } from "@/components/ui/separator";
import { articlesData as articles_data } from "@/constants/article";

function RecentArticles() {
  return (
    <aside className="pt-8 md:pt-44">
      <h3 className="text-md font-semibold leading-6 tracking-wide mb-4">
        Related Articles
      </h3>

      {articles_data.map((item, index) => (
        <div key={item.id}>
          <RelatedArticleCard data={item} />
          {index !== articles_data.length - 1 && (
            <Separator className="text-evfy-neutral-400 h-[0.5px] my-7" />
          )}
        </div>
      ))}
      <div className="flex items-center gap-4 mt-8 cursor-pointer">
        <span className="text-evfy-primary leading-5 tracking-wider font-normal transition-colors hover:text-evfy-primary/80 hover:mr-0.5">
          View more
        </span>
        <ArrowLeft className="transition-colors hover:text-evfy-primary/80 hover:ml-0.5" />
      </div>
    </aside>
  );
}

export default RecentArticles;
