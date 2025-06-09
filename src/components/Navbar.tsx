import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/printforge-logo1.jpg";
import MobileLogo from "../../public/printforge-logomobile.svg";

export default function Navbar() {
    return (
        <div className="sm:px-8 mx-auto max-w-7xl">
          <nav className="flex items-center justify-between p-4">
            <div className="text-lg font-bold hidden sm:block">
              <Link href={"/"} aria-label={"PrintForge Home"}>
              <Image
                src={DesktopLogo}
                alt="PrintForge Logo"
                width={200}
                height={50}
                priority
                style={{ height: "auto" }}
              /></Link>
            </div>
            {/* mobile logo */}
            <div className="text-lg font-bold sm:hidden">
              <Link href={"/"} aria-label={"PrintForge Home"}>
              <Image
                src={MobileLogo}
                alt="PrintForge Logo"
                width={40}
                height={20}
                priority
                style={{ height: "auto" }}
              />
              </Link>
            </div>
            <ul className="flex space-x-6 text-sm font-medium">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/3d-models", label: "3D Models" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      aria-label={label}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
          </nav>
          </div>
    )
}