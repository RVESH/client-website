// In Cloudflare Workers, D1 is already provided as a binding:

// [[d1_databases]]
// binding = "universal_auth"



  export function getDatabase(env) {
  if (!env?.universal_auth) {
    throw new Error("D1 database binding 'universal_auth' is missing.");
  }

  return env.universal_auth;
}
  
  
  
  
  
 