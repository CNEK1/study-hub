import styles from "./HhData.module.css";
import Card from "../Card/Card";
import { RateIcon } from "../../helpers/icons/RateIcon";
import { priceEU } from "../../helpers/helpers";

function HhData(): JSX.Element {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Total Vacancies</div>
        <div className={styles.countValue}>67</div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{priceEU(1000)}</div>
          <div className={styles.rate}>
            <div className={styles.filled}>
              <RateIcon />
            </div>
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{priceEU(2000)}</div>
          <div className={styles.rate}>
            <div className={styles.filled}>
              <RateIcon />
            </div>
            <div className={styles.filled}>
              <RateIcon />
            </div>
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{priceEU(3000)}</div>
          <div className={styles.rate}>
            <div className={styles.filled}>
              <RateIcon />
            </div>
            <div className={styles.filled}>
              <RateIcon />
            </div>
            <div className={styles.filled}>
              <RateIcon />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default HhData;
