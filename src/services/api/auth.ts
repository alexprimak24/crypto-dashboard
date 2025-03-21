import supabase from './supabase';

export async function signInWithGoogle() {
  const { data: user, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:5173/redirect',
    },
  });

  if (error) {
    console.error(error);
    throw new Error('There is an error with logining with google');
  }
  return user;
}

export async function onAuthChange() {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth change', event, session);
  });
}
