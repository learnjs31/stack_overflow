import Link from "next/link";
import styles from "./projects.module.css";
const page = () => {
  return (
    <div>
      <main>
        <h1>Project List</h1>
        <h3>
          <Link href="/">Back</Link>
        </h3>
        <ul className={styles.links}>
          <Link href="/projects/jobit">
            <li>Jobit</li>
          </Link>
          <Link href="/projects/carrent">
            <li>Car rent</li>
          </Link>
          <Link href="/projects/hipnode">
            <li>Hip Node☎️</li>
          </Link>
        </ul>
      </main>
    </div>
  );
};

export default page;
