"use client";
import { CircleNotchIcon } from "@phosphor-icons/react";
import {
  SectionHeading,
  PageHeading,
  Input,
  UploadButton,
  Button,
  Checkbox,
  StatusModal,
} from "@/app/components";
import { ADMIN_AGENT_CONST } from "@/app/(dashboard)/admin/agents/const";
import { useCreateAgent } from "./useCreateAgent";

export const CreateAgent = () => {
  const hook = useCreateAgent();

  return (
    <>
      <form className="contents" onSubmit={hook.handleSubmit}>
        <PageHeading>{ADMIN_AGENT_CONST.CREATE_HEADING}</PageHeading>
        <SectionHeading>{ADMIN_AGENT_CONST.SECTIONS.AGENT_INFO}</SectionHeading>
        <div className="col-span-full grid grid-cols-1 gap-4 px-5 md:px-10">
          <UploadButton
            label={ADMIN_AGENT_CONST.FORM.AGENT.LOGO.LABEL}
            text={ADMIN_AGENT_CONST.FORM.AGENT.LOGO.TEXT}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.LOGO.HTML_FOR}
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
              hook.setTouchedFields((prev) =>
                new Set(prev).add(ADMIN_AGENT_CONST.FORM.AGENT.LOGO.HTML_FOR),
              );
            }}
            isDarkLogo={hook.agent.LOGO_DARK}
            preview={hook.agent.LOGO_URL}
            required
          />
          <Checkbox
            label={ADMIN_AGENT_CONST.FORM.AGENT.LOGO_DARK.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.LOGO_DARK.HTML_FOR}
            value={hook.agent.LOGO_DARK}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                LOGO_DARK: event.target.checked,
              }));
            }}
          />
          <p className="-mt-2 !text-sm text-neutral-500">
            {ADMIN_AGENT_CONST.FORM.AGENT.LOGO_DARK.DESCRIPTION}
          </p>
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.AGENT.NAME.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.AGENT.NAME.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.NAME.HTML_FOR}
            value={hook.agent.NAME}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                NAME: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(ADMIN_AGENT_CONST.FORM.AGENT.NAME.HTML_FOR),
              );
            }}
            required
          />
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.AGENT.SUBTITLE.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.AGENT.SUBTITLE.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.SUBTITLE.HTML_FOR}
            value={hook.agent.SUBTITLE}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                SUBTITLE: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.AGENT.SUBTITLE.HTML_FOR,
                ),
              );
            }}
            required
          />
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.AGENT.EMAIL.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.AGENT.EMAIL.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.EMAIL.HTML_FOR}
            value={hook.agent.EMAIL}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                EMAIL: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(ADMIN_AGENT_CONST.FORM.AGENT.EMAIL.HTML_FOR),
              );
            }}
            required
          />
          <Input
            inputRef={hook.phoneRef}
            placeholder={ADMIN_AGENT_CONST.FORM.AGENT.PHONE.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.AGENT.PHONE.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.PHONE.HTML_FOR}
            value={hook.agent.PHONE}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                PHONE: hook.formatPhone(event.target.value),
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(ADMIN_AGENT_CONST.FORM.AGENT.PHONE.HTML_FOR),
              );
            }}
            maxLength={12}
            required
          />
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.AGENT.WEBSITE.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.AGENT.WEBSITE.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.WEBSITE.HTML_FOR}
            value={hook.agent.WEBSITE}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                WEBSITE: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.AGENT.WEBSITE.HTML_FOR,
                ),
              );
            }}
          />
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.AGENT.INSTAGRAM.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.AGENT.INSTAGRAM.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.AGENT.INSTAGRAM.HTML_FOR}
            value={hook.agent.INSTAGRAM}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                INSTAGRAM: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.AGENT.INSTAGRAM.HTML_FOR,
                ),
              );
            }}
          />
        </div>

        <SectionHeading>
          {ADMIN_AGENT_CONST.SECTIONS.BROKERAGE_INFO}
        </SectionHeading>
        <div className="col-span-full grid grid-cols-1 gap-4 px-5 md:px-10">
          <UploadButton
            label={ADMIN_AGENT_CONST.FORM.BROKERAGE.LOGO.LABEL}
            text={ADMIN_AGENT_CONST.FORM.BROKERAGE.LOGO.TEXT}
            htmlFor={ADMIN_AGENT_CONST.FORM.BROKERAGE.LOGO.HTML_FOR}
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
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.BROKERAGE.LOGO.HTML_FOR,
                ),
              );
            }}
            preview={hook.agent.BROKERAGE_LOGO}
            required
          />
          <p className="-mt-2 !text-sm text-neutral-500">
            {ADMIN_AGENT_CONST.FORM.BROKERAGE.LOGO.DESCRIPTION}
          </p>
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.BROKERAGE.NAME.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.BROKERAGE.NAME.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.BROKERAGE.NAME.HTML_FOR}
            value={hook.agent.BROKERAGE_NAME}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                BROKERAGE_NAME: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.BROKERAGE.NAME.HTML_FOR,
                ),
              );
            }}
            required
          />
          <Input
            placeholder={ADMIN_AGENT_CONST.FORM.BROKERAGE.ADDRESS.PLACEHOLDER}
            label={ADMIN_AGENT_CONST.FORM.BROKERAGE.ADDRESS.LABEL}
            htmlFor={ADMIN_AGENT_CONST.FORM.BROKERAGE.ADDRESS.HTML_FOR}
            value={hook.agent.BROKERAGE_ADDRESS}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                BROKERAGE_ADDRESS: event.target.value,
              }));
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.BROKERAGE.ADDRESS.HTML_FOR,
                ),
              );
            }}
            required
          />
        </div>

        <div className="col-span-full flex flex-row flex-wrap justify-end gap-5 border-t border-t-neutral-300 px-5 pt-5 md:px-10 md:pt-10 md:pb-5">
          <Button
            onClick={() => {
              history.back();
            }}
          >
            {ADMIN_AGENT_CONST.BUTTONS.CANCEL}
          </Button>
          <Button
            type="submit"
            additionalClasses="!text-neutral-50 !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900"
            disabled={
              hook.isSubmitting ||
              hook.requiredFields
                .map((key: string) => !hook.touchedFields.has(key))
                .includes(true)
            }
          >
            {hook.isSubmitting && (
              <CircleNotchIcon className="animate-spin" size={20} />
            )}
            {ADMIN_AGENT_CONST.BUTTONS.CREATE}
          </Button>
        </div>
      </form>
      <StatusModal showModal={hook.showModal} success={hook.success}>
        <div className="mt-5 mb-10 flex flex-col items-center">
          <p className="!text-2xl font-medium">
            {hook.success
              ? ADMIN_AGENT_CONST.MODAL.SUCCESS.HEADING
              : ADMIN_AGENT_CONST.MODAL.ERROR.HEADING}
          </p>
          <p className="text-center !text-base text-neutral-600">
            {hook.success
              ? ADMIN_AGENT_CONST.MODAL.SUCCESS.DESCRIPTION
              : ADMIN_AGENT_CONST.MODAL.ERROR.DESCRIPTION}
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
                {ADMIN_AGENT_CONST.MODAL.BUTTONS.CLOSE}
              </Button>
              <Button
                onClick={() => {
                  window.location.reload();
                }}
                additionalClasses="!text-neutral-50 !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900"
              >
                {ADMIN_AGENT_CONST.MODAL.BUTTONS.CREATE}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                hook.setShowModal(false);
                history.back();
              }}
              additionalClasses="!text-neutral-50 col-span-full !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900"
            >
              {ADMIN_AGENT_CONST.MODAL.BUTTONS.CLOSE}
            </Button>
          )}
        </div>
      </StatusModal>
    </>
  );
};
