import * as React from "react";

import Image from "next/image";
import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card";
import cn from "@/lib/utils";
import PREVIEW_IMAGE from "@/utils/image";
import { Badge } from "../ui/badge";

type CardProps = {
  data: {
    coverImage?: string;
    title_trunc: string;
    tag: string;
    is_featured?: boolean;
  };
};

export default function RelatedArticleCard({ data }: CardProps) {
  return (
    <Card className="flex gap-5 items-center border border-none outline-none bg-transparent shadow-none">
      <CardContent className="p-0 h-[78px] min-w-[78px] rounded-sm">
        <Image
          src={PREVIEW_IMAGE("preview_image")}
          alt={data.title_trunc}
          height={78}
          width={78}
        />
      </CardContent>
      <CardHeader className="px-0 py-0 block">
        <Badge
          className={cn(
            "text-evfy-primary uppercase text-xs font-semibold rounded-sm",
            data.is_featured
              ? "bg-evfy-outline"
              : "px-0 bg-transparent hover:bg-transparent",
          )}
        >
          {data.tag}
        </Badge>
        <CardTitle className="text-md text-evfy-neutral-300 leading-5 transition-colors hover:text-evfy-primary/80 cursor-pointer">
          {data.title_trunc}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
