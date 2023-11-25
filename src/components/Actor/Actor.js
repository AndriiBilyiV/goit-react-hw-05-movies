import { Name, Wrapper } from './Actor.styled';

export const Actor = ({ data }) => {
  const { name, profile_path } = data;
  const defaultSrc =
    'https://miro.medium.com/v2/resize:fit:640/format:webp/1*W35QUSvGpcLuxPo3SRTH4w.png';
  return (
    <Wrapper>
      <img
        src={
          profile_path
            ? 'https://image.tmdb.org/t/p/w154' + profile_path
            : defaultSrc
        }
        alt={name}
        width="154"
        height="231"
      />
      <Name>{name}</Name>
    </Wrapper>
  );
};
