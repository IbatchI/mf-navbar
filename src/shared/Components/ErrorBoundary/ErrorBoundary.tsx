import styles from './ErrorBoundary.module.scss'

export const ErrorBoundary = () => {
  return (
    <div className={styles.container}>
      <h2>ERROR BOUNDARY</h2>
      <code>Code Error: {JSON.stringify({ caca: 'caca' })}</code>
    </div>
  )
}
