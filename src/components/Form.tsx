import Link from "next/link";

const Form = () => {
  return (
    <form className="flex flex-col gap-12">
      <label
        className="flex flex-col gap-2 text-gray-400 text-sm"
        htmlFor="email"
      >
        Email
        <div className="flex max-w-sm bg-gradient-to-r p-0.5 rounded-xl from-rose-400 via-fuchsia-500 to-indigo-500">
          <input
            autoFocus
            type="email"
            id="email"
            autoComplete="off"
            className="w-full h-12 rounded-xl pl-5 bg-gray-800 outline-none p14 shadow shadow-purple-500 transition-shadow duration-500 hover:shadow-lg"
          />
        </div>
      </label>

      <label
        className="flex max-w-sm flex-col gap-2 text-gray-400 text-sm"
        htmlFor="password"
      >
        Senha
        <div className="flex max-w-sm bg-gradient-to-r p-0.5 rounded-xl from-rose-400 via-fuchsia-500 to-indigo-500">
          <input
            type="password"
            id="password"
            autoComplete="off"
            className="w-full h-12 rounded-xl pl-5 bg-gray-800 outline-none p14 shadow shadow-purple-500 transition-shadow duration-500 hover:shadow-lg"
          />
        </div>
      </label>

      <div className="flex max-w-sm justify-end">
        <Link
          title="Go to My LinkedIn Profile"
          href="https://www.linkedin.com/in/claudiocassimiro/"
          target="_blanck"
          className="text-sm text-gray-400 underline underline-offset-1"
        >
          Esqueci minha senha
        </Link>
      </div>

      <button className="max-w-sm h-12 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        Entrar
      </button>

      <div className="flex max-w-sm justify-center">
        <Link
          title="Go to My LinkedIn Profile"
          href="https://www.linkedin.com/in/claudiocassimiro/"
          target="_blanck"
          className="text-sm text-gray-400 underline underline-offset-1"
        >
          Ainda não tenho uma conta
        </Link>
      </div>
    </form>
  );
};

export default Form;
