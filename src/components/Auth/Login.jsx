import { useState } from "react"

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    
    handleLogin(email, password)

    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 text-xl text-white outline-none font-medium bg-transparent rounded-full py-2 px-6 placeholder:text-gray-400"
            type="email"
            placeholder="enter email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className="border-2 border-emerald-600 text-xl text-white outline-none font-medium bg-transparent rounded-full py-2 px-6 mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="enter password"
          />

          <button className="text-xl text-white border-none outline-none bg-emerald-600 rounded-full font-semibold py-2 px-8 w-full mt-7 hover:bg-emerald-700">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
