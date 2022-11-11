import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

type UserType = {
  children: ReactNode
}

type UserContextType = {
  uid: string
  setUid: Dispatch<SetStateAction<string>>
  displayName: string
  setDisplayName: Dispatch<SetStateAction<string>>
}

const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserType) {
  const [uid, setUid] = useState('')
  const [displayName, setDisplayName] = useState('')

  return (
    <UserContext.Provider value={{ uid, setUid, displayName, setDisplayName }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  return useContext(UserContext)
}
