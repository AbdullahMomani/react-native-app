package com.newapp

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.soloader.SoLoader
import com.microsoft.codepush.react.CodePush //  import CodePush
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.newapp.R


class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost = object : DefaultReactNativeHost(this) {


        override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages
           
            return packages
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }

        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
        // Example of initializing something specific to a new architecture
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // Initialize or load specific modules related to the new RN architecture
        }
    }
}
