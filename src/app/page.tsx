import styles from './page.module.css';
import { NavLink } from '@/shared/ui';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavLink href='/' color='#4eb334'>
        Link
      </NavLink>
    </main>
  );
}
