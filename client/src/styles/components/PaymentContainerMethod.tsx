import styled from 'styled-components';

interface PaymentMethodProps {
  src: string;
}


 

const PaymentWrapper = styled.div`
width: 6.51669rem;
height: 4.34444rem;
background: #D8E3F3;
border: 1px solid rgba(8, 7, 48, 0.21);;
box-sizing: border-box;
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0 1.33333rem;
margin-bottom: 1.33333rem;
margin-right: 1rem;
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