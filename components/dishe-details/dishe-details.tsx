import Styles from './dishe-details.module.css'
import { DisheDetailsProps } from './types'
import { IconDelivery, IconCategory, IconReviews } from '@/icons'

const IconType = {
  delivery: IconDelivery,
  category: IconCategory,
  reviews: IconReviews
}

export function DisheDetails({ type, subtitle, title }: DisheDetailsProps) {
  const Icon = IconType[type]
  return (
    <div className={Styles.detail}>
      <div className={Styles.icon}>
        <Icon />
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  )
}
