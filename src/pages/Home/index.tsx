import { UserProvider } from 'context/UserContext'
import { HomeTemplate } from 'template/Home'

export function HomePage() {
  return (
    <UserProvider>
      <HomeTemplate />
    </UserProvider>
  )
}
