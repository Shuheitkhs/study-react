import styles from "@/styles/Links.module.css";

const ITEMS = [
  {
    href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title:'Docs \u2192\u2192 ',
    description: 'Find in-depth information about Next.js features and&nbsp;API.'
   },
   {
    href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title:'learn →',
    description: 'Find in-depth information about Next.js features and&nbsp;API.'
   },
   {
    href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:'templetes →',
    description: 'Find in-depth information about Next.js features and&nbsp;API.'
   },
   {
    href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title:'deploy →',
    description: 'Find in-depth information about Next.js features and&nbsp;API.'
   }
]


export function Links () { 
return(
<div className={styles.grid}>
          {ITEMS.map(item => {
            return(
              <a key={item.href} href={item.href} className={styles.card}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </a>
            )
          })}
        </div>
        )
      }
