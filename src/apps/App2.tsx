import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentLoader from "../utils/ComponentLoader";
import { updateMenu } from "../actions/menuActions";
import { updateSharedData } from "../actions/appActions";
import { AppState, SharedData } from "../types";

const App2: React.FC = () => {
  const dispatch = useDispatch();
  const sharedData = useSelector<AppState, SharedData>(
    (state) => state.appCommunication.sharedData
  );
  useEffect(() => {
    dispatch(
      updateMenu([
        { id: "app2Home", label: "App 2 Home", link: "#" },
        { id: "app2Settings", label: "App 2 Settings", link: "#settings" },
      ])
    );
  }, [dispatch]);

  return (
    <div>
      <h1>App 2</h1>
      <h1>
        Using version 2 of the form component dynamically using ComponentLoader
      </h1>
      <ComponentLoader componentName="RegistrationForm" version="v2" />

      <p>Shared Data: {JSON.stringify(sharedData)}</p>
      <button
        onClick={() =>
          dispatch(
            updateSharedData({
              counter: ((sharedData.counter as number) || 0) + 1,
            })
          )
        }
      >
        Increment Shared Counter
      </button>
    </div>
  );
};

export default App2;
