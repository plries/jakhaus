"use client";
import {
  SectionHeading,
  PageHeading,
  Input,
  UploadButton,
  Button,
  Checkbox,
  StatusModal,
} from "@/app/components";
import { CREATE_AGENT_CONST } from "./const";
import { useCreateAgent } from "./useCreateAgent";
import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react";

export const CreateAgent = () => {
  const hook = useCreateAgent();

  return (
    <>
      <form className="contents" onSubmit={hook.handleSubmit}>
        <PageHeading>{CREATE_AGENT_CONST.HEADING}</PageHeading>
        <SectionHeading>
          {CREATE_AGENT_CONST.SECTIONS.AGENT_INFO}
        </SectionHeading>
        <div className="col-span-full grid grid-cols-1 gap-4 px-10">
          <UploadButton
            label={CREATE_AGENT_CONST.FORM.AGENT.LOGO.LABEL}
            text={CREATE_AGENT_CONST.FORM.AGENT.LOGO.TEXT}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.LOGO.HTML_FOR}
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
            label={CREATE_AGENT_CONST.FORM.AGENT.LOGO_DARK.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.LOGO_DARK.HTML_FOR}
            value={hook.agent.LOGO_DARK}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                LOGO_DARK: event.target.checked,
              }));
            }}
          />
          <p className="-mt-2 !text-sm text-neutral-700">
            {CREATE_AGENT_CONST.FORM.AGENT.LOGO_DARK.DESCRIPTION}
          </p>
          <Input
            placeholder={CREATE_AGENT_CONST.FORM.AGENT.NAME.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.AGENT.NAME.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.NAME.HTML_FOR}
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
            placeholder={CREATE_AGENT_CONST.FORM.AGENT.SUBTITLE.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.AGENT.SUBTITLE.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.SUBTITLE.HTML_FOR}
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
            placeholder={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.HTML_FOR}
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
            placeholder={CREATE_AGENT_CONST.FORM.AGENT.PHONE.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.AGENT.PHONE.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.PHONE.HTML_FOR}
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
            placeholder={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.HTML_FOR}
            value={hook.agent.WEBSITE}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                WEBSITE: event.target.value,
              }));
            }}
          />
          <Input
            placeholder={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.HTML_FOR}
            value={hook.agent.INSTAGRAM}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                INSTAGRAM: event.target.value,
              }));
            }}
          />
        </div>

        <SectionHeading>
          {CREATE_AGENT_CONST.SECTIONS.BROKERAGE_INFO}
        </SectionHeading>
        <div className="col-span-full grid grid-cols-1 gap-4 px-10">
          <UploadButton
            label={CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.LABEL}
            text={CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.TEXT}
            htmlFor={CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.HTML_FOR}
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
          <p className="-mt-2 !text-sm text-neutral-700">
            {CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.DESCRIPTION}
          </p>
          <Input
            placeholder={CREATE_AGENT_CONST.FORM.BROKERAGE.NAME.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.BROKERAGE.NAME.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.BROKERAGE.NAME.HTML_FOR}
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
            placeholder={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.PLACEHOLDER}
            label={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.LABEL}
            htmlFor={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.HTML_FOR}
            value={hook.agent.BROKERAGE_ADDRESS}
            onChange={(event) => {
              hook.setAgent((prev) => ({
                ...prev,
                BROKERAGE_ADDRESS: event.target.value,
              }));
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
            {CREATE_AGENT_CONST.BUTTONS.CANCEL}
          </Button>
          <Button
            type="submit"
            additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
          >
            {CREATE_AGENT_CONST.BUTTONS.CREATE}
          </Button>
        </div>
      </form>
      <StatusModal showModal={hook.showModal} success={hook.success}>
        <div className="mt-5 mb-10 flex flex-col items-center">
          <p className="!text-2xl font-medium">
            {hook.success
              ? CREATE_AGENT_CONST.MODAL.SUCCESS.HEADING
              : CREATE_AGENT_CONST.MODAL.ERROR.HEADING}
          </p>
          <p className="text-center !text-base text-neutral-600">
            {hook.success
              ? CREATE_AGENT_CONST.MODAL.SUCCESS.DESCRIPTION
              : CREATE_AGENT_CONST.MODAL.ERROR.DESCRIPTION}
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
                {CREATE_AGENT_CONST.MODAL.BUTTONS.CLOSE}
              </Button>
              <Button
                onClick={() => {
                  window.location.reload();
                }}
                additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
              >
                {CREATE_AGENT_CONST.MODAL.BUTTONS.CREATE}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                hook.setShowModal(false);
              }}
              additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
            >
              {CREATE_AGENT_CONST.MODAL.BUTTONS.CLOSE}
            </Button>
          )}
        </div>
      </StatusModal>
    </>
  );
};
