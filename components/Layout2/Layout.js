import Head from "next/head";
import Navbar from '../Header/Navbar';
import styles from './Layout.module.scss';

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>My portfolio</title>
                <meta name = "descripion" content = "Generated by create next app" />
            </Head>

            <Navbar/>

            <main className={styles.main}>{props.children}</main>
        </div>
    )
}
