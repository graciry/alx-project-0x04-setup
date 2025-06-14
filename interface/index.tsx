export interface ButtonProps {
  buttonLabel: string;
  buttonSize: string;
  buttonBackgroundColor: string;
  action: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

// interface/index.ts
export interface PageRouteProps {
  // Example property, customize as needed
  title?: string;
}

