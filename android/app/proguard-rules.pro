# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Keep React Native classes
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }

# Keep Material Design components
-keep class com.google.android.material.** { *; }

# Keep AndroidX core classes
-keep class androidx.core.** { *; }
-keep class androidx.appcompat.** { *; }

# Keep third-party library classes that use deprecated APIs
-dontwarn com.yalantis.ucrop.**
-dontwarn com.swmansion.rnscreens.**
-keep class com.yalantis.ucrop.** { *; }
-keep class com.swmansion.rnscreens.** { *; }
