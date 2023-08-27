//styles
import styles from "./Table.module.css";

//components
import { TBody } from "./TBody";
import { THead } from "./THead";

export const Table = ({ data, initialInvestment }) => {
  return (
    <table className={styles.result}>
      <THead />
      <TBody data={data} initialInvestment={initialInvestment} />
    </table>
  );
};
