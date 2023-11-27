"use client"
import Header from '../components/header/header'
import styles from './equipamentos.module.css'
import { useState } from 'react'

const equipamentoPage = () => {
    const [equipamento, setEquipamento] = useState(null)

    return (
        <>
            <Header />
            <div className={styles.bg}>
                <div className={styles.boxInventory}>
                    <div className={styles.armadura}>
                        <div onClick={() => setEquipamento('capacete')} className={styles.itemArmadura}></div>
                        <div onClick={() => setEquipamento('peitoral')} className={styles.itemArmadura}>
                            <img className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/golden_chestplate.png"} alt="peitoral" />
                        </div>
                        <div onClick={() => setEquipamento('calca')} className={styles.itemArmadura}></div>
                        <div onClick={() => setEquipamento('bota')} className={styles.itemArmadura}></div>
                        <div onClick={() => setEquipamento('espada')} className={styles.itemArmadura}></div>
                        {
                            equipamento == 'capacete' ? (
                                <div>
                                    <h1>Capacete</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                        {
                            equipamento == 'peitoral' ? (
                                <div>
                                    <h1>Peitoral</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                        {
                            equipamento == 'calca' ? (
                                <div>
                                    <h1>Calça</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                        {
                            equipamento == 'bota' ? (
                                <div>
                                    <h1>Bota</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>

                            ) : null
                        }
                        {
                            equipamento == 'espada' ? (
                                <div>
                                    <h1>Espada</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor do ataque' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default equipamentoPage