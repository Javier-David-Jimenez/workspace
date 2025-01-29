import React, { Component } from "react";const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
            </tr>
        </thead>
    );
};
function TableBody() {
    return (
        <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>Doe</td>
            </tr>
            <tr>
                <td>Emily</td>
                <td>Smith</td>
            </tr>
        </tbody>
    );
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

// exportar
export default Table;