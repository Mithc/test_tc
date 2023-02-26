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
        const onResize = () => {
            if (gridApi) {
                gridApi.sizeColumnsToFit()
            }
        }
        onResize()

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
            enableCellTextSelection: true,
            resizable: true,
        },
        { field: 'buildNumber', resizable: true },
        { field: 'status', resizable: true },
        {
            field: 'userName',
            cellRenderer: TextEllipsisWrapper,
            cellRendererParams: {
                tailLength: 2,
                className: 'red',
            },
            resizable: true,
        },
        { field: 'date', resizable: true },
    ]

    return (
        <div
            className="ag-theme-alpine"
            style={{ height: 1000, width: '100%' }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                onGridReady={onGridReady}
                defaultColDef={{ resizable: true }}
                enableCellTextSelection={true}
            ></AgGridReact>
        </div>
    )
}

export default Table
