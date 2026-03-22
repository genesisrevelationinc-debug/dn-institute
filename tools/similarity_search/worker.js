// 🌰 Import the handler function 🌰
import { handleRequest } from './index.js';

// 🌰 Add event listener for fetch events 🌰
  event.respondWith(handleRequest(event.request));
});