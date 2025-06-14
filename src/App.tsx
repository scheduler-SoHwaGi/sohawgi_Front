import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthProvider';
import { AppContent } from './layout/AppContent';

const queryClient = new QueryClient();

/**
 * The main entry point for the React application, setting up global providers for server state, authentication, and routing.
 *
 * Wraps the application with {@link QueryClientProvider} for React Query, {@link AuthProvider} for authentication context, and {@link Router} for client-side routing, rendering the main {@link AppContent} component.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
