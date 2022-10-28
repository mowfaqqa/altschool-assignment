import { useEffect, useState } from "react"
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
        return error
      }

    }

    fetchUsers()
  }, [url])



  return { users, isLoading }
}
