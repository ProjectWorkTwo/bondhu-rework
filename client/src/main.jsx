import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainRoutes from "./Routers/MainRoutes.jsx";
import ProfilePopUpProvider from "./Providers/ProfilePopUpProvider.jsx";
import PageSideBarProvider from "./Providers/PageSideBarProvider.jsx";
import GroupSideBarProvider from "./Providers/GroupSideBarProvider.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateGroupPageFormProvider from "./Providers/CreateGroupPageFormProvider.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import UnAuthorizeProvider from "./Providers/UnAuthorizeProvider.jsx";
import UpdateGroupPageFormProvider from "./Providers/UpdateGroupPageFormProvider.jsx";
import LoaderProvider from "./Providers/LoaderProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoaderProvider>
        <AuthProvider>
          <UnAuthorizeProvider>
            <CreateGroupPageFormProvider>
              <UpdateGroupPageFormProvider>
                <ProfilePopUpProvider>
                  <GroupSideBarProvider>
                    <PageSideBarProvider>
                      <MainRoutes>
                        <App />
                      </MainRoutes>
                    </PageSideBarProvider>
                  </GroupSideBarProvider>
                </ProfilePopUpProvider>
              </UpdateGroupPageFormProvider>
            </CreateGroupPageFormProvider>
          </UnAuthorizeProvider>
        </AuthProvider>
      </LoaderProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
