"use client"

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react' 
import {OrderContext} from '@/providers/order'
import {calculateTotalOrder} from '@/lib/helper'

export function Modalorder() {
    const {onRequestClose, order, finishOrder} = use(OrderContext)

    async function handleFinishOrder(){
       await finishOrder(order[0].order.id)
    }

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
                        mesa <b>{order[0].order.table}</b>
                    </span>

                    {/* Produto */}
                    <div className={styles.item}>
                        <span>1 - <b>Pizza frango</b></span>
                        <span className={styles.description}>Pizza de frango com catupiry</span>
                    </div>

                    {order.map(item=>(
                        <section className={styles.item} key={item.id}>
                        <img
                          src={item.product.banner}
                          width={120}
                          height={120}
                        />
                        <span>Qtd: {item.amount} - <b>{item.product.name}</b> - R$ {parseFloat(item.product.price) * item.amount}
                        
                        </span>
                        <span className={styles.description}>{item.product.description}</span>
                        </section>
                    ))}
 
                    <h3 className={styles.total}>Valor total: {calculateTotalOrder(order)}</h3>
                    <button className={styles.buttonOrder} onClick={handleFinishOrder}>
                        Concluir pedido
                    </button>
                </article>

            </section>
        </dialog>
    )
}
