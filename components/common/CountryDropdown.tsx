import * as React from "react";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countriesData from "@/constants/country";

export default function CountryDropdown() {
  return (
    <Select>
      <SelectTrigger className="w-[76px] border-none transition-colors hover:bg-accent hover:text-accent-foreground">
        <SelectValue
          placeholder={(
            <Image
              src={countriesData[0].flag}
              height={18.233}
              width={28}
              alt={countriesData[0].name}
            />
          )}
        />
      </SelectTrigger>
      <SelectContent className="min-w-14">
        <SelectGroup>
          {countriesData.map((country) => (
            <SelectItem key={country.name} value={country.name}>
              <Image
                src={country.flag}
                height={18.233}
                width={28}
                alt={country.name}
              />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
