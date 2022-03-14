import React, { useCallback, useContext, useMemo, useState } from "react";
import { Image, View } from "react-native";

type LoadingStateType = "idle" | "loading";

interface SplashLoadingContextData {
  setLoadingState: (state: LoadingStateType) => void;
}

const SplashLoadingContext = React.createContext<SplashLoadingContextData>(
  {} as SplashLoadingContextData
);

export const SplashLoadingProvider: React.FC = ({ children }) => {
  const [loadingState, setIsLoadingState] = useState<LoadingStateType>("idle");

  const setLoadingState = useCallback((state: LoadingStateType) => {
    setIsLoadingState(state);
  }, []);

  const contextValue = useMemo(
    () => ({
      setLoadingState,
    }),
    [setLoadingState]
  );

  return (
    <SplashLoadingContext.Provider value={contextValue}>
      {children}

      {loadingState === "loading" && (
        <View
          style={{
            flex: 1,
            backgroundColor: "#07123280",
            position: "absolute",
            zIndex: 2,
            height: "100%",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../../assets/logo/banqi.png")}
            style={{ width: 250, height: 91 }}
          />
        </View>
      )}
    </SplashLoadingContext.Provider>
  );
};

export default function useSplashLoading(): SplashLoadingContextData {
  const context = useContext(SplashLoadingContext);

  return context;
}
