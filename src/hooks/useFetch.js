import { useEffect, useState } from "react"
import ErrorBoundary from "../components/ErrorBoundary"
export default function useFetch(url) {
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data.results)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setUsers({})
      }

    }

    fetchUsers()
  }, [url])



  return { users, isLoading }
}
