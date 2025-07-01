export type TablePropTypes = {
  columns: {
    title: string[];
    width: string[];
  }[]
  children: React.ReactNode;
  tableName: string;
  tableCount: number;
  showingAmountFrom: number;
  showingAmountTo: number;
  setShowingAmount: React.Dispatch<React.SetStateAction<{ from: number; to: number }>>
}