import { createClient } from '@supabase/supabase-js';

// Configuration provided in the prompt
const SUPABASE_URL = 'https://ffzqgdxznsrbuhqbtmaw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmenFnZHh6bnNyYnVocWJ0bWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTQxMzEsImV4cCI6MjA4MDI3MDEzMX0.9cXG7oOyVaQB4a7msH5nibeOA-zeG5DG23knTb-qMrs';

// Initialize Supabase Client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
