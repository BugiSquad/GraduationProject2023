import React, {useState} from 'react';
import './styled/CheckBox.css';
import {Typography} from '@mui/material';
import {Gender} from '../types/MemberDto';

interface GenderFilterProps {
    selectedGender: Gender[];
    setSelectedGender: React.Dispatch<React.SetStateAction<Gender[]>>;
}

export const GenderFilter: React.FC<GenderFilterProps> = (props) => {
    const [checked, setChecked] = useState<boolean>(props.selectedGender.length === 0);

    const handleGenderCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;

        if (value === Gender.NONE) {
            if (checked) {
                props.setSelectedGender([])
            }
            setChecked(!checked)
        } else {
            if (props.selectedGender.includes(value as Gender)) {
                let newSelected = props.selectedGender.filter(i => i !== value as Gender)
                props.setSelectedGender(newSelected)
                setChecked(newSelected.length === 0)
            } else {
                props.setSelectedGender([...props.selectedGender, value as Gender])
                setChecked(false)
            }
        }
    };

    return (
        <><Typography fontWeight={'bold'}>🔍성별을 골라주세요!</Typography>
            <div className="check-box">
                <label>
                    <input
                        type="checkbox"
                        value={Gender.MALE}
                        checked={props.selectedGender.includes(Gender.MALE)}
                        onChange={handleGenderCheckboxChange}/>
                    남자
                </label>
                <label>
                    <input
                        type="checkbox"
                        value={Gender.FEMALE}
                        checked={props.selectedGender.includes(Gender.FEMALE)}
                        onChange={handleGenderCheckboxChange}/>
                    여자
                </label>

                <label>
                    <input
                        type="checkbox"
                        value={Gender.NONE}
                        checked={checked}
                        onChange={handleGenderCheckboxChange}/>
                    상관없음
                </label>
            </div>
        </>
    );
};
