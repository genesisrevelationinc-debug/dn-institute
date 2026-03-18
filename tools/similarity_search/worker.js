// 🌰 Import the handler function 🌰
import { handleRequest } from './index.js';

// 🌰 Add event listener for fetch events 🌰
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});