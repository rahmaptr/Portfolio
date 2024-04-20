import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-auto w-screen text-center p-4">
      <h6 className="w-full">Made with React, TypeScript, and ❤️ by <Link to="https://linkedin.com/in/rahmah-putri-azzahra" className="hover:underline">Rahma</Link></h6>
    </footer>
  )
}

export default Footer