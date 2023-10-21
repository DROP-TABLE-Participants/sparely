import styled from 'styled-components';

interface PaymentMethodProps {
  src: string;
}


 

const PaymentWrapper = styled.div`
width: 6.51669rem;
height: 4.34444rem;
background: #D8E3F3;
border: 1px solid rgba(8, 7, 48, 0.21);;

border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 12px 12px 0px;
padding: 6px 6px 6px 10px;
`;

const PaymentImage = styled.img<PaymentMethodProps>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${props => props.src};
  align-items: center;
`;

export const PaymentContainerMethod: React.FC<PaymentMethodProps> = ({ src }) => (
  <PaymentWrapper>
    <PaymentImage src={src} alt="Payment Method" />
  </PaymentWrapper>
);