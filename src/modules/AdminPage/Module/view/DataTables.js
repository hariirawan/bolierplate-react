//@flow

import React, { useState, useEffect } from "react";

type Props = {
  columns?: any,
  data?: any
};

function DataTables(props: Props) {
  const [data, setData] = useState([]);
  const [columns] = useState(props.columns);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div className="container">
      <table className="wrapper-table">
        <thead>
          <tr>
            {columns.map((data, key) => {
              return <th key={key}>{data.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((value, index) => (
              <React.Fragment key={index}>
                <tr>
                  {columns.map((data, keys) => {
                    if (data.hasOwnProperty("render")) {
                      return (
                        <td key={keys} width={data.width}>
                          {data.render(value, index)}
                        </td>
                      );
                    } else {
                      return <td key={keys}>{value[data.key]}</td>;
                    }
                  })}
                </tr>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                Data tidak tersedia
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTables;
