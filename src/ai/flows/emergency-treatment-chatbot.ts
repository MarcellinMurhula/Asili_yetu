'use server';

/**
 * @fileOverview This file defines a Genkit flow for an emergency treatment chatbot.
 *
 * - emergencyTreatmentChatbot - A function that takes a user's question and returns a precise treatment or remedy suggestion.
 * - EmergencyTreatmentChatbotInput - The input type for the emergencyTreatmentChatbot function.
 * - EmergencyTreatmentChatbotOutput - The return type for the emergencyTreatmentChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmergencyTreatmentChatbotInputSchema = z.object({
  query: z.string().describe('The user\s question about emergency treatments.'),
});
export type EmergencyTreatmentChatbotInput = z.infer<typeof EmergencyTreatmentChatbotInputSchema>;

const EmergencyTreatmentChatbotOutputSchema = z.object({
  answer: z.string().describe('A concise answer with treatment or remedy suggestion.'),
});
export type EmergencyTreatmentChatbotOutput = z.infer<typeof EmergencyTreatmentChatbotOutputSchema>;

export async function emergencyTreatmentChatbot(input: EmergencyTreatmentChatbotInput): Promise<EmergencyTreatmentChatbotOutput> {
  return emergencyTreatmentChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'emergencyTreatmentChatbotPrompt',
  input: {schema: EmergencyTreatmentChatbotInputSchema},
  output: {schema: EmergencyTreatmentChatbotOutputSchema},
  prompt: `You are a chatbot providing emergency treatment advice using traditional African medicinal plants, specifically for the Great Lakes region (Bukavu and surrounding areas).

  A user will ask a question, and you must provide a concise and precise answer (no more than a few sentences) with a treatment or remedy suggestion using local plants. Be very brief and to-the-point.

  User Question: {{{query}}}`,
});

const emergencyTreatmentChatbotFlow = ai.defineFlow(
  {
    name: 'emergencyTreatmentChatbotFlow',
    inputSchema: EmergencyTreatmentChatbotInputSchema,
    outputSchema: EmergencyTreatmentChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
