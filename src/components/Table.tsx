import { AgGridReact } from 'ag-grid-react'
import React, { useEffect, useState } from 'react'
import TextEllipsis from './TextEllipsis'
import { Build } from '../interfaces/Build'
import { ICellRendererParams } from 'ag-grid-community/dist/lib/rendering/cellRenderers/iCellRenderer'
import { ColumnApi, GridApi } from 'ag-grid-community'

interface CellRendererParams {
    tailLength: number
    className: string
}

const TextEllipsisWrapper: (
    cellData: ICellRendererParams<string> & CellRendererParams
) => JSX.Element = (
    cellData: ICellRendererParams<string> & CellRendererParams
) => {
    return (
        <TextEllipsis
            // eslint-disable-next-line react/no-children-prop
            children={cellData.value}
            tailLength={cellData.tailLength}
            className={cellData.className}
            title={cellData.value}
        ></TextEllipsis>
    )
}
const Table: React.FC<{ rowData: Build[] }> = ({ rowData }) => {
    const [gridApi, setGridApi] = useState<GridApi | null>(null)

    useEffect(() => {
        // Add a resize listener to the table container element
        const onResize = () => {
            if (gridApi) {
                gridApi.sizeColumnsToFit()
            }
        }
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [gridApi])

    const onGridReady = (params: { api: GridApi; columnApi: ColumnApi }) => {
        setGridApi(params.api)
    }

    const columnDefs = [
        {
            field: 'buildName',
            cellRenderer: TextEllipsisWrapper,
            cellRendererParams: {
                tailLength: 9,
                className: 'bold',
            },
            resizable: true,
        },
        { field: 'buildNumber', width: 200, resizable: true },
        { field: 'status', width: 200, resizable: true },
        {
            field: 'userName',
            cellRenderer: TextEllipsisWrapper,
            cellRendererParams: {
                tailLength: 2,
                className: 'red',
            },
            width: 200,
            resizable: true,
        },
        { field: 'date', width: 200, resizable: true },
    ]

    return (
        <div
            className="ag-theme-alpine"
            style={{ height: 1000, width: 'auto' }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                onGridReady={onGridReady}
                defaultColDef={{ resizable: true }}
            ></AgGridReact>
        </div>
    )
}

export default Table
