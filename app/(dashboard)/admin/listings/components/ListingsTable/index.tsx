"use client";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CircleNotchIcon,
  DotsThreeIcon,
  NotePencilIcon,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import {
  Button,
  Input,
  Dropdown,
  Table,
  PageHeading,
  WarningModal,
} from "@/app/components";
import { LISTINGS_TABLE_CONST } from "./const";
import { useListingsTable } from "./useListingsTable";

export const ListingsTable = () => {
  const hook = useListingsTable();

  const filteredOptions = hook.existingListings.filter((listing) =>
    listing.CITY?.toLowerCase().includes(hook.inputValue.toLowerCase()),
  );

  return (
    <>
      <PageHeading>{LISTINGS_TABLE_CONST.HEADING}</PageHeading>
      <div className="col-span-full flex flex-row items-end justify-between gap-5 px-5">
        <Input
          type="search"
          placeholder={LISTINGS_TABLE_CONST.INPUTS.SEARCH}
          htmlFor={LISTINGS_TABLE_CONST.INPUTS.HTML_FOR}
          onChange={(event) => hook.setInputValue(event.target.value)}
        />
        <Button
          additionalClasses="!text-neutral-50 !bg-neutral-950 hover:!bg-neutral-800 !border-neutral-900"
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
        tableCount={filteredOptions.length}
        showingAmountFrom={hook.showingAmount.from}
        showingAmountTo={hook.showingAmount.to}
        setShowingAmount={hook.setShowingAmount}
      >
        {hook.loading ? (
          <tr className="relative h-15 w-full border-b border-neutral-200 align-middle text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100">
            <td
              className="w-full text-center"
              colSpan={LISTINGS_TABLE_CONST.TABLE.COLUMNS.TITLES.length + 1}
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
                {filteredOptions.map((listing, index) => (
                  <tr
                    key={index}
                    className="h-15 border-b border-neutral-200 text-neutral-600 last:border-b-0 hover:bg-neutral-100/50 has-checked:bg-slate-100"
                  >
                    <td className="border-r border-neutral-200 px-4 py-2 text-nowrap">
                      {listing.UNIT} {listing.STREET}, {listing.PROVINCE},{" "}
                      {listing.POSTAL_CODE}
                    </td>
                    <td className="border-r border-neutral-200 px-4 py-2">
                      {listing.CITY}
                    </td>
                    <td className="px-4 py-2">
                      <span className="flex flex-row items-center justify-between gap-5 text-nowrap">
                        {hook.existingAgents.map((agent) => {
                          if (agent.id === listing.agent_id) {
                            return agent.NAME;
                          }
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
                              icon: <NotePencilIcon />,
                              href: `/admin/listings/edit/${listing.id}`,
                            },
                            {
                              label: LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.VIEW,
                              icon: <ArrowUpRightIcon />,
                              href: `/listings/${listing.id}`,
                            },
                            {
                              label: LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.COPY,
                              onClick: () => {
                                navigator.clipboard.writeText(
                                  window.location.origin +
                                    `/listings/${listing.id}`,
                                );
                              },
                            },
                            {
                              label:
                                LISTINGS_TABLE_CONST.DROPDOWNS.MANAGE.DELETE,
                              icon: <TrashIcon />,
                              onClick: () => {
                                hook.toggleModal({ listing });
                              },
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
                  colSpan={LISTINGS_TABLE_CONST.TABLE.COLUMNS.TITLES.length + 1}
                >
                  {LISTINGS_TABLE_CONST.TABLE.NO_LISTINGS}
                </td>
              </tr>
            )}
          </>
        )}
      </Table>
      <WarningModal
        showModal={hook.showModal}
        toggleModal={() => {
          hook.toggleModal({ listing: null });
        }}
      >
        <div className="mt-5 mb-10 flex flex-col items-center">
          <p className="!text-2xl font-medium">
            {LISTINGS_TABLE_CONST.MODAL.HEADING}
          </p>
          <p className="text-center !text-base text-neutral-600">
            {LISTINGS_TABLE_CONST.MODAL.DESCRIPTION}
            <span className="font-medium">
              {hook.selectedListing?.UNIT} {hook.selectedListing?.STREET},{" "}
              {hook.selectedListing?.PROVINCE},{" "}
              {hook.selectedListing?.POSTAL_CODE}
            </span>
            .
            <br />
            {LISTINGS_TABLE_CONST.MODAL.DESCRIPTION_2}
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-5">
          <Button
            onClick={() => {
              hook.toggleModal({ listing: null });
            }}
          >
            {LISTINGS_TABLE_CONST.MODAL.BUTTONS.CANCEL}
          </Button>
          <Button
            onClick={() => {
              hook.deleteListing(hook.selectedListing?.id!);
            }}
            additionalClasses="!text-neutral-50 !bg-red-600 hover:!bg-red-500 !border-red-800"
          >
            {hook.isDeleting && (
              <CircleNotchIcon className="animate-spin" size={20} />
            )}
            {hook.success && <CheckIcon size={20} />}
            {LISTINGS_TABLE_CONST.MODAL.BUTTONS.DELETE}
          </Button>
        </div>
      </WarningModal>
    </>
  );
};
