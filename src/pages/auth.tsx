import { issigned } from 'components/action'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import person from 'data.json'

function Auth() {
  const name = useRef('')
  const pw = useRef('')
  const { Pname, Ppw } = { ...person.person }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signed = useSelector((state: any) => state.signed)
  const onsubmit = (e: any) => {
    e.preventDefault
    dispatch(issigned(true))
    console.log(signed)
  }
  useEffect(() => {
    if (
      String(name.current.value) === Pname &&
      String(pw.current.value) === Ppw
    ) {
      dispatch(issigned(true))
    } else {
      dispatch(issigned(false))
    }
    signed === false ? navigate('/auth') : navigate('/')
    console.log(person.name)
  }, [signed])
  return (
    <div className="flex justify-center my-40">
      {/* <input placeholder="Name" className="py-8 rounded-xl pl-8" ref={name} />
      <input placeholder="Pw" className="py-8 rounded-xl pl-8" ref={pw} />
      <button
        onClick={onsubmit}
        type="submit "
        className="bg-white w-64 py-5 rounded-xl flex mx-auto text-center justify-center "
      >
        <p className="text-center">Submit</p>
      </button> */}
      <div className=" bg-blue-800 flex flex-col gap-8 px-12 py-8 rounded-xl w-96 z-50 ">
        <h1 className="text-center text-white">Login</h1>
        <input placeholder="name" className="px-4 py-2 rounded-xl" ref={name} />
        <input
          placeholder="password"
          className="px-4 py-2 rounded-xl"
          ref={pw}
        />
        <button
          className="bg-white w-3/5 mx-auto rounded-lg h-10"
          onClick={onsubmit}
        >
          submit
        </button>
      </div>
    </div>
  )
}
export default Auth
