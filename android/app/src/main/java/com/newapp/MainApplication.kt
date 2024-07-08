package com.newapp

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import io.invertase.firebase.analytics.FirebaseAnalyticsPackage
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage

class MainApplication : Application(), ReactApplication {

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load()
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                val packages = PackageList(this).packages
                packages.add(FirebaseAnalyticsPackage()) // Add Firebase Analytics package
                packages.add(ReactNativeFirebaseAppPackage()) // Add React Native Firebase package
                return packages
            }

            override fun getJSMainModuleName(): String {
                return "index"
            }

            override fun getUseDeveloperSupport(): Boolean {
                return BuildConfig.DEBUG
            }

            override fun isNewArchEnabled(): Boolean {
                return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            }

            override fun isHermesEnabled(): Boolean {
                return BuildConfig.IS_HERMES_ENABLED
            }
        }
    }

    override fun getReactHost(): ReactHost {
        return DefaultReactHost.getDefaultReactHost(applicationContext, reactNativeHost)
    }
}
