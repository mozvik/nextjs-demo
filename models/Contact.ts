export type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  interested: {
    analytics: boolean;
    dev: boolean;
    uxui: boolean;
    business: boolean;
  }
}

