import React, { useState } from 'react';
import './styled/CheckBox.css';
import { Typography } from '@mui/material';

export const GradeFilter: React.FC = () => {
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedGrades: string[];

    if (value === '상관없음') {
      if (checked) {
        updatedGrades = [];
      } else {
        updatedGrades = ['상관없음'];
      }
    } else {
      if (checked) {
        updatedGrades = [...selectedGrades, value];
      } else {
        updatedGrades = selectedGrades.filter((grade) => grade !== value);
      }
      // Remove '상관없음' from selectedGrades if it was previously selected
      updatedGrades = updatedGrades.filter((grade) => grade !== '상관없음');
    }

    setSelectedGrades(updatedGrades);
  };

  return (
    <><Typography fontWeight={'bold'}>🔍학년을 골라주세요!</Typography><div className="check-box">
          <label>
              <input
                  type="checkbox"
                  value="1학년"
                  checked={selectedGrades.includes('1학년')}
                  onChange={handleCheckboxChange} />
              1학년
          </label>
          <label>
              <input
                  type="checkbox"
                  value="2학년"
                  checked={selectedGrades.includes('2학년')}
                  onChange={handleCheckboxChange} />
              2학년
          </label>
          <label>
              <input
                  type="checkbox"
                  value="3학년"
                  checked={selectedGrades.includes('3학년')}
                  onChange={handleCheckboxChange} />
              3학년
          </label>
          <label>
              <input
                  type="checkbox"
                  value="4학년"
                  checked={selectedGrades.includes('4학년')}
                  onChange={handleCheckboxChange} />
              4학년
          </label>
          <label>
              <input
                  type="checkbox"
                  value="상관없음"
                  checked={selectedGrades.length === 0 || selectedGrades.includes('상관없음')}
                  onChange={handleCheckboxChange} />
              상관없음
          </label>
      </div></>
  );
};
