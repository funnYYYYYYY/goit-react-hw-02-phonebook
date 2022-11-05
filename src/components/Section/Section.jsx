import { Title } from 'components/Form/Form.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div>{children}</div>
    </>
  );
};
