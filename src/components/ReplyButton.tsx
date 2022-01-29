import styled from "styled-components";

interface IReplyBtn {
  text: string;
  BtnColor: string;
  onClick: () => void;
}

const Button = styled.button<{ BtnColor: string }>`
  width: 60%;
  height: 60px;
  background-color: ${(props) => props.BtnColor};
  border: 0;
  border-radius: 30px;
  font-size: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    font-size: 22px;
    color: white;
    transition: box-shadow 1s ease-in;
    transition: font-size 0.1s;
    transition: color 0.2s ease-in;
  }
`;

function ReplyButton({ text, onClick, BtnColor }: IReplyBtn) {
  return (
    <Button onClick={onClick} BtnColor={BtnColor}>
      {text}
    </Button>
  );
}

export default ReplyButton;
