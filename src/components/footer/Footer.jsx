import { Link } from "react-router-dom";
import { Logo } from "../index.js";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/95 py-14">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex items-center text-slate-300 transition duration-300 hover:text-white">
                  <Logo width="100px" />
                </div>

                <p className="max-w-md text-sm leading-7 text-slate-400">
                  Discover thoughtful blogs, practical tutorials, and inspiring
                  content designed to help readers learn, grow, and stay updated
                  with modern ideas.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-500">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="h-full">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <div className="h-full">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Support
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legals */}
          <div className="lg:col-span-3">
            <div className="h-full">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Legals
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
