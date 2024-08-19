// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cbgfkbheaedprgbnstny.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZ2ZrYmhlYWVkcHJnYm5zdG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzU2ODAsImV4cCI6MjAzODQ1MTY4MH0.nLrevMD4khcXG5bUMi3CTCt-Vp4v6XboxMOzppISe88';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
