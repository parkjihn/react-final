
// import s from "./CategoryRow.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchCategoriesList } from "../../../asyncActions/categories";
// import { Link } from "react-router-dom";
// import CategoriesItem from "../CategoriesItem/CategoriesItem";

// function CategoryRow() {
//   const categories = useSelector((store) => store.categories);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!categories.length) {
//       console.log("Fetching categories...");
//       dispatch(fetchCategoriesList());
//     }
//   }, [dispatch]);

//   return (
//     <ul className={s.items}>
//       {categories.map((elem) => (
//         <Link key={elem.id} to={"/category/" + elem.id}>
//           <CategoriesItem
//             img={elem.image}
//             name={elem.title}
//             id={elem.id}
//             count={categories.length}
//           />
//         </Link>
//       ))}
//     </ul>
//   );
// }


// export default CategoryRow;
