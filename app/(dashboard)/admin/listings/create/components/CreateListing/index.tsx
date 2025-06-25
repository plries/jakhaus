"use client";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  CameraIcon,
  HouseIcon,
  IconContext,
  UserIcon,
} from "@phosphor-icons/react";
import {
  Button,
  Checkbox,
  Input,
  InputSelector,
  PageHeading,
  SectionHeading,
  UploadButton,
  UploadDropzone,
} from "@/app/components";
import { CREATE_LISTING_CONST, CREATE_LISTING_MOCK } from "./const";
import { useCreateListing } from "./useCreateListing";

export const CreateListing = () => {
  const hook = useCreateListing();

  return (
    <form className="contents" onSubmit={hook.handleSubmit}>
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
            value={hook.address?.street}
            onChange={(event) => {
              hook.setAddress((prev) => ({
                ...prev,
                street: event.target.value,
              }));
            }}
            required
          />
          <Input
            placeholder={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.PLACEHOLDER}
            label={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.HTML_FOR}
            value={hook.address?.unit}
            onChange={(event) => {
              hook.setAddress((prev) => ({
                ...prev,
                unit: event.target.value,
              }));
            }}
          />
          <Input
            placeholder={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.PLACEHOLDER}
            label={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.HTML_FOR}
            value={hook.address?.city}
            onChange={(event) => {
              hook.setAddress((prev) => ({
                ...prev,
                city: event.target.value,
              }));
            }}
            required
          />
          <div className="grid grid-cols-2 gap-5">
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.ADDRESS.PROVINCE.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.ADDRESS.PROVINCE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.PROVINCE.HTML_FOR}
              value={hook.address?.province}
              onChange={(event) => {
                hook.setAddress((prev) => ({
                  ...prev,
                  province: event.target.value,
                }));
              }}
              required
            />
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.HTML_FOR}
              value={hook.address?.postal}
              onChange={(event) => {
                hook.setAddress((prev) => ({
                  ...prev,
                  postal: event.target.value,
                }));
              }}
              required
            />
          </div>
        </div>
        <SectionHeading>
          {CREATE_LISTING_CONST.SECTIONS.OVERVIEW}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10 md:grid lg:grid-cols-3">
          <Input
            placeholder={
              CREATE_LISTING_CONST.FORM.OVERVIEW.BEDROOMS.PLACEHOLDER
            }
            label={CREATE_LISTING_CONST.FORM.OVERVIEW.BEDROOMS.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.OVERVIEW.BEDROOMS.HTML_FOR}
            type="number"
            value={hook.bedrooms}
            onChange={(event) => {
              const value = event.target.value.replace(/[^0-9]/g, "") || "0";
              hook.setBedrooms(parseInt(value, 10));
            }}
            required
          />
          <Input
            placeholder={
              CREATE_LISTING_CONST.FORM.OVERVIEW.BATHROOMS.PLACEHOLDER
            }
            label={CREATE_LISTING_CONST.FORM.OVERVIEW.BATHROOMS.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.OVERVIEW.BATHROOMS.HTML_FOR}
            type="number"
            value={hook.bathrooms}
            onChange={(event) => {
              const value = event.target.value.replace(/[^0-9]/g, "") || "0";
              hook.setBathrooms(parseInt(value, 10));
            }}
            required
          />
          <Input
            placeholder={
              CREATE_LISTING_CONST.FORM.OVERVIEW.SQUARE_FEET.PLACEHOLDER
            }
            label={CREATE_LISTING_CONST.FORM.OVERVIEW.SQUARE_FEET.LABEL}
            htmlFor={CREATE_LISTING_CONST.FORM.OVERVIEW.SQUARE_FEET.HTML_FOR}
            type="number"
            value={hook.squareFeet}
            onChange={(event) => {
              const value = event.target.value.replace(/[^0-9]/g, "") || "0";
              hook.setSquareFeet(parseInt(value, 10));
            }}
            required
          />
        </div>
        <SectionHeading>{CREATE_LISTING_CONST.SECTIONS.PHOTOS}</SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">
          <UploadButton
            label={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.LABEL}
            text={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.TEXT}
            htmlFor={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.HTML_FOR}
            onChange={(file) => {
              const previewUrl = URL.createObjectURL(file);
              hook.setFeaturedPhoto({
                file,
                previewUrl,
                uploadedUrl: null,
              });
            }}
            onClear={() =>
              hook.setFeaturedPhoto({
                file: null,
                previewUrl: null,
                uploadedUrl: null,
              })
            }
            required
          />
          <p className="-mt-2 !text-sm text-neutral-700">
            {CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.DESCRIPTION}
          </p>
          <UploadDropzone
            label={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.LABEL}
            text={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.TEXT}
            caption={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.CAPTION}
            htmlFor={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.HTML_FOR}
            required
          />
        </div>
        <SectionHeading>
          {CREATE_LISTING_CONST.SECTIONS.OTHER_ATTACHMENTS}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">
          <Input
            placeholder={
              CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK.PLACEHOLDER
            }
            label={CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK.LABEL}
            htmlFor={
              CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK.HTML_FOR
            }
            value={hook.videoLink}
            onChange={(event) => hook.setVideoLink(event.target.value)}
          />
          <p className="-mt-2 !text-sm text-neutral-700">
            {CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK.DESCRIPTION}
          </p>
          <Input
            placeholder={
              CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK.PLACEHOLDER
            }
            label={CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK.LABEL}
            htmlFor={
              CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK.HTML_FOR
            }
            value={hook.scanLink}
            onChange={(event) => hook.setScanLink(event.target.value)}
          />
          <UploadDropzone
            label={CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLAN.LABEL}
            text={CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLAN.TEXT}
            caption={
              CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLAN.CAPTION
            }
            htmlFor={
              CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLAN.HTML_FOR
            }
          />
        </div>
        <SectionHeading>
          {CREATE_LISTING_CONST.SECTIONS.AGENT_INFO}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 px-10">
          <InputSelector
            input={{
              type: "text",
              htmlFor: CREATE_LISTING_CONST.FORM.AGENT.SELECT_AGENT.HTML_FOR,
              placeholder: CREATE_LISTING_CONST.FORM.AGENT.SELECT_AGENT.TEXT,
              label: CREATE_LISTING_CONST.FORM.AGENT.SELECT_AGENT.LABEL,
              value: hook.agent?.name,
              onChange: (option) => {
                const selected = CREATE_LISTING_MOCK.AGENTS.find(
                  (a) => a.AGENT.NAME === option.target.value,
                );
                if (!selected) return;
                hook.setAgent({
                  id: selected.ID,
                  logo: selected.AGENT.LOGO,
                  darkLogo: selected.AGENT.DARK_LOGO,
                  name: selected.AGENT.NAME,
                  email: selected.AGENT.EMAIL,
                  phone: selected.AGENT.PHONE,
                  website: selected.AGENT.WEBSITE || "",
                  instagram: selected.AGENT.INSTAGRAM || "",
                });
                if (!selected.AGENT.LOGO) return;
                hook.setBrokerage({
                  logo: selected.BROKERAGE.LOGO,
                  title: selected.BROKERAGE.TITLE,
                  address: selected.BROKERAGE.ADDRESS,
                });
              },
            }}
            options={CREATE_LISTING_MOCK.AGENTS.map((agent) => ({
              label: agent.AGENT.NAME,
            }))}
          />
          <button
            className="relative w-fit cursor-pointer place-self-end !text-sm text-neutral-600 duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-950 after:transition-[scale] hover:text-neutral-950 hover:after:scale-x-100"
            type="button"
            onClick={hook.toggleShowCreateAgent}
          >
            {hook.showCreateAgent
              ? CREATE_LISTING_CONST.FORM.AGENT.HIDE
              : CREATE_LISTING_CONST.FORM.AGENT.OR}
          </button>
          <div
            className={`${hook.showCreateAgent ? "grid grid-cols-1 gap-4" : "hidden"}`}
          >
            <UploadButton
              label={CREATE_LISTING_CONST.FORM.AGENT.LOGO.LABEL}
              text={CREATE_LISTING_CONST.FORM.AGENT.LOGO.TEXT}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.LOGO.HTML_FOR}
              onClear={() => {
                hook.setAgentLogo({
                  file: null,
                  previewUrl: "",
                  uploadedUrl: null,
                });
              }}
              onChange={(file: File) => {
                hook.setAgentLogo({
                  file,
                  previewUrl: URL.createObjectURL(file),
                  uploadedUrl: null,
                });
              }}
              isDarkLogo={hook.agent.darkLogo}
              preview={hook.agent.logo}
              required
            />
            {hook.agent.logo && (
              <>
                <Checkbox
                  label={CREATE_LISTING_CONST.FORM.AGENT.LOGO_DARK.LABEL}
                  htmlFor={CREATE_LISTING_CONST.FORM.AGENT.LOGO_DARK.HTML_FOR}
                  value={hook.agent.darkLogo}
                  onChange={(event) => {
                    hook.setAgent((prev) => ({
                      ...prev,
                      darkLogo: event.target.checked,
                    }));
                  }}
                />
                <p className="-mt-2 !text-sm text-neutral-700">
                  {CREATE_LISTING_CONST.FORM.AGENT.LOGO_DARK.DESCRIPTION}
                </p>
              </>
            )}
            <Input
              placeholder={CREATE_LISTING_CONST.FORM.AGENT.NAME.PLACEHOLDER}
              label={CREATE_LISTING_CONST.FORM.AGENT.NAME.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.NAME.HTML_FOR}
              value={hook.agent.name}
              onChange={(event) => {
                hook.setAgent((prev) => ({
                  ...prev,
                  name: event.target.value,
                }));
              }}
              required
            />
            <Input
              placeholder={CREATE_LISTING_CONST.FORM.AGENT.EMAIL.PLACEHOLDER}
              label={CREATE_LISTING_CONST.FORM.AGENT.EMAIL.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.EMAIL.HTML_FOR}
              value={hook.agent.email}
              onChange={(event) => {
                hook.setAgent((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
              required
            />
            <Input
              placeholder={CREATE_LISTING_CONST.FORM.AGENT.PHONE.PLACEHOLDER}
              label={CREATE_LISTING_CONST.FORM.AGENT.PHONE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.PHONE.HTML_FOR}
              value={hook.agent.phone}
              onChange={(event) => {
                hook.setAgent((prev) => ({
                  ...prev,
                  phone: event.target.value,
                }));
              }}
              required
            />
            <Input
              placeholder={CREATE_LISTING_CONST.FORM.AGENT.WEBSITE.PLACEHOLDER}
              label={CREATE_LISTING_CONST.FORM.AGENT.WEBSITE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.WEBSITE.HTML_FOR}
              value={hook.agent.website}
              onChange={(event) => {
                hook.setAgent((prev) => ({
                  ...prev,
                  website: event.target.value,
                }));
              }}
            />
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.AGENT.INSTAGRAM.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.AGENT.INSTAGRAM.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.INSTAGRAM.HTML_FOR}
              value={hook.agent.instagram}
              onChange={(event) => {
                hook.setAgent((prev) => ({
                  ...prev,
                  instagram: event.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className={`${hook.showCreateAgent ? "contents" : "hidden"}`}>
          <SectionHeading>
            {CREATE_LISTING_CONST.SECTIONS.BROKERAGE_INFO}
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 px-10">
            <UploadButton
              label={CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.LABEL}
              text={CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.TEXT}
              htmlFor={CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.HTML_FOR}
              onClear={() =>
                hook.setBrokerageLogo({
                  file: null,
                  previewUrl: "",
                  uploadedUrl: null,
                })
              }
              onChange={(file: File) => {
                hook.setBrokerageLogo({
                  file,
                  previewUrl: URL.createObjectURL(file),
                  uploadedUrl: null,
                });
              }}
              preview={hook.brokerage.logo}
              required
            />
            <p className="-mt-2 !text-sm text-neutral-700">
              {CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.DESCRIPTION}
            </p>
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.BROKERAGE.TITLE.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.BROKERAGE.TITLE.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.BROKERAGE.TITLE.HTML_FOR}
              value={hook.brokerage.title}
              onChange={(event) => {
                hook.setBrokerage((prev) => ({
                  ...prev,
                  title: event.target.value,
                }));
              }}
              required
            />
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.BROKERAGE.ADDRESS.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.BROKERAGE.ADDRESS.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.BROKERAGE.ADDRESS.HTML_FOR}
              value={hook.brokerage.address}
              onChange={(event) => {
                hook.setBrokerage((prev) => ({
                  ...prev,
                  address: event.target.value,
                }));
              }}
              required
            />
            <Checkbox
              label={CREATE_LISTING_CONST.FORM.AGENT.SAVE_AGENT.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.AGENT.SAVE_AGENT.HTML_FOR}
            />
            <p className="-mt-2 !text-sm text-neutral-700">
              {CREATE_LISTING_CONST.FORM.AGENT.SAVE_AGENT.DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-4 col-start-9 hidden h-full pr-5 lg:block">
        <div className="sticky top-2.5 grid auto-rows-min grid-cols-1 gap-5 rounded-2xl bg-neutral-950 p-2 shadow-lg">
          <div className="grid aspect-video w-full place-items-center overflow-hidden rounded-xl bg-neutral-100 shadow-md">
            {hook.featuredPhoto.file && hook.featuredPhoto.previewUrl ? (
              <Image
                src={hook.featuredPhoto.previewUrl}
                alt={hook.featuredPhoto.file?.name}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            ) : (
              <CameraIcon
                className="text-neutral-400"
                size={48}
                weight="light"
              />
            )}
          </div>
          <div className="grid grid-cols-1 gap-1 px-1">
            <IconContext.Provider value={{ size: 24, weight: "light" }}>
              <div className="flex flex-row items-center gap-2 text-neutral-50">
                <HouseIcon className="min-w-6" />
                {hook.address && (
                  <p className="leading-none">
                    {hook.address.unit} {hook.address.street}{" "}
                    {hook.address.city ? hook.address.city + ", " : ""}{" "}
                    {hook.address.province ? hook.address.province + ", " : ""}
                    {hook.address.postal}
                  </p>
                )}
              </div>
              <div className="flex flex-row items-center gap-2 text-neutral-50">
                <BuildingOfficeIcon className="min-w-6" />
                {hook.brokerage && (
                  <p className="leading-none">{hook.brokerage.title}</p>
                )}
              </div>
              <div className="flex flex-row items-center gap-2 text-neutral-50">
                <UserIcon className="min-w-6" />
                {hook.agent && (
                  <p className="leading-none">{hook.agent.name}</p>
                )}
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="col-span-full flex flex-row flex-wrap justify-end gap-5 border-t border-t-neutral-300 px-10 pt-10 pb-5">
        <Button
          onClick={() => {
            history.back();
          }}
        >
          {CREATE_LISTING_CONST.BUTTONS.CANCEL}
        </Button>
        <Button
          type="submit"
          additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
        >
          {CREATE_LISTING_CONST.BUTTONS.CREATE}
        </Button>
      </div>
    </form>
  );
};
