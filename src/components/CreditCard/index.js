import {useState} from 'react'

import {
  MainSection,
  CreditCardSection,
  Heading,
  HorizontalLine,
  CardImg,
  NumberCard,
  CardNumber,
  CardNameLabel,
  CardHolderName,
  PaymentMethod,
  PaymentCard,
  PaymentHeading,
  PaymentInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <MainSection>
      <CreditCardSection>
        <Heading>CREDIT CARD</Heading>
        <HorizontalLine />
        <CardImg data-testid="creditCard">
          <NumberCard>
            <CardNumber>{cardNumber}</CardNumber>
          </NumberCard>
          <div>
            <CardNameLabel>CARDHOLDER NAME</CardNameLabel>
            <CardHolderName>{cardHolderName.toUpperCase()}</CardHolderName>
          </div>
        </CardImg>
      </CreditCardSection>
      <PaymentMethod>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <PaymentInput
            type="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />
          <PaymentInput
            type="text"
            value={cardHolderName}
            onChange={onChangeCardHolderName}
            placeholder="Cardholder Name"
          />
        </PaymentCard>
      </PaymentMethod>
    </MainSection>
  )
}

export default CreditCard
