import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ttimpldzxjvrycglmsrp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aW1wbGR6eGp2cnljZ2xtc3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTE4NzgsImV4cCI6MjA2OTIyNzg3OH0.yi-VBVylis1uGvTgblkugtms9T00k6GvWgrY4lCPoes';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
