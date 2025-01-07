import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface AIAgent {
    name: string;
    foundation: string;
    codeGen: string;
    debug: string;
    pricing: string;
    languages: string;
    ide: string;
    community: string;
    lastUpdated: string;
}

const AGGrid: React.FC = () => {
    const [rowData] = useState<AIAgent[]>([
        {
            name: 'Cursor',
            foundation: 'OpenAI-based',
            codeGen: 'Excellent',
            debug: 'Basic',
            pricing: 'Freemium',
            languages: 'Multiple',
            ide: 'VS Code-based',
            community: 'Growing',
            lastUpdated: '2024-03'
        },
        {
            name: 'Windsurf',
            foundation: 'Custom LLM',
            codeGen: 'Moderate',
            debug: 'Advanced',
            pricing: 'Subscription',
            languages: 'Multiple',
            ide: 'Custom IDE',
            community: 'New',
            lastUpdated: '2024-03'
        },
        {
            name: 'Devin',
            foundation: 'Anthropic',
            codeGen: 'Excellent',
            debug: 'Advanced',
            pricing: 'Enterprise',
            languages: 'Multiple',
            ide: 'Custom Environment',
            community: 'New',
            lastUpdated: '2024-03'
        }
    ]);

    const columnDefs = [
        {
            field: 'name',
            headerName: 'AI Assistant',
            sortable: true,
            filter: true,
            pinned: 'left'
        },
        {
            field: 'foundation',
            headerName: 'Model/Infrastructure',
            sortable: true,
            filter: true
        },
        {
            field: 'codeGen',
            headerName: 'Code Generation',
            sortable: true,
            filter: true
        },
        {
            field: 'debug',
            headerName: 'Debugging',
            sortable: true,
            filter: true
        },
        {
            field: 'pricing',
            headerName: 'Pricing',
            sortable: true,
            filter: true
        },
        {
            field: 'languages',
            headerName: 'Language Support',
            sortable: true,
            filter: true
        },
        {
            field: 'ide',
            headerName: 'IDE/Environment',
            sortable: true,
            filter: true
        },
        {
            field: 'community',
            headerName: 'Community',
            sortable: true,
            filter: true
        },
        {
            field: 'lastUpdated',
            headerName: 'Last Updated',
            sortable: true,
            filter: true
        }
    ];

    const defaultColDef = {
        flex: 1,
        minWidth: 150,
        resizable: true,
    };

    return (
        <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                enableCellTextSelection={true}
                pagination={true}
                paginationAutoPageSize={true}
            />
        </div>
    );
};

export default AGGrid; 