import React, { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>trabajo</th>
            </tr>
        </thead>
    );
};

function TableBody(props) {
    const rows = props.peopleData.map((row, index) => {
    return (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
        </tr>
    );
    }
    );

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { peopleData } = this.props;
        
        // Verificamos si tenemos datos
        if (!peopleData) {
            return <p>Cargando datos...</p>;
        }

        return (
            <table>
                <TableHeader />
                <TableBody peopleData={peopleData} />
            </table>
        );
    }
}
export default Table
