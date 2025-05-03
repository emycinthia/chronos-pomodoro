import styles from './styles.module.css';

// tipagem
type HeadingProps = {
    children: React.ReactNode;
}

// destructuring props > children...
export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>;
}