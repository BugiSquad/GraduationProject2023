import React, { useState } from 'react';
import './styled/CheckBox.css';
import { Typography } from '@mui/material';

export const GenderFilter: React.FC = () => {
    const [selectedGender, setSelectedGender] = useState<string>('');

  const handleGenderCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (value === '상관없음' && checked) {
      setSelectedGender('');
    } else if (checked) {
      setSelectedGender(value);
    } else {
      setSelectedGender('');
    }
  };

  return (
    <><Typography fontWeight={'bold'}>🔍성별을 골라주세요!</Typography><div className="check-box">
          <label>
              <input
                  type="checkbox"
                  value="남자"
                  checked={selectedGender.includes('남자')}
                  onChange={handleGenderCheckboxChange} />
              남자
          </label>
          <label>
              <input
                  type="checkbox"
                  value="여자"
                  checked={selectedGender.includes('여자')}
                  onChange={handleGenderCheckboxChange} />
              여자
          </label>
          
          <label>
              <input
                  type="checkbox"
                  value="상관없음"
                  checked={selectedGender.length === 0 || selectedGender.includes('상관없음')}
                  onChange={handleGenderCheckboxChange} />
              상관없음
          </label>
      </div></>
  );
};
