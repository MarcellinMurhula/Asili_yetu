'use server';

/**
 * @fileOverview Summarizes medicinal plant information based on user queries.
 *
 * - summarizeMedicinalPlantInfo - A function that summarizes information about a medicinal plant.
 * - SummarizeMedicinalPlantInfoInput - The input type for the summarizeMedicinalPlantInfo function.
 * - SummarizeMedicinalPlantInfoOutput - The return type for the summarizeMedicinalPlantInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMedicinalPlantInfoInputSchema = z.object({
  plantName: z.string().describe('The name of the medicinal plant to summarize.'),
  additionalContext: z.string().optional().describe('Any additional context or specific questions about the plant.'),
});
export type SummarizeMedicinalPlantInfoInput = z.infer<
  typeof SummarizeMedicinalPlantInfoInputSchema
>;

const SummarizeMedicinalPlantInfoOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the medicinal plant and its uses.'),
});
export type SummarizeMedicinalPlantInfoOutput = z.infer<
  typeof SummarizeMedicinalPlantInfoOutputSchema
>;

export async function summarizeMedicinalPlantInfo(
  input: SummarizeMedicinalPlantInfoInput
): Promise<SummarizeMedicinalPlantInfoOutput> {
  return summarizeMedicinalPlantInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeMedicinalPlantInfoPrompt',
  input: {schema: SummarizeMedicinalPlantInfoInputSchema},
  output: {schema: SummarizeMedicinalPlantInfoOutputSchema},
  prompt: `You are a helpful assistant that summarizes information about medicinal plants.

  Summarize the properties and uses of the medicinal plant: {{plantName}}.

  {{#if additionalContext}}
  Also, consider the following context: {{additionalContext}}
  {{/if}}

  Keep the summary concise and easy to understand, aiming for no more than a few sentences.`,
});

const summarizeMedicinalPlantInfoFlow = ai.defineFlow(
  {
    name: 'summarizeMedicinalPlantInfoFlow',
    inputSchema: SummarizeMedicinalPlantInfoInputSchema,
    outputSchema: SummarizeMedicinalPlantInfoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
