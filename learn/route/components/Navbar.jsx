import Link from 'next/link';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <p>Navbar</p>
                <ul className={styles.links}>
                    <Link href='/'>
                        <li>Home🏠</li>
                    </Link>
                    <Link href='/about'>
                        <li>About🐶</li>
                    </Link>
                    <Link href='/contact'>
                        <li>Contact☎️</li>
                    </Link>
                </ul>
            </nav>

        </header>
    );
}

export default Navbar

// Copied code down below to test and check from my handwritten code



// {
//     return (
//         <header>
//             <nav className={styles.nav}>
//                 <p>Next.js</p>
//                 <ul className={styles.links}>
//                     <Link href='/'>
//                         <li>Home 🏠 </li>
//                     </Link>
//                     <Link href='/about'>
//                         <li>About 🐶 </li>
//                     </Link>
//                     <Link href='/contact'>
//                         <li>Contact ☎️ </li>
//                     </Link>
//                 </ul>
//             </nav>
//         </header>
//     );
// };