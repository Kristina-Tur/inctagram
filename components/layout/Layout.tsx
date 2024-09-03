// @flow
import * as React from 'react';
import {PropsWithChildren, ReactElement} from 'react';
import {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/Navbar/Navbar";

type Props = {

};
export const Layout: NextPage<PropsWithChildren> = ({children}: Props) => {
    return (
    <main className={styles.main}>
        <Navbar/>
        {children}
    </main>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}