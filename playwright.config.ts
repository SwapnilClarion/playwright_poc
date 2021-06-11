import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        // Browser options
        headless: false,
        slowMo: 50,
    
        // Context options
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    }
}