import { useRouter } from 'next/router'

export const Descobrir = () => {
  const router = useRouter()
  const city = router.query.city
  return (
    <h1>{city}</h1>
  )
}

export default Descobrir