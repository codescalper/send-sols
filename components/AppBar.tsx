import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src="/solanaLogo.png" alt="Solana logo" height={30} width={200} />
            <span>Send some SOLs</span>
            <WalletMultiButton />
        </div>
    )
}