export default function SideBarRight(){
    return(
    <>
    <div className="w-2 flex flex-col justify-center items-center p-5">
    <header className="w-1 p-3 flex flex-col">
    <h1 className="text-2xl"> Sign in</h1>
    <p> Sign in to your account</p>
    <span className="flex">
    <button>Sign in with Google</button>
    <button>Sign in with Apple</button>
    </span>
    </header>
    <div className="form">
    <form>
    <label>Enter email</label>
    <input className="border border-blue-300" type="text"></input>
    <label>Enter password </label>
    <input className="border border-blue-300" type="password"></input>
    </form>
    </div>
    </div>
    </>
    )
  }
