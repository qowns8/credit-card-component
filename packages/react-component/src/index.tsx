import React, {useState} from 'react'
import './index.scss'

interface ICreditCardProps {

}
interface ICreditCardData {
  cardNumber1: string
  cardNumber2: string
  cardNumber3: string
  cardNumber4: string
  expireMonth: string
  expireYear: string
  familyName: string,
  givenName: string,
  cvs: string
}

export default function Component({}) {
  const [status, setStatus] = useState<'front' | 'back'>('front')
  const [data, setData] = useState<ICreditCardData>({
    cardNumber1: '1111',
    cardNumber2: '2222',
    cardNumber3: '3333',
    cardNumber4: '4444',
    expireMonth: '01',
    expireYear: '25',
    familyName: 'RAIDEN',
    givenName: 'AI',
    cvs: '888'
  })
  const evolveData = (key: keyof ICreditCardData, newValue: string)  =>  setData(prev => ({
    ...prev,
    [key]: newValue
  }))
  return (
    <div className="credit-card-wrapper">
      <div className="credit-card-front">
        <div className="credit-card-number">
          <div className="card-number__1">
            <input
              value={data.cardNumber1}
              onChange={e => evolveData('cardNumber1', e.target.value)}/>
          </div>
          <div className="card-number__2">
            <input
              value={data.cardNumber2}
              onChange={e => evolveData('cardNumber2', e.target.value)}/>
          </div>
          <div className="card-number__3">
            <input
              type="password"
              value={data.cardNumber3}
              onChange={e => evolveData('cardNumber3', e.target.value)}/>
          </div>
          <div className="card-number__4">
            <input
              type="password"
              value={data.cardNumber4}
              onChange={e => evolveData('cardNumber4', e.target.value)}/>
          </div>
        </div>
        <div className="credit-card-expire">
          <div className="credit-card-expire__label">MONTH/YEAR</div>
          <div className="credit-card-expire__month">
            <input
              value={data.expireMonth}
              onChange={e => evolveData('expireMonth', e.target.value)}/>
          </div>
          /
          <div className="credit-card-expire__year">
            <input
              value={data.expireYear}
              onChange={e => evolveData('expireYear', e.target.value)}/>
          </div>
        </div>
        <div className="credit-card-name">
          <div className="credit-card-name__family-name">
            <input
              value={data.familyName}
              onChange={e => evolveData('familyName', e.target.value)}/>
          </div>
          <div className="credit-card-name__given-name">
            <input
              value={data.givenName}
              onChange={e => evolveData('givenName', e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="credit-card-back">
        <div className="credit-card__magnetic-stripe"></div>
        <div className="credit-card__cvs-area">
          <div className="credit-card__cvs-area__text"></div>
        </div>
      </div>
    </div>
  )
}
