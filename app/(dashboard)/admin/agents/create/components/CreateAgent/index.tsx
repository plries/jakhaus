"use client";
import {
  SectionHeading,
  PageHeading,
  Input,
  UploadButton,
  Button,
} from "@/app/components";
import { CREATE_AGENT_CONST } from "./const";

export const CreateAgent = () => {
  return (
    <form className="contents">
      <PageHeading>{CREATE_AGENT_CONST.HEADING}</PageHeading>
      <SectionHeading>
        {CREATE_AGENT_CONST.SECTIONS.BROKERAGE_INFO}
      </SectionHeading>
      <div className="col-span-full grid grid-cols-1 gap-4 px-10">
        <UploadButton
          label={CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.LABEL}
          text={CREATE_AGENT_CONST.FORM.BROKERAGE.LOGO.TEXT}
          required
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.BROKERAGE.ADDRESS.LABEL}
          required
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.BROKERAGE.TITLE.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.BROKERAGE.TITLE.LABEL}
          required
        />
      </div>
      <SectionHeading>{CREATE_AGENT_CONST.SECTIONS.AGENT_INFO}</SectionHeading>
      <div className="col-span-full grid grid-cols-1 gap-4 px-10">
        <UploadButton
          label={CREATE_AGENT_CONST.FORM.AGENT.LOGO.LABEL}
          text={CREATE_AGENT_CONST.FORM.AGENT.LOGO.TEXT}
          required
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.NAME.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.NAME.LABEL}
          required
        />
        <Input
          type="email"
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.EMAIL.LABEL}
          required
        />
        <Input
          type="tel"
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.PHONE.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.PHONE.LABEL}
          required
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.WEBSITE.LABEL}
        />
        <Input
          placeholder={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.PLACEHOLDER}
          label={CREATE_AGENT_CONST.FORM.AGENT.INSTAGRAM.LABEL}
        />
      </div>
      <div className="col-span-full flex flex-row justify-end gap-5 border-t border-t-neutral-300 px-10 pt-10 pb-5">
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
