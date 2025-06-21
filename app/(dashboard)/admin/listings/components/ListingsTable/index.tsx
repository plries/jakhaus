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
import { LISTINGS_TABLE_CONST, LISTINGS_TABLE_MOCK } from "./const";

export const ListingsTable = () => {
  return (
    <>
      <PageHeading>{LISTINGS_TABLE_CONST.HEADING}</PageHeading>
      <div className="col-span-full flex flex-row items-end justify-between px-5">
        <Input type="search" placeholder={LISTINGS_TABLE_CONST.INPUTS.SEARCH} />
        <Button
          additionalClasses="!text-neutral-50 !bg-neutral-950 !hover:bg-neutral-800 !border-neutral-900"
          href={LISTINGS_TABLE_CONST.BUTTONS.CREATE.HREF}
        >
          <PlusIcon size={20} weight="bold" />
          {LISTINGS_TABLE_CONST.BUTTONS.CREATE.TEXT}
        </Button>
      </div>
      <Table
        columns={[
          ...LISTINGS_TABLE_CONST.TABLE.COLUMNS.TITLES.map((title, index) => ({
            title: [title],
            width: [LISTINGS_TABLE_CONST.TABLE.COLUMNS.WIDTHS[index]],
          })),
        ]}
        tableName={LISTINGS_TABLE_CONST.TABLE.NAME}
        tableCount={LISTINGS_TABLE_MOCK.ROWS.length}
      >
        {LISTINGS_TABLE_MOCK.ROWS.map((listing, index) => (
          <tr
            key={index}
            className="h-15 border-b border-neutral-200 text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100"
          >
            <td className="flex h-16 w-16 min-w-16 items-center justify-center border-r border-neutral-200">
              <Checkbox />
            </td>
            <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
              {listing.ID}
            </td>
            <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
              {listing.LISTING_ADDRESS}
            </td>
            <td className="border-r border-neutral-200 px-4 py-2">
              {listing.CITY}
            </td>
            <td className="border-r border-neutral-200 px-4 py-2">
              <span
                className={`rounded-full border px-3 py-1 shadow-xs ${listing.ACTIVE ? "border-sky-950/10 bg-sky-50 text-sky-700" : "border-red-950/10 bg-red-50 text-red-700"}`}
              >
                {listing.ACTIVE ? "Active" : "Deactivated"}
              </span>
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
                    name: LISTINGS_TABLE_CONST.BUTTONS.MANAGE,
                    icon: <DotsThreeIcon size={24} weight="bold" />,
                    additionalClasses:
                      "bg-transparent hover:!bg-neutral-950/5 !rounded-xl !border-0 !shadow-none",
                  }}
                  options={[
                    {
                      label: LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.EDIT,
                      onClick: () => {},
                    },
                    {
                      label: LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.VIEW,
                      href: `/listings/${listing.ID}`,
                    },
                    {
                      label: LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.COPY,
                      onClick: () => {
                        navigator.clipboard.writeText(
                          window.location.origin + `/listings/${listing.ID}`,
                        );
                      },
                    },
                    {
                      label: listing.ACTIVE
                        ? LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.DEACTIVATE
                        : LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.REACTIVATE,
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
