"use client";
import {
  CircleNotchIcon,
  DotsThreeIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { Button, Input, Dropdown, Table, PageHeading } from "@/app/components";
import { AGENTS_TABLE_CONST } from "./const";
import { useAgentsTable } from "./useAgentsTable";

export const AgentsTable = () => {
  const hook = useAgentsTable();

  const filteredOptions = hook.existingAgents.filter((agent) =>
    agent.NAME?.toLowerCase().includes(hook.inputValue.toLowerCase()),
  );

  return (
    <>
      <PageHeading>{AGENTS_TABLE_CONST.HEADING}</PageHeading>
      <div className="col-span-full flex flex-row items-end justify-between gap-5 px-5">
        <Input
          type="search"
          placeholder={AGENTS_TABLE_CONST.INPUTS.SEARCH}
          htmlFor={AGENTS_TABLE_CONST.INPUTS.HTML_FOR}
          onChange={(event) => {
            hook.setInputValue(event.target.value);
          }}
        />
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
        tableCount={filteredOptions.length}
        showingAmountFrom={hook.showingAmount.from}
        showingAmountTo={hook.showingAmount.to}
        setShowingAmount={hook.setShowingAmount}
      >
        {hook.loading ? (
          <tr className="relative h-15 w-full border-b border-neutral-200 align-middle text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100">
            <td
              className="w-full text-center"
              colSpan={AGENTS_TABLE_CONST.TABLE.COLUMNS.TITLES.length + 1}
            >
              <CircleNotchIcon
                className="absolute left-1/2 -translate-1/2 animate-spin"
                size={20}
              />
            </td>
          </tr>
        ) : (
          <>
            {filteredOptions.length ? (
              <>
                {filteredOptions
                  .slice(hook.showingAmount.from, hook.showingAmount.to)
                  .map((agent, index) => (
                    <tr
                      key={index}
                      className="h-15 border-b border-neutral-200 text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100"
                    >
                      <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
                        {agent.NAME}
                      </td>
                      <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
                        {agent.BROKERAGE_NAME}
                      </td>
                      <td className="px-4 py-2">
                        <span className="flex flex-row items-center justify-between gap-5 text-nowrap">
                          {agent.SUBTITLE}
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
                                label:
                                  AGENTS_TABLE_CONST.DROPDOWNS.MANAGE.DELETE,
                                onClick: () => {},
                              },
                            ]}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
              </>
            ) : (
              <tr className="h-15 w-full border-b border-neutral-200 align-middle text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100">
                <td
                  className="text-center text-neutral-600"
                  colSpan={AGENTS_TABLE_CONST.TABLE.COLUMNS.TITLES.length + 1}
                >
                  {AGENTS_TABLE_CONST.TABLE.NO_AGENTS}
                </td>
              </tr>
            )}
          </>
        )}
      </Table>
    </>
  );
};
