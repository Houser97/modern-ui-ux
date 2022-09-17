import styles from './style'

const App = () => (
    <div className="bg-primary overflow-hidden w-full">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          NAVBAR
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Houser
        </div>
      </div>

    </div>
)

export default App;
