import { NavLink } from 'react-router-dom';
import { EmptyWrapper } from './Empty.styled';
import pandaImg from 'images/404.png';

export const Empty = () => {
  return (
    <EmptyWrapper>
      <div>
        <img src={pandaImg} width="264" alt="404" />
      </div>
      <h1>404 - PAGE NOT FOUND</h1>
      <p>
        The page you are looking for might have been removed had its name
        changed or it is temporarily unavailable
      </p>
      <NavLink to="/" end>
        Go to home page
      </NavLink>
    </EmptyWrapper>
  );
};
