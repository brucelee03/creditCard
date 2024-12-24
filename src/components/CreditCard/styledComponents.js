import styled from 'styled-components'

export const MainSection = styled.div`
  display: flex;

  @media (max-width: 577px) {
    flex-direction: column;
  }
`

export const CreditCardSection = styled.div`
  width: 50%;
  background-color: #3b4b69;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 14px;

  @media (max-width: 577px) {
    width: 100%;
    height: 50vh;
  }
`

export const Heading = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const HorizontalLine = styled.hr`
  border-color: #ffd773;
  width: 190px;
  border-width: 2px;
`

export const CardImg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 100%;
  height: 298px;
  border-radius: 20px;
  padding: 54px 38px 30px;
  display: flex;
  flex-direction: column;
  margin-top: 110px;

  @media (max-width: 577px) {
    margin-top: 45px;
  }
`

export const NumberCard = styled.div`
  height: 120px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 44px;
  font-weight: 600;
  margin: 30px 0 40px 0;
`

export const CardNameLabel = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 0;
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  margin-top: 11px;
`

export const PaymentMethod = styled(CreditCardSection)`
  background-color: #ffffff;
  justify-content: center;
`

export const PaymentCard = styled.div`
  width: 90%;
  box-shadow: 2px 2px 8px #475569;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 38px;
  height: 268px;
  border-radius: 14px;
`

export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-size: 23px;
  margin: 0px 0px 38px;
`

export const PaymentInput = styled.input`
  width: 100%;
  background-color: #ffffff;
  height: 41px;
  margin-bottom: 19px;
  border-width: 1px;
  border-color: #c3cad9;
  border-radius: 3px;
  padding: 10px 13px;
  color: #475569;
  outline: none;
  font-size: 17px;
  font-weight: 500;
`
