"use client";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  CameraIcon,
  CircleNotchIcon,
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
  StatusModal,
  UploadButton,
  UploadZone,
} from "@/app/components";
import { CREATE_LISTING_CONST } from "./const";
import { useCreateListing } from "./useCreateListing";

export const CreateListing = () => {
  const hook = useCreateListing();

  return (
    <>
      <form className="contents" onSubmit={hook.handleSubmit}>
        <div className="relative col-span-full grid auto-rows-min grid-cols-1 gap-4 lg:col-span-8">
          <div className="pointer-events-none absolute -top-5 left-0 h-[calc(100%+2.5rem)] w-full lg:border-r lg:border-r-neutral-300" />
          <PageHeading>{CREATE_LISTING_CONST.HEADING}</PageHeading>

          <SectionHeading>
            {CREATE_LISTING_CONST.SECTIONS.ADDRESS}
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 px-5 md:px-10">
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.ADDRESS.STREET_ADDRESS.PLACEHOLDER
              }
              label={CREATE_LISTING_CONST.FORM.ADDRESS.STREET_ADDRESS.LABEL}
              htmlFor={
                CREATE_LISTING_CONST.FORM.ADDRESS.STREET_ADDRESS.HTML_FOR
              }
              value={hook.address?.STREET}
              onChange={(event) => {
                hook.setAddress((prev) => ({
                  ...prev,
                  STREET: event.target.value,
                }));
              }}
              required
            />
            <Input
              placeholder={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.PLACEHOLDER}
              label={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.UNIT.HTML_FOR}
              value={hook.address?.UNIT}
              onChange={(event) => {
                hook.setAddress((prev) => ({
                  ...prev,
                  UNIT: event.target.value,
                }));
              }}
            />
            <Input
              placeholder={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.PLACEHOLDER}
              label={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.LABEL}
              htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.CITY.HTML_FOR}
              value={hook.address?.CITY}
              onChange={(event) => {
                hook.setAddress((prev) => ({
                  ...prev,
                  CITY: event.target.value,
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
                value={hook.address?.PROVINCE}
                onChange={(event) => {
                  hook.setAddress((prev) => ({
                    ...prev,
                    PROVINCE: event.target.value,
                  }));
                }}
                maxLength={2}
                required
              />
              <Input
                inputRef={hook.postalRef}
                placeholder={
                  CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.PLACEHOLDER
                }
                label={CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.ADDRESS.POSTAL_CODE.HTML_FOR}
                value={hook.address?.POSTAL_CODE}
                onChange={(event) => {
                  hook.setAddress((prev) => ({
                    ...prev,
                    POSTAL_CODE: hook.formatPostal(event.target.value),
                  }));
                }}
                maxLength={7}
                required
              />
            </div>
          </div>

          <SectionHeading>
            {CREATE_LISTING_CONST.SECTIONS.OVERVIEW}
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 px-5 md:grid md:px-10 lg:grid-cols-3">
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
              onFocus={(event) => event.target.select()}
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
              onFocus={(event) => event.target.select()}
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
              onFocus={(event) => event.target.select()}
              required
            />
          </div>

          <SectionHeading>
            {CREATE_LISTING_CONST.SECTIONS.PHOTOS}
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 px-5 md:px-10">
            <UploadButton
              label={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.LABEL}
              text={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.TEXT}
              htmlFor={CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.HTML_FOR}
              onChange={(file) => {
                hook.setFeaturedPhoto({
                  file,
                  previewUrl: URL.createObjectURL(file),
                });
              }}
              onClear={() =>
                hook.setFeaturedPhoto({
                  file: null,
                  previewUrl: null,
                })
              }
              required
            />
            <p className="-mt-2 !text-sm text-neutral-500">
              {CREATE_LISTING_CONST.FORM.PHOTOS.FEATURED_PHOTO.DESCRIPTION}
            </p>
            <UploadZone
              label={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.LABEL}
              text={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.TEXT}
              caption={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.CAPTION}
              htmlFor={CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.HTML_FOR}
              onChange={(uploadedFiles) => {
                hook.setPhotoGallery(
                  uploadedFiles.map((file) => ({
                    file,
                    previewUrl: URL.createObjectURL(file),
                  })),
                );
              }}
              onClear={(index) =>
                hook.setPhotoGallery((prev) =>
                  prev.filter((_, i) => i !== index),
                )
              }
              files={hook.photoGallery}
              required
            />
            <p className="-mt-2 !text-sm text-neutral-500">
              {CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.DESCRIPTION}
              <br />
              {CREATE_LISTING_CONST.FORM.PHOTOS.PHOTO_GALLERY.DESCRIPTION_2}
            </p>
          </div>

          <SectionHeading>
            {CREATE_LISTING_CONST.SECTIONS.OTHER_ATTACHMENTS}
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 px-5 md:px-10">
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK
                  .PLACEHOLDER
              }
              label={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK.LABEL
              }
              htmlFor={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK.HTML_FOR
              }
              value={hook.videoLink}
              onChange={(event) => hook.setVideoLink(event.target.value)}
            />
            <p className="-mt-2 !text-sm text-neutral-500">
              {
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.VIDEO_LINK
                  .DESCRIPTION
              }
            </p>
            <Input
              placeholder={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK
                  .PLACEHOLDER
              }
              label={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK.LABEL
              }
              htmlFor={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK.HTML_FOR
              }
              value={hook.scanLink}
              onChange={(event) => hook.setScanLink(event.target.value)}
            />
            <p className="-mt-2 !text-sm text-neutral-500">
              {
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.SCAN_LINK
                  .DESCRIPTION
              }
            </p>
            <UploadZone
              label={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLANS.LABEL
              }
              text={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLANS.TEXT
              }
              caption={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLANS.CAPTION
              }
              htmlFor={
                CREATE_LISTING_CONST.FORM.OTHER_ATTACHMENTS.FLOOR_PLANS.HTML_FOR
              }
              onChange={(uploadedFiles) => {
                hook.setFloorPlans(
                  uploadedFiles.map((file) => ({
                    file,
                    previewUrl: URL.createObjectURL(file),
                  })),
                );
              }}
              onClear={(index) =>
                hook.setFloorPlans((prev) => prev.filter((_, i) => i !== index))
              }
              files={hook.floorPlans}
              required
            />
          </div>

          <SectionHeading>
            {CREATE_LISTING_CONST.SECTIONS.AGENT_INFO}
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 px-5 md:px-10">
            <InputSelector
              input={{
                type: "text",
                htmlFor: CREATE_LISTING_CONST.FORM.AGENT.SELECT_AGENT.HTML_FOR,
                placeholder: CREATE_LISTING_CONST.FORM.AGENT.SELECT_AGENT.TEXT,
                label: CREATE_LISTING_CONST.FORM.AGENT.SELECT_AGENT.LABEL,
                onChange: (option) => {
                  const selected = hook.existingAgents.find(
                    (agent) => agent.NAME === option.target.value,
                  );
                  if (!selected) return;
                  hook.setAgent({
                    id: selected.id,
                    LOGO_URL: selected.LOGO_URL,
                    LOGO_DARK: selected.LOGO_DARK,
                    SUBTITLE: selected.SUBTITLE,
                    NAME: selected.NAME,
                    EMAIL: selected.EMAIL,
                    PHONE: selected.PHONE,
                    WEBSITE: selected.WEBSITE || "",
                    INSTAGRAM: selected.INSTAGRAM || "",
                    BROKERAGE_LOGO: selected.BROKERAGE_LOGO || "",
                    BROKERAGE_NAME: selected.BROKERAGE_NAME || "",
                    BROKERAGE_ADDRESS: selected.BROKERAGE_ADDRESS || "",
                  });
                },
                disabled: hook.showCreateAgent || !hook.existingAgents.length,
              }}
              options={hook.existingAgents.map((agent) => ({
                label: agent.NAME,
              }))}
            />
            <button
              className="relative w-fit cursor-pointer place-self-end !text-sm text-neutral-600 duration-150 ease-in-out after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-950 after:transition-[scale] hover:text-neutral-950 hover:after:scale-x-100"
              type="button"
              onClick={() => {
                hook.toggleShowCreateAgent();
                hook.setAgent({
                  id: "",
                  LOGO_URL: "",
                  LOGO_DARK: false,
                  SUBTITLE: "",
                  NAME: "",
                  EMAIL: "",
                  PHONE: "",
                  WEBSITE: "",
                  INSTAGRAM: "",
                  BROKERAGE_LOGO: "",
                  BROKERAGE_NAME: "",
                  BROKERAGE_ADDRESS: "",
                });
                hook.setAgentLogo({
                  file: null,
                  previewUrl: "",
                });
                hook.setBrokerageLogo({
                  file: null,
                  previewUrl: "",
                });
              }}
            >
              {hook.showCreateAgent
                ? CREATE_LISTING_CONST.FORM.AGENT.CANCEL
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
                  });
                  hook.setAgent({
                    ...hook.agent,
                    LOGO_URL: "",
                  });
                }}
                onChange={(file: File) => {
                  hook.setAgentLogo({
                    file,
                    previewUrl: URL.createObjectURL(file),
                  });
                }}
                isDarkLogo={hook.agent.LOGO_DARK}
                preview={hook.agent.LOGO_URL}
                required
              />
              <Checkbox
                label={CREATE_LISTING_CONST.FORM.AGENT.LOGO_DARK.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.LOGO_DARK.HTML_FOR}
                value={hook.agent.LOGO_DARK}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    LOGO_DARK: event.target.checked,
                  }));
                }}
              />
              <p className="-mt-2 !text-sm text-neutral-500">
                {CREATE_LISTING_CONST.FORM.AGENT.LOGO_DARK.DESCRIPTION}
              </p>
              <Input
                placeholder={CREATE_LISTING_CONST.FORM.AGENT.NAME.PLACEHOLDER}
                label={CREATE_LISTING_CONST.FORM.AGENT.NAME.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.NAME.HTML_FOR}
                value={hook.agent.NAME}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    NAME: event.target.value,
                  }));
                }}
                required
              />
              <Input
                placeholder={
                  CREATE_LISTING_CONST.FORM.AGENT.SUBTITLE.PLACEHOLDER
                }
                label={CREATE_LISTING_CONST.FORM.AGENT.SUBTITLE.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.SUBTITLE.HTML_FOR}
                value={hook.agent.SUBTITLE}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    SUBTITLE: event.target.value,
                  }));
                }}
                required
              />
              <Input
                placeholder={CREATE_LISTING_CONST.FORM.AGENT.EMAIL.PLACEHOLDER}
                label={CREATE_LISTING_CONST.FORM.AGENT.EMAIL.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.EMAIL.HTML_FOR}
                value={hook.agent.EMAIL}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    EMAIL: event.target.value,
                  }));
                }}
                required
              />
              <Input
                inputRef={hook.phoneRef}
                placeholder={CREATE_LISTING_CONST.FORM.AGENT.PHONE.PLACEHOLDER}
                label={CREATE_LISTING_CONST.FORM.AGENT.PHONE.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.PHONE.HTML_FOR}
                value={hook.agent.PHONE}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    PHONE: hook.formatPhone(event.target.value),
                  }));
                }}
                maxLength={12}
                required
              />
              <Input
                placeholder={
                  CREATE_LISTING_CONST.FORM.AGENT.WEBSITE.PLACEHOLDER
                }
                label={CREATE_LISTING_CONST.FORM.AGENT.WEBSITE.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.WEBSITE.HTML_FOR}
                value={hook.agent.WEBSITE}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    WEBSITE: event.target.value,
                  }));
                }}
              />
              <Input
                placeholder={
                  CREATE_LISTING_CONST.FORM.AGENT.INSTAGRAM.PLACEHOLDER
                }
                label={CREATE_LISTING_CONST.FORM.AGENT.INSTAGRAM.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.AGENT.INSTAGRAM.HTML_FOR}
                value={hook.agent.INSTAGRAM}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    INSTAGRAM: event.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <div className={`${hook.showCreateAgent ? "contents" : "hidden"}`}>
            <SectionHeading>
              {CREATE_LISTING_CONST.SECTIONS.BROKERAGE_INFO}
            </SectionHeading>
            <div className="grid grid-cols-1 gap-4 px-5 md:px-10">
              <UploadButton
                label={CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.LABEL}
                text={CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.TEXT}
                htmlFor={CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.HTML_FOR}
                onClear={() => {
                  hook.setBrokerageLogo({
                    file: null,
                    previewUrl: "",
                  });
                  hook.setAgent({
                    ...hook.agent,
                    BROKERAGE_LOGO: "",
                  });
                }}
                onChange={(file: File) => {
                  hook.setBrokerageLogo({
                    file,
                    previewUrl: URL.createObjectURL(file),
                  });
                }}
                preview={hook.agent.BROKERAGE_LOGO}
                required
              />
              <p className="-mt-2 !text-sm text-neutral-500">
                {CREATE_LISTING_CONST.FORM.BROKERAGE.LOGO.DESCRIPTION}
              </p>
              <Input
                placeholder={
                  CREATE_LISTING_CONST.FORM.BROKERAGE.NAME.PLACEHOLDER
                }
                label={CREATE_LISTING_CONST.FORM.BROKERAGE.NAME.LABEL}
                htmlFor={CREATE_LISTING_CONST.FORM.BROKERAGE.NAME.HTML_FOR}
                value={hook.agent.BROKERAGE_NAME}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    BROKERAGE_NAME: event.target.value,
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
                value={hook.agent.BROKERAGE_ADDRESS}
                onChange={(event) => {
                  hook.setAgent((prev) => ({
                    ...prev,
                    BROKERAGE_ADDRESS: event.target.value,
                  }));
                }}
                required
              />
              <p className="-mt-2 !text-sm text-neutral-500">
                {CREATE_LISTING_CONST.FORM.AGENT.SAVE_AGENT.DESCRIPTION}
              </p>
            </div>
          </div>
        </div>

        <div className="relative col-span-4 col-start-9 hidden h-full pr-5 lg:block">
          <div className="sticky top-1/2 grid -translate-y-1/2 auto-rows-min grid-cols-1 gap-5 rounded-2xl bg-neutral-950 p-2 shadow-lg">
            <div className="grid aspect-video w-full place-items-center overflow-hidden rounded-xl bg-neutral-100 shadow-md">
              {hook.featuredPhoto.file && hook.featuredPhoto.previewUrl ? (
                <Image
                  src={hook.featuredPhoto.previewUrl}
                  alt={hook.featuredPhoto.file?.name}
                  width={1920}
                  height={1080}
                  className="aspect-video h-full w-full object-cover object-center"
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
                      {hook.address.UNIT} {hook.address.STREET}{" "}
                      {hook.address.CITY ? hook.address.CITY + ", " : ""}{" "}
                      {hook.address.PROVINCE
                        ? hook.address.PROVINCE + ", "
                        : ""}
                      {hook.address.POSTAL_CODE}
                    </p>
                  )}
                </div>
                <div className="flex flex-row items-center gap-2 text-neutral-50">
                  <UserIcon className="min-w-6" />
                  {hook.agent.NAME && (
                    <p className="leading-none">{hook.agent.NAME}</p>
                  )}
                </div>
                <div className="flex flex-row items-center gap-2 text-neutral-50">
                  <BuildingOfficeIcon className="min-w-6" />
                  {hook.agent.BROKERAGE_NAME && (
                    <p className="leading-none">{hook.agent.BROKERAGE_NAME}</p>
                  )}
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <div className="col-span-full flex flex-row flex-wrap justify-end gap-5 border-t border-t-neutral-300 px-5 pt-5 md:px-10 md:pt-10 md:pb-5">
          <Button
            onClick={() => {
              history.back();
            }}
          >
            {CREATE_LISTING_CONST.BUTTONS.CANCEL}
          </Button>
          <Button
            type="submit"
            additionalClasses="!text-neutral-50 !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900"
          >
            {hook.isSubmitting && (
              <CircleNotchIcon className="animate-spin" size={20} />
            )}
            {CREATE_LISTING_CONST.BUTTONS.CREATE}
          </Button>
        </div>
      </form>
      <StatusModal showModal={hook.showModal} success={hook.success}>
        <div className="mt-5 mb-10 flex flex-col items-center">
          <p className="!text-2xl font-medium">
            {hook.success
              ? CREATE_LISTING_CONST.MODAL.SUCCESS.HEADING
              : CREATE_LISTING_CONST.MODAL.ERROR.HEADING}
          </p>
          <p className="text-center !text-base text-neutral-600">
            {hook.success
              ? CREATE_LISTING_CONST.MODAL.SUCCESS.DESCRIPTION
              : CREATE_LISTING_CONST.MODAL.ERROR.DESCRIPTION}
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-5">
          {hook.success ? (
            <>
              <Button
                onClick={() => {
                  hook.setShowModal(false);
                  history.back();
                }}
              >
                {CREATE_LISTING_CONST.MODAL.BUTTONS.CLOSE}
              </Button>
              <Button
                onClick={() => {
                  window.location.reload();
                }}
                additionalClasses="!text-neutral-50 !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900"
              >
                {CREATE_LISTING_CONST.MODAL.BUTTONS.CREATE}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                hook.setShowModal(false);
                history.back();
              }}
              additionalClasses="!text-neutral-50 !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900 col-span-full"
            >
              {CREATE_LISTING_CONST.MODAL.BUTTONS.CLOSE}
            </Button>
          )}
        </div>
      </StatusModal>
    </>
  );
};
