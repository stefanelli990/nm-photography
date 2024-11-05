import { Link } from "react-router-dom";

export default function Btn({ btnText, btnPath, btnStyle }) {
  return (
    <Link to={btnPath} className={btnStyle}>{ btnText }</Link>
  )
}