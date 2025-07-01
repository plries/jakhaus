"use client";
import { useEffect } from "react";
import { CircleNotchIcon } from "@phosphor-icons/react";
import { ADMIN_AGENT_CONST } from "@/app/(dashboard)/admin/agents/const";
import {
  PageHeading,
  SectionHeading,
  UploadButton,
  Checkbox,
  StatusModal,
  Input,
  Button,
} from "@/app/components";
import { EditAgentPropTypes } from "./type";
import { useEditAgent } from "./useEditAgent";

export const EditAgent = ({ EDITED_AGENT }: EditAgentPropTypes) => {
  const hook = useEditAgent();

  useEffect(() => {
    if (EDITED_AGENT?.id) {
      hook.setAgent((prev) => ({
        ...prev,
        id: EDITED_AGENT.id,
        LOGO_URL: EDITED_AGENT.LOGO_URL,
        LOGO_DARK: EDITED_AGENT.LOGO_DARK,
        SUBTITLE: EDITED_AGENT.SUBTITLE,
        NAME: EDITED_AGENT.NAME,
        EMAIL: EDITED_AGENT.EMAIL,
        PHONE: EDITED_AGENT.PHONE,
        WEBSITE: EDITED_AGENT.WEBSITE || undefined,
        INSTAGRAM: EDITED_AGENT.INSTAGRAM || undefined,
        BROKERAGE_NAME: EDITED_AGENT.BROKERAGE_NAME,
        BROKERAGE_ADDRESS: EDITED_AGENT.BROKERAGE_ADDRESS,
        BROKERAGE_LOGO: EDITED_AGENT.BROKERAGE_LOGO,
      }));
    }
  }, [EDITED_AGENT]);

  return (
    <>
      <form className="contents" onSubmit={hook.handleSubmit}>
        <PageHeading>{ADMIN_AGENT_CONST.EDIT_HEADING}</PageHeading>
        <SectionHeading>{ADMIN_AGENT_CONST.SECTIONS.AGENT_INFO}</SectionHeading>
        <div className="col-span-full grid grid-cols-1 gap-4 px-10">
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
              hook.setTouchedFields((prev) =>
                new Set(prev).add(
                  ADMIN_AGENT_CONST.FORM.AGENT.LOGO_DARK.HTML_FOR,
                ),
              );
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
        <div className="col-span-full grid grid-cols-1 gap-4 px-10">
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

        <div className="col-span-full flex flex-row flex-wrap justify-end gap-5 border-t border-t-neutral-300 px-10 pt-10 pb-5">
          <Button
            onClick={() => {
              history.back();
            }}
          >
            {ADMIN_AGENT_CONST.BUTTONS.CANCEL}
          </Button>
          <Button
            type="submit"
            additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
            disabled={hook.touchedFields.size === 0}
          >
            {hook.isSubmitting && (
              <CircleNotchIcon className="animate-spin" size={20} />
            )}
            {ADMIN_AGENT_CONST.BUTTONS.UPDATE}
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
          <Button
            onClick={() => {
              hook.setShowModal(false);
              history.back();
            }}
            additionalClasses="!text-neutral-50 col-span-full !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
          >
            {ADMIN_AGENT_CONST.MODAL.BUTTONS.CLOSE}
          </Button>
        </div>
      </StatusModal>
    </>
  );
};
