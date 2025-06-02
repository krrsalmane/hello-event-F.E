export interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  category: string;
  price: number;
  availableTickets: number;
  imageUrl?: string;
} 