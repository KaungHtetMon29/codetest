async function Fetcher(e) {
  try {
    const response = await fetch(e)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log(data)
    return data
    // Data fetching completed, set isLoading to false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    // Data fetching completed with an error, set isLoading to false
  }
}
export default Fetcher
