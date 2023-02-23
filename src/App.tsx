import React from 'react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { Build } from './interfaces/Build'
import Table from './components/Table'

const arr: Build[] = [
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 1,
        status: 'Success',
        userName: 'brave-elephant',
        date: '2023-02-11T07:49:41.010Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 2,
        status: 'Success',
        userName: 'happy-monkey',
        date: '2023-02-11T16:50:55.973Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 3,
        status: 'Error',
        userName: 'happy-elephant',
        date: '2023-02-14T06:22:45.597Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 4,
        status: 'Success',
        userName: 'happy-koala',
        date: '2023-02-17T06:00:39.664Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 5,
        status: 'Success',
        userName: 'silly-penguin',
        date: '2023-02-15T01:05:08.983Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 6,
        status: 'Success',
        userName: 'happy-giraffe',
        date: '2023-02-19T13:43:40.312Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 7,
        status: 'Success',
        userName: 'shy-monkey',
        date: '2023-02-18T05:38:20.069Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 8,
        status: 'Success',
        userName: 'shy-giraffe',
        date: '2023-02-11T20:43:06.423Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 9,
        status: 'Success',
        userName: 'shy-elephant',
        date: '2023-02-16T13:20:55.392Z',
    },
    {
        buildName: 'feature/create-new-text-ellipsis-component-TC2018.02',
        buildNumber: 10,
        status: 'Success',
        userName: 'shy-giraffe',
        date: '2023-02-14T11:08:47.029Z',
    },
]

const rowData: Build[] = []
for (let i = 0; i < 2000; i++) {
    rowData.push(arr[Math.floor(Math.random() * 10)])
}
const App: () => JSX.Element = () => {
    return <Table rowData={rowData}></Table>
}
export default App
