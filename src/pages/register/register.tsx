import styles from './register.module.css'
import infinityLogo from '../../assets/Infinity.svg'
import { Link } from 'react-router-dom'


export function Register() {

    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <div className={styles['card-header']}>
                    <img src={infinityLogo} alt="" />
                    <h1>Cadastrar</h1>
                </div>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="retypePassword">Confirmar senha</label>
                    <input type="password" name="retypePassword" id="retypePassword" />
                    <span>Já possui uma conta? <Link to={'/login'}>Login</Link></span>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </main>
    )
}