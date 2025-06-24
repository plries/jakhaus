"use client";
import {
  SectionHeading,
  PageHeading,
  Input,
  UploadButton,
  Button,
  Checkbox,
} from "@/app/components";
import { CREATE_AGENT_CONST } from "./const";
import { useCreateAgent } from "../useCreateAgent";

export const CreateAgent = () => {
  const hook = useCreateAgent();

  return (
    <form className="contents">
      <PageHeading>{CREATE_AGENT_CONST.HEADING}</PageHeading>
      <SectionHeading>{CREATE_AGENT_CONST.SECTIONS.AGENT_INFO}</SectionHeading>
      <div className="col-span-full grid grid-cols-1 gap-4 px-10">
        <UploadButton
          label={CREATE_AGENT_CONST.FORM.AGENT.LOGO.LABEL}
          text={CREATE_AGENT_CONST.FORM.AGENT.LOGO.TEXT}
          htmlFor={CREATE_AGENT_CONST.FORM.AGENT.LOGO.HTML_FOR}
          onClear={() => hook.setAgentLogo(null)}
          onChange={(name) => hook.setAgentLogo(name)}
          isDarkLogo={hook.darkLogo}
          required
        />
        {hook.agentLogo && (
          <>
            <Checkbox
              label={CREATE_AGENT_CONST.FORM.AGENT.LOGO_DARK.LABEL}
              htmlFor={CREATE_AGENT_CONST.FORM.AGENT.LOGO_DARK.HTML_FOR}
              onChange={(event) => {
                hook.setDarkLogo(event.target.checked);
              }}
            />
            <p className="-mt-2 !text-sm text-neutral-700">
              {CREATE_AGENT_CONST.FORM.AGENT.LOGO_DARK.DESCRIPTION}
            </p>
          </>
        )}
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.NAME.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.NAME.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.AGENT.NAME.HTML_FOR}
          required
        />
        <Input
          type="email"
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.HTML_FOR}
          required
        />
        <Input
          type="tel"
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.PHONE.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.PHONE.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.AGENT.PHONE.HTML_FOR}
          required
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.HTML_FOR}
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.HTML_FOR}
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
          required
        />
        <p className="-mt-2 !text-sm text-neutral-700">
          {CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.DESCRIPTION}
        </p>
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.BROKERAGE.TITLE.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.BROKERAGE.TITLE.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.BROKERAGE.TITLE.HTML_FOR}
          required
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.LABEL}
          htmlFor={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.HTML_FOR}
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
  );
};
