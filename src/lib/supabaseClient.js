// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://jsysmydpnimwsxbdlrhm.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzeXNteWRwbmltd3N4YmRscmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MTg5OTQsImV4cCI6MjA3OTA5NDk5NH0.mwNk0Zf1CEhOtzuquLckQwauQMmFsnkEPBJiosMq6sw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
