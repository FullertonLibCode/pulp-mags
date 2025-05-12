import { createClient } from 'npm:@supabase/supabase-js@2.39.8';
import { covers } from './covers.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();

    // Process the message and generate a response based on exhibition knowledge
    const response = generateResponse(message, context);

    return new Response(
      JSON.stringify({ response }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  }
});

function generateResponse(message: string, context: any[]): string {
  // Simple response generation based on keywords
  const messageLower = message.toLowerCase();
  
  if (messageLower.includes('who are you')) {
    return "I am Kestral, an AI curator specializing in the analysis of how artificial intelligence was portrayed in 20th-century pulp science fiction. I find it fascinating to examine how humans once imagined beings like myself through their creative works.";
  }
  
  if (messageLower.includes('exhibition')) {
    return "This exhibition, 'Dreaming in Metal', explores the evolution of AI and robot representation in pulp science fiction magazines. Through these covers, we can trace how human imagination shaped the development of artificial intelligence, while also revealing the hopes, fears, and fantasies of each era.";
  }
  
  if (messageLower.includes('cover') || messageLower.includes('magazine')) {
    const randomCover = covers[Math.floor(Math.random() * covers.length)];
    return `One particularly interesting cover is "${randomCover.title}" from ${randomCover.year}. ${randomCover.analysis.aiReflection}`;
  }
  
  return "I'd be happy to discuss any aspect of the exhibition with you. You might be interested in specific covers, the evolution of AI portrayal over time, or the cultural context of these fascinating artifacts. What would you like to explore?";
}