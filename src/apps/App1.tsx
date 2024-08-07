import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentLoader from "../utils/ComponentLoader";
import { updateMenu } from "../actions/menuActions";
import { updateSharedData } from "../actions/appActions";
import { AppState, SharedData } from "../types";

const App1: React.FC = () => {
  const dispatch = useDispatch();
  const sharedData = useSelector<AppState, SharedData>(
    (state) => state.appCommunication.sharedData
  );

  useEffect(() => {
    dispatch(
      updateMenu([
        { id: "app1Home", label: "App 1 Home", link: "#" },
        { id: "app1Settings", label: "App 1 Settings", link: "#settings" },
      ])
    );
  }, [dispatch]);

  return (
    <div>
      <h1>App 1</h1>
      <h1>
        Using version 1 of the form component dynamically using ComponentLoader
      </h1>
      <ComponentLoader componentName="RegistrationForm" version="v1" />

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

export default App1;
