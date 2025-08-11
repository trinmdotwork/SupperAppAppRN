import React, { useCallback, useEffect } from 'react';
import {
  NativeModules,
  Text,
  TouchableOpacity,
  TurboModuleRegistry,
  View,
} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
const ConnectNativeModule = NativeModules.ConnectNativeModule;
// const ConnectNativeModule = TurboModuleRegistry.getEnforcing(
//   'ConnectNativeModule',
// );

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  console.log('ConnectNativeModule', ConnectNativeModule);

  console.log(
    'NativeModules.PlatformConstants',
    { NativeModules: NativeModules.PlatformConstants },
    TurboModuleRegistry.getEnforcing('PlatformConstants'),
  );

  const goToNextApp = useCallback(async () => {
    try {
      ConnectNativeModule?.openApp(
        'MiniAppAppRN',
        'index.android-1.bundle',
        {},
        true,
        () => {},
      );
      const result = await ConnectNativeModule?.getBundleNames();
      console.log('goToNextApp result', result);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    // <GestureHandlerRootView>
    <View>
      <TouchableOpacity onPress={goToNextApp}>
        <Text>goToNextApp</Text>
      </TouchableOpacity>
    </View>
    // </GestureHandlerRootView>
  );
}

export default App;
