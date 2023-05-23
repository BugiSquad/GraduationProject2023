import useAutocomplete, {AutocompleteGetTagProps} from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {styled} from '@mui/material/styles';
import {autocompleteClasses} from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';

export interface InterestOptionType {
  label: string;
  key: string;
}

const Interests = [
  {key: 'pbug', label: '배그'},
  {key: 'lol', label: '롤'},
  {key: 'celebrity', label: '연예인'},
  {key: 'coffee', label: '커피'},
  {key: 'dessert', label: '디저트'},
  {key: 'game', label: '게임'},
  {key: 'popSong', label: '팝송'},
  {key: 'kPop', label: 'KPOP'},
  {key: 'jPop', label: 'JPOP'},
  {key: 'drama', label: '드라마'},
  {key: 'movie', label: '영화'},
  {key: 'travel', label: '여행'},
  {key: 'study', label: '공부'},
  {key: 'hiking', label: '등산'},
  {key: 'book', label: '책'},
];


interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const {label, onDelete, ...other} = props;
  return (
      <div {...other}>
        <span>{label}</span>
        <CloseIcon fontSize='large' onClick={onDelete}/>
      </div>
  );
}

interface InterestFilterProps {
  selectedInterests: InterestOptionType[];
  setSelectedInterests: React.Dispatch<React.SetStateAction<InterestOptionType[]>>;
}

//TODO ~/types/Interests.tsx와 중복되는 부분 합치기
export const InterestFilter: React.FC<InterestFilterProps> = ({selectedInterests, setSelectedInterests}) => {

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
    setAnchorEl
  } = useAutocomplete({
    multiple: true,
    options: Interests,
    getOptionLabel: (option) => option.label,
    onChange: (event, newValue) => {
      setSelectedInterests(newValue);
    },
  });

  console.log({ selectedInterests });
  return (
    <Root>
      <div  {...getRootProps()} style={{width:"100%"}}>
        <Typography fontWeight={'bold'}>🔍관심사를 골라주세요! </Typography>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {selectedInterests.map((option: InterestOptionType, index: number) => (
              <StyledTag label={option.label}  {...getTagProps({index})} key={index}/>
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof Interests).map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.label}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      )  : null}
    </Root>

  );
}

const Root = styled('div')(
  ({ theme }) => `
  color: ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
  };
  font-size: 14px;
`,
);


const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
    };
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

