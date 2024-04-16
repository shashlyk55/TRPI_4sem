import React from "react";

const SudokuCell = (props: { value: number|'', onChange: (newValue: number | '') => void}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value ? parseInt(e.target.value, 10) : '');
    };

    return <input type="text" value={props.value || ''} onChange={handleChange} maxLength={1} style={{width: '15px'}}/>;
};

export default SudokuCell;