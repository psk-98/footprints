import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "footprints-next",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.43.198:3000",
    cleartext: true,
  },
}

export default config
