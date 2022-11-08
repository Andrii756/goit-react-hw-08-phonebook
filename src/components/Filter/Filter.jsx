import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from '../../redux/contactsSlice';

import { Form, Label, Input, FindLabel } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Form>
      <Label>
        <FindLabel>Find contacts by name</FindLabel>
        <Input type="text" value={filter} onChange={onChange} />
      </Label>
    </Form>
  );
};
export default Filter;
