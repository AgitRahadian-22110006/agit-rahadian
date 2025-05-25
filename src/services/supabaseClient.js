// services/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Ganti dengan kredensial kamu dari https://app.supabase.com/project/_/settings/api
const supabaseUrl = 'https://hbodowtcuccrfkrzgwzm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhib2Rvd3RjdWNjcmZrcnpnd3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjI2MzQsImV4cCI6MjA2MzU5ODYzNH0.nxEo_ckKNb29j1OvuJotbICnhVKxYnXgPkcrXjTMbtU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
