import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentApp } from "../actions/appActions";
import ApplicationLoader from "../utils/ApplicationLoader";
import { AppState } from "../types";

const ViewPanel: React.FC = () => {
  const currentApp = useSelector<AppState, string | null>(
    (state) => state.appCommunication.currentApp
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentApp("app1"));
  }, []);
  function switchApp() {
    dispatch(setCurrentApp(currentApp === "app1" ? "app2" : "app1"));
  }
  return (
    <div className="view-panel">
      <button onClick={switchApp}>Switch app</button>
      <Suspense fallback={<div>Loading...</div>}>
        {currentApp && <ApplicationLoader appName={currentApp} />}
      </Suspense>
    </div>
  );
};

export default ViewPanel;
