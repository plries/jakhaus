"use client";

import {
  Input,
  InputSelector,
  PageHeading,
  SectionHeading,
  UploadButton,
} from "@/app/components";
import { CREATE_LISTING_CONST } from "./const";
import { useWindowSize } from "@/app/hooks";
import {
  BuildingOfficeIcon,
  CameraIcon,
  HouseIcon,
  IconContext,
  UserIcon,
} from "@phosphor-icons/react";

export const CreateListing = () => {
  const hook = useWindowSize();

  return (
    <form className="contents">
      <div className="relative col-span-full grid auto-rows-min grid-cols-1 gap-4 lg:col-span-8">
        <div className="pointer-events-none absolute -top-5 left-0 h-[calc(100%+2.5rem)] w-full lg:border-r lg:border-r-neutral-300" />
        <PageHeading>{CREATE_LISTING_CONST.HEADING}</PageHeading>
        <SectionHeading>{CREATE_LISTING_CONST.SECTIONS.ADDRESS}</SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">
          <Input
            placeholder={
              CREATE_LISTING_CONST.FORM.ADDRESS.STREET_ADDRESS.PLACEHOLDER
            }
            label={CREATE_LISTING_CONST.FORM.ADDRESS.STREET_ADDRESS.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.STREET_ADDRESS.HTML_FOR}
            required
          />
          <Input
            placeholder={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.PLACEHOLDER}
            label={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.HTML_FOR}
          />
          <Input
            placeholder={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.PLACEHOLDER}
            label={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.HTML_FOR}
            required
          />
          <div className="grid grid-cols-2 gap-5">
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.ADDRESS.PROVINCE.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.ADDRESS.PROVINCE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.PROVINCE.HTML_FOR}
              required
            />
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.HTML_FOR}
              required
            />
          </div>
        </div>
        <SectionHeading>
          {CREATE_LISTING_CONST.SECTIONS.OVERVIEW}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">number inputs</div>
        <SectionHeading>{CREATE_LISTING_CONST.SECTIONS.PHOTOS}</SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">
          <UploadButton
            label={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_IMAGE.LABEL}
            text={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_IMAGE.TEXT}
            htmlFor={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_IMAGE.HTML_FOR}
            required
          />
          <p className="-mt-2 !text-sm text-neutral-700">
            {CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_IMAGE.DESCRIPTION}
          </p>
          file dropzone
        </div>
        <SectionHeading>
          {CREATE_LISTING_CONST.SECTIONS.BROKERAGE_INFO}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">
          <InputSelector
            input={{
              type: "text",
              htmlFor:
                CREATE_LISTING_CONST.FORM.BROKERAGE.SELECT_BROKERAGE.HTML_FOR,
              placeholder:
                CREATE_LISTING_CONST.FORM.BROKERAGE.SELECT_BROKERAGE.TEXT,
              label: CREATE_LISTING_CONST.FORM.BROKERAGE.SELECT_BROKERAGE.LABEL,
              required: true,
            }}
            options={[
              { label: "Option 1", onClick: () => {} },
              { label: "Option 2", onClick: () => {} },
            ]}
          />
        </div>
      </div>
      {(!hook.isMobile || hook.isTablet) && (
        <div className="relative col-span-4 col-start-9 h-full pr-5">
          <div className="sticky top-5 grid auto-rows-min grid-cols-1 gap-5 rounded-2xl bg-neutral-950 p-2 shadow-lg">
            <div className="grid aspect-video w-full place-items-center rounded-xl bg-neutral-100 shadow-md">
              <CameraIcon
                className="text-neutral-400"
                size={48}
                weight="light"
              />
            </div>
            <div className="grid grid-cols-1 gap-1 px-1">
              <IconContext.Provider value={{ size: 24, weight: "light" }}>
                <div className="flex flex-row items-center gap-2 text-neutral-50">
                  <HouseIcon />
                  <p></p>
                </div>
                <div className="flex flex-row items-center gap-2 text-neutral-50">
                  <BuildingOfficeIcon />
                  <p></p>
                </div>
                <div className="flex flex-row items-center gap-2 text-neutral-50">
                  <UserIcon />
                  <p></p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
