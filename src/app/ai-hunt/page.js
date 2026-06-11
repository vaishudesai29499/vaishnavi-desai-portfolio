import { redirect } from 'next/navigation';
import { AI_HUNT_ENTRY } from '@/lib/routes';

export default function AiHuntPage() {
  redirect(AI_HUNT_ENTRY);
}
