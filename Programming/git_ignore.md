# Git ignore

프로젝트를 Git을 통해 관리할 때 ignore할 스크립트이다.

                # Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio and Webstorm
                # Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

                .AppleDouble

                # User-specific stuff:
                .idea/workspace.xml
                .idea/tasks.xml
                .idea/dictionaries
                .idea/vcs.xml
                .idea/jsLibraryMappings.xml

                # Sensitive or high-churn files:
                .idea/dataSources.ids
                .idea/dataSources.xml
                .idea/dataSources.local.xml
                .idea/sqlDataSources.xml
                .idea/dynamic.xml
                .idea/uiDesigner.xml

                # Gradle:
                .idea/gradle.xml
                .idea/libraries

                # Mongo Explorer plugin:
                .idea/mongoSettings.xml

                ## File-based project format:
                *.iws

                ## Plugin-specific files:

                # IntelliJ
                /out/

                # mpeltonen/sbt-idea plugin
                .idea_modules/

                # JIRA plugin
                atlassian-ide-plugin.xml

                # Crashlytics plugin (for Android Studio and IntelliJ)
                com_crashlytics_export_strings.xml
                crashlytics.properties
                crashlytics-build.properties
                fabric.properties
                .idea/


                .DS_Store

                application/cache/*
                !application/cache/index.html
                !application/cache/.htaccess

                application/logs/*
                !application/logs/index.html
                !application/logs/.htaccess

                user_guide_src/build/*
                user_guide_src/cilexer/build/*
                user_guide_src/cilexer/dist/*
                user_guide_src/cilexer/pycilexer.egg-info/*
                /vendor/

                # IDE Files
                #-------------------------
                /nbproject/
                .idea/*
                app/logs/*

                ## Sublime Text cache files
                *.tmlanguage.cache
                *.tmPreferences.cache
                *.stTheme.cache
                *.sublime-workspace
                *.sublime-project
                uploads
                Vagrantfile

                ### Node
                node_modules/
                app/cache
