import React, {CSSProperties, ReactNode, useMemo, useState} from 'react'
import './index.scss'

interface IColorSetting {
  primary?: string
  border?: string
  warning?: string
  font: string
}

type TBackground = string | ReactNode

interface IResponsiveBackgroundSet {
  x1: TBackground
  x2?: TBackground
  x3?: TBackground
  sizes?: string
}

interface ICreditCardProps {
  colorSetting: IColorSetting
  backgroundSet: {
    front: IResponsiveBackgroundSet
    back?: IResponsiveBackgroundSet
  }
  width?: string
  height?: string
  setData?: React.Dispatch<React.SetStateAction<ICreditCardData>>
  style?: CSSProperties
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

export default function Component(props: ICreditCardProps) {
  const [status, setStatus] = useState<'front' | 'back'>('front')
  const [data, setData] = useState<ICreditCardData>({
    cardNumber1: '1111',
    cardNumber2: '2222',
    cardNumber3: '3333',
    cardNumber4: '4444',
    expireMonth: '01',
    expireYear: '25',
    familyName: 'RAIDEN',
    givenName: 'EI',
    cvs: '888'
  })
  const evolveData = (key: keyof ICreditCardData, newValue: string)  =>  setData(prev => ({
    ...prev,
    [key]: newValue
  }))
  const getSrc = (src: TBackground, hasNext = true) => {
    if (typeof src === 'string') {
      return `${src}${hasNext ? ',\n ' : ''}`
    }
    return ''
  }
  const { front } = props.backgroundSet
  return (
    <div style={{
      color: props.colorSetting.font,
    }} className={`credit-card-wrapper ${status}`}>
      <div className="credit-card-front">
        <div className="credit-card-background">
          {
            typeof front.x1 === "string"
              ? <img
                  srcSet={`${getSrc(front.x1, front.x2 !== undefined)}${getSrc(front.x2, front.x3  !== undefined)}${getSrc(front.x3, false)}`}
                  sizes={front.sizes || ''}
              /> : (front.x3 || front.x2 || front.x1)
          }
        </div>
        <div className="credit-card-information">
          <div className="credit-card-number">
            <div className="card-number__1">
              <CardInput
                validRule={validCheckMap.card_number_input}
                colorSetting={props.colorSetting}
                value={data.cardNumber1}
                onChange={e => evolveData('cardNumber1', e.target.value)}/>
            </div>
            <div className="card-number__2">
              <CardInput
                colorSetting={props.colorSetting}
                value={data.cardNumber2}
                onChange={e => evolveData('cardNumber2', e.target.value)}/>
            </div>
            <div className="card-number__3">
              <CardInput
                colorSetting={props.colorSetting}
                type="password"
                value={data.cardNumber3}
                onChange={e => evolveData('cardNumber3', e.target.value)}/>
            </div>
            <div className="card-number__4">
              <CardInput
                colorSetting={props.colorSetting}
                type="password"
                value={data.cardNumber4}
                onChange={e => evolveData('cardNumber4', e.target.value)}/>
            </div>
          </div>
          <div className="credit-card-expire">
            <div className="credit-card-expire__label">MONTH/YEAR</div>
            <div className="credit-card-expire__month">
              <CardInput
                colorSetting={props.colorSetting}
                value={data.expireMonth}
                onChange={e => evolveData('expireMonth', e.target.value)}/>
            </div>
            /
            <div className="credit-card-expire__year">
              <CardInput
                colorSetting={props.colorSetting}
                value={data.expireYear}
                onChange={e => evolveData('expireYear', e.target.value)}/>
            </div>
          </div>
          <div className="credit-card-name">
            <div className="credit-card-name__family-name">
              <CardInput
                colorSetting={props.colorSetting}
                value={data.familyName}
                onChange={e => evolveData('familyName', e.target.value)}/>
            </div>
            <div className="credit-card-name__given-name">
              <CardInput
                colorSetting={props.colorSetting}
                value={data.givenName}
                onChange={e => evolveData('givenName', e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <div className="credit-card-back">
        <div className="credit-card__magnetic-stripe"></div>
        <div className="credit-card__cvs-area">
          <div className="credit-card__cvs-area__text">
            <CardInput
              colorSetting={props.colorSetting}
              value={data.cvs}
              onChange={e => evolveData('cvs', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
interface ICardInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  validRule?: (value: string) => boolean
  colorSetting: IColorSetting
}

//todo :valid css
//https://developer.mozilla.org/en-US/docs/Web/CSS/:valid
function CardInput(props: ICardInputProps) {
  const valid = props.validRule
    ? props.validRule(props.value as string) ? 'valid' : 'invalid'
    : undefined
  return <input
    className={valid}
    {...props}
    style={{
      color: props.colorSetting.font
    }}
    required
  />
}

const onlyNumberRex = /^\d+$/
const onlyENRex = /^[A-Z]+$/

const validCheckMap = {
  card_number_input: (value: string) => {
    if (value.length === 4 && onlyNumberRex.test(value)) {
      return true
    }
    return false
  },
  csv: (value: string) => {
    if (value.length === 3 && onlyNumberRex.test(value)) {
      return true
    }
    return false
  },
  month: (value: string) => {
    if (value.length === 2 && onlyNumberRex.test(value)) {
      if (parseInt(value) && parseInt(value) < 13) {
        return true
      }
    }
    return false
  },
  year: (value: string) => {
    if (value.length === 2 && onlyNumberRex.test(value)) {
      return true
    }
    return false
  },
  name: (value: string) => {
    if (onlyENRex.test(value)) {
      return true
    }
    return false
  }
}