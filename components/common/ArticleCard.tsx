import * as React from "react";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PREVIEW_IMAGE from "@/utils/image";

type CardProps = {
  data: {
    coverImage?: string;
    title: string;
    description: string;
  };
};

export default function ArticleCard({ data }: CardProps) {
  return (
    <Card className="border border-none outline-none bg-transparent shadow-none transition-colors hover:text-evfy-primary/80 cursor-pointer">
      <CardContent className="p-0 h-auto md:h-[223px]">
        <Image
          src={data.coverImage ?? PREVIEW_IMAGE("image_one")}
          alt={data.title}
          height={223}
          width={382.638}
          className="h-full w-full"
        />
      </CardContent>
      <CardHeader className="px-0">
        <CardTitle className="text-sm text-clip">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
