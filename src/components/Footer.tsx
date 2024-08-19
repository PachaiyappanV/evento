import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="mt-auto flex items-center justify-between h-16 border-t
     border-white/10 px-3 sm:px-9 text-xs text-white/25"
    >
      <small className="text-xs">
        &copy; 2050 Pachaiyappan. All rights reserved
      </small>
      <ul className="flex  gap-x-3 sm:gap-x-8">
        <li>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </li>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
