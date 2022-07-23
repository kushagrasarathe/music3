import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <header>

      </header>
    </>
  );
}
