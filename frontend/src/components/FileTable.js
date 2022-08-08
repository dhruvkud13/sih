import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "../data";

function FileTable() {
  const tableData = {
    columns,
    data,
  };

  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <div className="m-3">
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </div>
      </DataTableExtensions>
    </div>
  );
}

export default FileTable;
