// src/ai/flows/analyze-handwriting-similarity.ts
'use server';
/**
 * @fileOverview Analyzes the similarity between a handwriting sample and a handwriting profile.
 *
 * - analyzeHandwritingSimilarity - A function that analyzes the similarity between a handwriting sample and a handwriting profile.
 * - AnalyzeHandwritingSimilarityInput - The input type for the analyzeHandwritingSimilarity function.
 * - AnalyzeHandwritingSimilarityOutput - The return type for the analyzeHandwritingSimilarity function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnalyzeHandwritingSimilarityInputSchema = z.object({
  profileImageUrl: z.string().describe('The URL of the handwriting profile image.'),
  sampleImageUrl: z.string().describe('The URL of the handwriting sample image.'),
});
export type AnalyzeHandwritingSimilarityInput = z.infer<typeof AnalyzeHandwritingSimilarityInputSchema>;

const AnalyzeHandwritingSimilarityOutputSchema = z.object({
  similarityPercentage: z.number().describe('The similarity percentage between the sample and the profile, ranging from 0 to 100.'),
  analysis: z.string().describe('A brief analysis of the similarity, highlighting key similarities and differences.'),
});
export type AnalyzeHandwritingSimilarityOutput = z.infer<typeof AnalyzeHandwritingSimilarityOutputSchema>;

export async function analyzeHandwritingSimilarity(
  input: AnalyzeHandwritingSimilarityInput
): Promise<AnalyzeHandwritingSimilarityOutput> {
  return analyzeHandwritingSimilarityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeHandwritingSimilarityPrompt',
  input: {
    schema: z.object({
      profileImageUrl: z.string().describe('The URL of the handwriting profile image.'),
      sampleImageUrl: z.string().describe('The URL of the handwriting sample image.'),
    }),
  },
  output: {
    schema: z.object({
      similarityPercentage: z.number().describe('The similarity percentage between the sample and the profile, ranging from 0 to 100.'),
      analysis: z.string().describe('A brief analysis of the similarity, highlighting key similarities and differences.'),
    }),
  },
  prompt: `You are an AI expert in handwriting analysis. You will receive a handwriting profile image and a handwriting sample image.

  Analyze the two images and determine the similarity percentage between the handwriting sample and the handwriting profile.
  Also provide a brief analysis of the similarity, highlighting key similarities and differences.

  Profile Image: {{media url=profileImageUrl}}
  Sample Image: {{media url=sampleImageUrl}}

  Return the similarity percentage as a number between 0 and 100.
  Return the analysis as a string.
  `,
});

const analyzeHandwritingSimilarityFlow = ai.defineFlow<
  typeof AnalyzeHandwritingSimilarityInputSchema,
  typeof AnalyzeHandwritingSimilarityOutputSchema
>({
  name: 'analyzeHandwritingSimilarityFlow',
  inputSchema: AnalyzeHandwritingSimilarityInputSchema,
  outputSchema: AnalyzeHandwritingSimilarityOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
