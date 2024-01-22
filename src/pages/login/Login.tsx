import { useRef } from 'react'
import styles from './Login.module.css'
import infinityIcon from '../../assets/Infinity.svg'
import { Link } from 'react-router-dom'

export function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles['card-header']}>
          <img src={infinityIcon} alt="" />
          <h1>Fazer Log In</h1>
        </div>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" ref={emailRef} id='email' />
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordRef} />
          <span>Não possui uma conta? <Link to={'/register'}>Cadastre-se</Link></span>
          <button type="submit" onClick={handleLogin}>ENTRAR</button>
        </form>
      </div>
    </main >
  )

}

