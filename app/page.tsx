import Link from "next/link";
import "../styles/globals.css";
export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href='/articles'>navigate to articles</Link>

      <form>
        <label>Name:</label>
        <br />
        <input type='text' id='name' name='name' />
        <br />
        <label>email:</label>
        <br />
        <input type='email' id='email' name='email' />
        <br />
        <label>message:</label>
        <br />
        <input type='text' id='message' name='message' />
        <br />
        <input
          type='checkbox'
          id='analytics'
          name='analytics'
          value='analytics'
        />
        <label> analytics</label>
        <br />
        <input type='checkbox' id='dev' name='dev' value='dev' />
        <label> dev</label>
        <br />
        <input type='checkbox' id='uxui' name='uxui' value='uxui' />
        <label> uxui</label>
        <br />
        <input type='checkbox' id='business' name='business' value='business' />
        <label> business</label>
        <br />
      </form>
      <button>submit</button>
      
    </div>
  );
}
