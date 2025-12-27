export interface AdProps {
  slotId: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

export type AppState = 'countdown' | 'reveal';