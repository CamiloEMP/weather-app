export const BoxCards = ({ children, otherClass }) => {
  return (
    <section className={` w-11/12 max-w-md mx-auto shadow-md  rounded-xl aspect-square py-8 px-4 mt-12 shadow-neutral-500 dark:text-slate-200 dark:shadow-black ${otherClass || ''}`}>
      {children}
    </section>
  )
}
