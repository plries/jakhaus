"use client";
import { DotsThreeIcon, PlusIcon } from "@phosphor-icons/react";
import {
  Button,
  Checkbox,
  Input,
  Dropdown,
  Table,
  PageHeading,
} from "@/app/components";
import { AGENTS_TABLE_CONST, AGENTS_TABLE_MOCK } from "./const";

export const AgentsTable = () => {
  return (
    <>
      <PageHeading>{AGENTS_TABLE_CONST.HEADING}</PageHeading>
      <div className="col-span-full flex flex-row items-end justify-between px-5">
        <Input type="search" placeholder={AGENTS_TABLE_CONST.INPUTS.SEARCH} htmlFor={AGENTS_TABLE_CONST.INPUTS.HTML_FOR} />
        <Button
          additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
          href={AGENTS_TABLE_CONST.BUTTONS.CREATE.HREF}
        >
          <PlusIcon size={20} weight="bold" />
          {AGENTS_TABLE_CONST.BUTTONS.CREATE.TEXT}
        </Button>
      </div>
      <Table
        columns={[
          ...AGENTS_TABLE_CONST.TABLE.COLUMNS.TITLES.map((title, index) => ({
            title: [title],
            width: [AGENTS_TABLE_CONST.TABLE.COLUMNS.WIDTHS[index]],
          })),
        ]}
        tableName={AGENTS_TABLE_CONST.TABLE.NAME}
        tableCount={AGENTS_TABLE_MOCK.ROWS.length}
      >
        {AGENTS_TABLE_MOCK.ROWS.map((listing, index) => (
          <tr
            key={index}
            className="h-15 border-b border-neutral-200 text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100"
          >
            <td className="flex h-16 w-16 min-w-16 items-center justify-center border-r border-neutral-200">
              <Checkbox />
            </td>
            <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
              {listing.NAME}
            </td>
            <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
              {listing.BROKERAGE}
            </td>
            <td className="px-4 py-2">
              <span className="flex flex-row items-center justify-between gap-5">
                {new Date(listing.DATE_CREATED).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <Dropdown
                  button={{
                    name: AGENTS_TABLE_CONST.BUTTONS.MANAGE,
                    icon: <DotsThreeIcon size={24} weight="bold" />,
                    additionalClasses:
                      "bg-transparent hover:!bg-neutral-950/5 !rounded-xl !border-0 !shadow-none",
                  }}
                  options={[
                    {
                      label: AGENTS_TABLE_CONST.DROPDOWNS.MANAGE.EDIT,
                      onClick: () => {},
                    },
                    {
                      label: AGENTS_TABLE_CONST.DROPDOWNS.MANAGE.DELETE,
                      onClick: () => {},
                    },
                  ]}
                />
              </span>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};
