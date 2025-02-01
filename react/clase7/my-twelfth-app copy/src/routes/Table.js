import React, { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>trabajo</th>
                <th>Eliminar</th>
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
                <td><button onClick={() => props.removePeople(index)}>Eliminar</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { peopleData, removePeople, title } = this.props;
                return (
            <>
                {title}
                <table>
                    <TableHeader />
                    <TableBody peopleData={peopleData} removePeople={removePeople}/>
                </table>
            </>
        );
    }
}
export default Table
