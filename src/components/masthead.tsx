import Image from "next/image";
import logo from "../../public/logo-white.png";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <Image
            src={logo}
            alt="logo"
            style={{
              width: "auto",
              height: "100%",
              opacity: "35%",
            }}
          />
        </div>
      </div>
    </header>
  );
}
