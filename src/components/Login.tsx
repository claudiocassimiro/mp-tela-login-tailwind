import Image from "next/image";
import Form from "./Form";

const Login = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex h-auto bg-black/60 rounded-3xl shadow-lg"
    >
      <div className="p-14">
        <div className="flex items-end gap-1 mb-14">
          <h1 className="text-3xl sm:text-5xl">Faça seu login</h1>
          <div className="w-3 h-3 mb-1.5 rounded-full bg-gradient bg-gradient-to-r p-0.5 from-rose-400 via-fuchsia-500 to-indigo-500" />
        </div>

        <Form />
      </div>
      <div className="hidden lg:flex relative">
        <Image
          src="/image.webp"
          alt="Mountain Image"
          width={506}
          height={654}
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />
      </div>
    </div>
  );
};

export default Login;
