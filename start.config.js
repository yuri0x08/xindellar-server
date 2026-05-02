module.exports = {
    apps: [
      {
        name: "xindellar",
      
        script: "/home/xin/modules/adjdk21/bin/java",
       
        args: [
          "-Xms3072M", "-Xmx3072M",
          "--add-modules=jdk.incubator.vector",
          "-XX:+UseG1GC",
          "-XX:+ParallelRefProcEnabled",
          "-XX:MaxGCPauseMillis=50",
          "-XX:+UnlockExperimentalVMOptions",
          "-XX:+DisableExplicitGC",
          "-XX:+AlwaysPreTouch",
          "-XX:G1HeapWastePercent=5",
          "-XX:G1MixedGCCountTarget=4",
          "-XX:InitiatingHeapOccupancyPercent=15",
          "-XX:G1MixedGCLiveThresholdPercent=90",
          "-XX:G1RSetUpdatingPauseTimePercent=5",
          "-XX:SurvivorRatio=32",
          "-XX:+PerfDisableSharedMem",
          "-XX:MaxTenuringThreshold=1",
          "-Dusing.aikars.flags=https://mcflags.emc.gs",
          "-Daikars.new.flags=true",
          "-XX:G1NewSizePercent=30",
          "-XX:G1MaxNewSizePercent=40",
          "-XX:G1HeapRegionSize=8M",
          "-XX:G1ReservePercent=20",
          "-jar",
          "server.jar",
        ],
        cwd: "/home/xin/xindellar/",
        interpreter: "none",
        autorestart: true,
        max_memory_restart: "5G",
        restart_delay: 5000 
      }
    ]
  };
  