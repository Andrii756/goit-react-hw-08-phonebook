import { ErrorWrapper, Message } from './Error.styled';
import pandaImg from 'images/cat-sed.png';

export const Error = ({ children, addMessage = null }) => {
  let isStatus400 = false;

  if (children.includes('400')) {
    isStatus400 = true;
  } else {
    isStatus400 = false;
  }
  return (
    <ErrorWrapper>
      {isStatus400 ? (
        <div>
          <h1>Ups, something went wrong</h1>
          {addMessage && <Message>{addMessage}</Message>}
          <p>Erorr message:</p>
          <p>{children}</p>
        </div>
      ) : (
        <div>
          <h1>Ups, something went wrong</h1>
          <p>Please try again later</p>
          <p>Erorr message:</p>
          <p>{children}</p>
        </div>
      )}
      <div>
        <img src={pandaImg} width="200" alt="Sad panda" />
      </div>
    </ErrorWrapper>
  );
};
