import React from 'react';
import { createRoot } from 'react-dom/client';
import { PollWidget } from './components/PollWidget';
import './index.css';

// Define the PollWidget object types
interface PollWidgetGlobal {
  init: () => void;
  version: string;
}

// Initialize function with error handling
const initPolls = (): void => {
  try {
    const pollContainers = document.querySelectorAll('[data-poll-widget]');
    
    if (pollContainers.length === 0) {
      console.warn('No poll widget containers found');
      return;
    }

    pollContainers.forEach((container) => {
      const pollsData = container.getAttribute('data-polls');
      if (!pollsData) {
        console.warn('No polls data found for container:', container);
        return;
      }

      try {
        const polls = JSON.parse(pollsData);
        const root = createRoot(container);
        root.render(
          <React.StrictMode>
            <PollWidget polls={polls} />
          </React.StrictMode>
        );
      } catch (error) {
        console.error('Failed to initialize poll container:', error);
      }
    });
  } catch (error) {
    console.error('Failed to initialize polls:', error);
  }
};

// Create the widget object
const widgetObject: PollWidgetGlobal = {
  init: initPolls,
  version: '1.0.0'
};

// Expose to window
if (typeof window !== 'undefined') {
  window.PollWidget = widgetObject;
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', initPolls);
}

// Export for module usage
export { PollWidget };
export default widgetObject;