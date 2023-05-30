import css from "./HomeView.module.css";

const HomeView = () => (
   <div className={css.container}>
     <h1 className={css.title}>
       Welcome page of our Phonebook app
      <span role="img" aria-label="Welcome Icon" className={css.icon}>
         💁‍♀️
       </span>
     </h1>
   </div>
);

export default HomeView;