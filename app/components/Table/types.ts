export type TablePropTypes = {
  columns: {
    title: string[];
    width: string[];
  }[]
  children: React.ReactNode;
  tableName: string
  tableCount: number
}