export const selectedTable = {
  type: '',
  fields: {},
  fieldIndex: 1,
  tableID: 0
};

export const initialTable = {
  type: '',
  fields: {
      1: {
      name: '',
      type: 'ID',
      primaryKey: false,
      autoIncrement: false,
      unique: false,
      defaultValue: '',
      required: false,
      multipleValues: false,
      relationSelected: false,
      relation: {
        tableIndex: -1,
        fieldIndex: -1,
        refType: ''
      },
      refBy: new Set(),
      queryable: true,
      tableNum: 0,
      fieldNum: 1,
    }
  },
  fieldIndex: 2,
  tableID: 0
};

export const initialField = {
  name: '',
  type: 'ID',
  primaryKey: false,
  autoIncrement: false,
  unique: false,
  defaultValue: '',
  required: false,
  multipleValues: false,
  relationSelected: false,
  relation: {
    tableIndex: -1,
    fieldIndex: -1,
    refType: ''
  },
  refBy: new Set(),
  queryable: true,
  tableNum: -1,
  fieldNum: -1,
};

export const tableIndex = 0;

export const tables = {};

//this will toggle the tab shown in the sandbox area
//potential tabs for MVP are code & schema, stretch would include GQL setup area
export const view = 'schema';

//this will toggle popups
//potential popups are welcome and export (select folder to save & success)
export const popUp = 'welcome';