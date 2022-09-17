import styles from './style'

import { Navbar, Billing, Business, Button, CardDeal, Testimonials,
         Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Stats } from './components';

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

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Houser
        </div>
      </div>

    </div>
)

export default App;
