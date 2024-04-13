import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import Navigation from "../Navigation/Navigation";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loader from "../Loader/Loader";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
// const NotFoundPage = lazy(() =>
//   import("../../pages/NotFoundPage/NotFoundPage")
// );

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* <Navigation />
        return ( */}
        <Layout>
          {isRefreshing ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      component={<RegistrationPage />}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      component={<LoginPage />}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      component={<ContactsPage />}
                      redirectTo="/login"
                    />
                  }
                />
              </Routes>
            </Suspense>
          )}
        </Layout>
      </div>
    </>
  );
}

// export default function App() {
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     <>
//       <div>
//         <Navigation />

//         <Layout>
//           {refreshing ? (
//             <Loader />
//           ) : (
//             <Suspense fallback={<Loader />}>
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/contacts" element={<ContactsPage />} />
//                 <Route path="/register" element={<RegistrationPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="*" element={<NotFoundPage />} />
//               </Routes>
//             </Suspense>
//           )}
//         </Layout>
//       </div>
//     </>
//   );
// }
