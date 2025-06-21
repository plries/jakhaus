"use client";

import { PageHeading } from "@/app/components";
import { CREATE_LISTING_CONST } from "./const";

export const CreateListing = () => {
  return (
    <PageHeading>
      {CREATE_LISTING_CONST.HEADING}
    </PageHeading>
  );
}