import React, { useCallback, useEffect, useState } from 'react'
import {View} from 'react-native'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'
import * as SplashScreen from 'expo-splash-screen';
import { useAppDispatch } from 'Redux/hooks'
import { getlocation } from 'Redux/LocationSlice'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Layout = ()=>{
  const dispatch = useAppDispatch()
  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        await dispatch(getlocation())
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  
  if(!appIsReady){
    return null
  }

  return <View style={{flex:1}} onLayout={onLayoutRootView}>
    <Stack></Stack>
    </View>
}


const RootLayout = () => {
  return (
    <Provider store={store}>
    <Layout></Layout>
    </Provider>
  )
}

export default RootLayout