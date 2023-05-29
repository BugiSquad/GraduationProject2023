import React, {useState} from 'react';
import './styled/CheckBox.css';
import {Typography} from '@mui/material';

interface GradeFilterProps {
    selectedGrades: number[];
    setSelectedGrades: React.Dispatch<React.SetStateAction<number[]>>;
}

export const GradeFilter: React.FC<GradeFilterProps> = (props) => {
        const [checked, setChecked] = useState<boolean>(props.selectedGrades.length === 0)
        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {value, checked} = event.target;
            let updatedGrades: number[] = [];
            if (value === '상관없음') {
                if (!checked) {
                    updatedGrades = [];
                }
                setChecked(checked)
            } else {
                if (props.selectedGrades.includes(Number(value))) {
                    updatedGrades = props.selectedGrades.filter(i => i !== Number(value));
                    setChecked(updatedGrades.length === 0)
                } else {
                    updatedGrades = [...props.selectedGrades, Number(value)]
                    setChecked(false)
                }
            }
            props.setSelectedGrades(updatedGrades);
        }

        return (
            <><Typography fontWeight={'bold'}>🔍학년을 골라주세요!</Typography>
                <div className="check-box">
                    <label>
                        <input
                            type="checkbox"
                            value="1"
                            checked={props.selectedGrades.includes(1)}
                            onChange={handleCheckboxChange}/>
                        1학년
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="2"
                            checked={props.selectedGrades.includes(2)}
                            onChange={handleCheckboxChange}/>
                        2학년
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="3"
                            checked={props.selectedGrades.includes(3)}
                            onChange={handleCheckboxChange}/>
                        3학년
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="4"
                            checked={props.selectedGrades.includes(4)}
                            onChange={handleCheckboxChange}/>
                        4학년
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="상관없음"
                            checked={checked}
                            onChange={handleCheckboxChange}/>
                        상관없음
                    </label>
                </div>
            </>
        );
    }
;
