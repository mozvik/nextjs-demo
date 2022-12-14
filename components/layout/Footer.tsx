import classes from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        className={classes.link}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  );
}

export default Footer;
