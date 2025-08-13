"use client"

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react' 
import {OrderContext} from '@/providers/order'

export function Modalorder() {
    const {onRequestClose} = use(OrderContext)
   
    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent} onClick={onRequestClose}>

                {/* Botão de fechar separado */}
                <button className={styles.dialogBack}>
                    <X size={40} color="#ff3f4b" />
                </button>

                <article className={styles.container}>
                    <h2>Detalhes do pedido</h2>

                    <span className={styles.table}>
                        mesa <b>36</b>
                    </span>

                    {/* Produto */}
                    <div className={styles.item}>
                        <span>1 - <b>Pizza frango</b></span>
                        <span className={styles.description}>Pizza de frango com catupiry</span>
                    </div>

                    {/* Produto */}
                    <div className={styles.item}>
                        <span>1 - <b>Pizza calabresa</b></span>
                        <span className={styles.description}>Pizza de calabresa com cebola</span>
                    </div>

                    <button className={styles.buttonOrder}>
                        Concluir pedido
                    </button>
                </article>

            </section>
        </dialog>
    )
}
