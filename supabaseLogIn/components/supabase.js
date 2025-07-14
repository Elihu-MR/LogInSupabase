import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fwkuowmjggebbbpnmsgt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3a3Vvd21qZ2dlYmJicG5tc2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODA1MTYsImV4cCI6MjA2Njk1NjUxNn0.2nZtQrk1ZaSYeKbgXbgCcmSmkyr09-1aHUMqI3KlTjY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);




