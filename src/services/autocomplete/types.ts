export enum ParamType {
  NUMERIC,
  STRING,
  FEATURE
};

export type Param = {
  paramType: Param;
  value: string;
  representation: () => string;
};

export type Feature = {
  tableId: number;
  columnId: number;
  tableName: string;
  columnName: string;
};